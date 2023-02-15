import { NuxtError } from "#app";
import { Post } from "~~/components/admin/AdminPostForm.vue";

interface State {
  loadedPosts: Post[];
}

type PostResponse = Record<string, Post>;

// Option Store
export const useRootStore = defineStore("root", {
  // convert to a function
  state: (): State => ({
    loadedPosts: [],
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
      } catch (e) {
        const err = e as NuxtError;
        throw createError({
          statusCode: err.statusCode,
          statusMessage: err.statusMessage,
          fatal: true,
        });
      }
    },
    // mutations can now become actions, instead of `state` as first argument use `this`
    setPosts(payload: Post[]) {
      this.loadedPosts = payload;
    },
  },
});
