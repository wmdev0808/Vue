import { NuxtError } from "#app";
import { Post } from "~~/components/admin/AdminPostForm.vue";

interface State {
  posts: Post[];
  token: string | null;
}

type PostResponse = Record<string, Post>;

interface AuthInput {
  isLogin: boolean;
  email: string;
  password: string;
}

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

// Option Store
export const useRootStore = defineStore("root", {
  // convert to a function
  state: (): State => ({
    posts: [],
    token: null,
  }),
  actions: {
    async fetchPosts() {
      const config = useRuntimeConfig();

      try {
        const res = await $fetch<PostResponse>(
          `${config.public.apiBase}/posts.json`
        );

        const postsArray: Post[] = [];
        for (const key in res) {
          postsArray.push({ ...res[key], id: key });
        }
        this.setPosts(postsArray);

        return postsArray;
      } catch (e) {
        const err = e as NuxtError;
        throw createError({
          statusCode: err.statusCode,
          statusMessage: err.statusMessage,
          fatal: true,
        });
      }
    },
    createPost(payload: Post) {
      const createdPost = {
        ...payload,
        updatedDate: new Date(),
      };

      const config = useRuntimeConfig();

      return $fetch<{ name: string }>(
        `${config.public.apiBase}/posts.json?auth=${this.token}`,
        {
          method: "POST",
          body: createdPost,
        }
      )
        .then((result) => {
          this.addPost({ ...createdPost, id: result.name });
        })
        .catch((e) => {
          const err = e as NuxtError;
          throw createError({
            fatal: true,
            statusCode: err.statusCode,
            statusMessage: err.statusMessage,
          });
        });
    },
    updatePost(payload: Post) {
      const config = useRuntimeConfig();

      return $fetch(
        `${config.public.apiBase}/posts/${payload.id}.json?auth=${this.token}`,
        {
          method: "PUT",
          body: payload,
        }
      )
        .then(() => {
          this.editPost(payload);
        })
        .catch((e) => {
          const err = e as NuxtError;
          throw createError({
            fatal: true,
            statusCode: err.statusCode,
            statusMessage: err.statusMessage,
          });
        });
    },
    authenticateUser(authInput: AuthInput) {
      const config = useRuntimeConfig();
      const authCookie = useCookie<{
        token: string | null;
        expirationDate: string | null;
      }>("authInfo", {
        default: () => ({ token: this.token, expirationDate: null }),
      });

      let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.public.apiKey}`;
      if (!authInput.isLogin) {
        authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.public.apiKey}`;
      }

      return $fetch<AuthResponse>(authUrl, {
        method: "POST",
        body: {
          email: authInput.email,
          password: authInput.password,
          returnSecureToken: true,
        },
      })
        .then((result) => {
          const token = result.idToken;
          const tokenExpiration = (
            new Date().getTime() +
            +result.expiresIn * 1000
          ).toString();

          this.setToken(token);
          localStorage.setItem("token", token);
          localStorage.setItem("tokenExpiration", tokenExpiration);

          authCookie.value.token = token;
          authCookie.value.expirationDate = tokenExpiration;

          // this.setLogoutTimer(+result.expiresIn * 1000);
        })
        .catch((e) => console.log(e));
    },
    setLogoutTimer(duration: number) {
      setTimeout(() => {
        this.clearToken();
      }, duration);
    },
    logout() {
      const authCookie = useCookie<{
        token: string | null;
        expirationDate: string | null;
      }>("authInfo");

      this.clearToken();

      if (authCookie && authCookie.value) {
        authCookie.value.token = null;
        authCookie.value.expirationDate = null;
      }

      if (process.client) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
      }
    },
    initAuth() {
      const authCookie = useCookie<{
        token: string | null;
        expirationDate: string | null;
      }>("authInfo");

      let token: string | null, expirationDate: string | null;

      if (process.server) {
        if (!authCookie) {
          return;
        }
        token = authCookie.value.token;
        expirationDate = authCookie.value.expirationDate;
      } else {
        token = localStorage.getItem("token");
        expirationDate = localStorage.getItem("tokenExpiration");
      }

      if (
        expirationDate === null ||
        token === null ||
        new Date().getTime() > +expirationDate
      ) {
        console.log("No token or invalid token");
        this.logout();
        return;
      }

      // this.setLogoutTimer(+expirationDate - new Date().getTime());
      this.setToken(token);
    },
    // mutations can now become actions, instead of `state` as first argument use `this`
    setPosts(payload: Post[]) {
      this.posts = payload;
    },
    addPost(payload: Post) {
      this.posts.push(payload);
    },
    editPost(payload: Post) {
      const postIndex = this.posts.findIndex((post) => post.id === payload.id);
      this.posts[postIndex] = payload;
    },
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
  },
  getters: {
    loadedPosts(state) {
      return state.posts;
    },
    isAuthenticated(state) {
      return state.token != null;
    },
  },
});
