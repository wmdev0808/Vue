import type { InjectionKey, Ref } from "vue";

export const userAgeInjectionKey = Symbol() as InjectionKey<Ref<number>>;
