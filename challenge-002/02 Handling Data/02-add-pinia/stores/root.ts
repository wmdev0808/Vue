import { Post } from "~~/components/admin/AdminPostForm.vue";

interface State {
  loadedPosts: Post[];
}

// Option Store
export const useRootStore = defineStore("root", {
  // convert to a function
  state: (): State => ({
    loadedPosts: [],
  }),
  actions: {
    fetchPosts() {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          this.setPosts([
            {
              id: "1",
              title: "First Post",
              previewText: "This is our first post!",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
            },
            {
              id: "2",
              title: "Second Post",
              previewText: "This is our second post!",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
            },
          ]);
          resolve();
          // reject(new Error());
        }, 1000);
      });
    },
    // mutations can now become actions, instead of `state` as first argument use `this`
    setPosts(payload: Post[]) {
      this.loadedPosts = payload;
    },
  },
});
