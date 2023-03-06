import { PiniaPluginContext, StateTree } from "pinia";

function PiniaAuthPlugin({ store }: PiniaPluginContext) {
  if (process.client) {
    const token = localStorage.getItem("token");
    if (token) {
      store.$patch({ token: token } as StateTree);
    }
  }
  console.log(`pinia plugin has been executed`);
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(PiniaAuthPlugin);
});
