import { PiniaPluginContext } from "pinia";
import { useRootStore } from "~~/stores/root";

async function PostsPlugin({ pinia }: PiniaPluginContext) {
  const rootStore = useRootStore(pinia);
  const posts = await rootStore.fetchPosts();

  rootStore.$patch({ posts });
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(PostsPlugin);
});
