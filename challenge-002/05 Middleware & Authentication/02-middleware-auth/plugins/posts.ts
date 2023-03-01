import { PiniaPluginContext } from "pinia";
import { useRootStore } from "~~/stores/root";

async function PostsPlugin({ pinia }: PiniaPluginContext) {
  const rootStore = useRootStore(pinia);
  await rootStore.fetchPosts();
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(PostsPlugin);
});
