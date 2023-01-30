import type { State } from "vue";
import type { ActionTree } from "vuex";

import type { AuthState } from ".";

export interface AuthPayload {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

const authActions: ActionTree<AuthState, State> = {
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
      console.log(responseData);
      const error = new Error(
        responseData.message || "Failed to authenticate."
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
