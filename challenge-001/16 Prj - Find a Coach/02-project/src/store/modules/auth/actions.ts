import type { State } from "vue";
import type { ActionTree } from "vuex";

import type { AuthState } from ".";

export interface AuthPayload {
  email: string;
  password: string;
}

const authActions: ActionTree<AuthState, State> = {
  async login(context, payload: AuthPayload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        import.meta.env.VITE_AUTH_WEB_API_KEY
      }`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.error.message ||
          "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    console.log(responseData);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async signup(context, payload: AuthPayload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_AUTH_WEB_API_KEY
      }`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(`response data: => `, responseData);
      const error = new Error(
        responseData.error.message || "Failed to authenticate."
      );
      throw error;
    }

    console.log(responseData);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};

export default authActions;
