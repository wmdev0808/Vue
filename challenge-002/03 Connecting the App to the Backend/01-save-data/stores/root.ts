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
    createPost(payload: Post) {
      const createdPost = {
        ...payload,
        updatedDate: new Date(),
      };

      const config = useRuntimeConfig();

      return $fetch<{ name: string }>(`${config.public.apiBase}/posts.json`, {
        method: "POST",
        body: createdPost,
      })
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

      return $fetch(`${config.public.apiBase}/posts/${payload.id}.json`, {
        method: "PUT",
        body: payload,
      })
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
    // mutations can now become actions, instead of `state` as first argument use `this`
    setPosts(payload: Post[]) {
      this.loadedPosts = payload;
    },
    addPost(payload: Post) {
      this.loadedPosts.push(payload);
    },
    editPost(payload: Post) {
      const postIndex = this.loadedPosts.findIndex(
        (post) => post.id === payload.id
      );
      this.loadedPosts[postIndex] = payload;
    },
  },
});
