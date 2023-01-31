import type { State } from "vue";
import type { ActionTree } from "vuex";

import type { AuthState } from ".";

export interface AuthPayload {
  email: string;
  password: string;
  mode: "signup" | "login";
}

let timer: number | undefined;

const authActions: ActionTree<AuthState, State> = {
  async login(context, payload: AuthPayload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload: AuthPayload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
      import.meta.env.VITE_AUTH_WEB_API_KEY
    }`;

    if (mode === "signup") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_AUTH_WEB_API_KEY
      }`;
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.error.message ||
          "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 9000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expirationDate.toString());

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +(tokenExpiration ?? 0) - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);
    context.commit("setUser", {
      token: null,
      userId: null,
    });
    context.commit("setAutoLogout", false);
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout", true);
  },
};

export default authActions;
