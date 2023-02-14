# Nuxt

## 01. Pages, Routing & Views

### App file

#### Minimal usage

- With Nuxt 3, the `pages/` directory is optional. If not present, Nuxt won't include `vue-router` dependency. This is useful when working on a landing page or an application that does not need routing.

  ```vue
  <template>
    <h1>Hello World!</h1>
  </template>
  ```

#### Usage With Pages

- If you have a `pages/` directory, to display the current page, use the `<NuxtPage>` component:

  ```vue
  <template>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </template>
  ```

  - Since Nuxt 3 uses `<Suspense>` inside `<NuxtPage>`, it cannot be set as a root element.

- Remember that `app.vue` acts as the main component of your Nuxt application. Anything you add to it (JS and CSS) will be global and included in every page.

- If you want to have the possibility to customize the structure around the page between pages, check out the `layouts/` directory.

### Layouts Directory

- Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

- Layouts are placed in the `layouts/` directory and will be automatically loaded via asynchronous import when used. Layouts are used by adding `<NuxtLayout>` to your `app.vue`, and either setting a `layout` property as part of your page metadata (if you are using the `~/pages` integration), or by manually specifying it as a prop to `<NuxtLayout>`. (Note: The layout name is normalized to kebab-case, so `someLayout` becomes `some-layout`.)

- If you only have a single layout in your application, we recommend using `app.vue` instead.

- NOTE: Unlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a `<slot />`.

#### Enabling the Default Layout

- Add a `~/layouts/default.vue`:

  ```vue
  <template>
    <div>
      Some default layout shared across all pages
      <slot />
    </div>
  </template>
  ```

  - In a layout file, the content of the layout will be loaded in the `<slot />`, rather than using a special component.

- If you use a `app.vue` you will also need to add `<NuxtLayout>`:

  ```vue
  <template>
    <NuxtLayout> some page content </NuxtLayout>
  </template>
  ```

#### Setting Another Layout

```
-| layouts/
---| default.vue
---| custom.vue
```

- You can directly override the default layout like this:

  - app.vue

    ```vue
    <template>
      <NuxtLayout :name="layout">
        <NuxtPage />
      </NuxtLayout>
    </template>

    <script setup>
    // You might choose this based on an API call or logged-in status
    const layout = "custom";
    </script>
    ```

- Alternatively, you can override the default layout per-page like this:

  - pages/index.vue

    ```vue
    <script>
    // This will work in both `<script setup>` and `<script>`
    definePageMeta({
      layout: "custom",
    });
    </script>
    ```

  - app.vue

    ```vue
    <template>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    ```

  - layouts/custom.vue

    ```vue
    <template>
      <div>
        Some *custom* layout
        <slot />
      </div>
    </template>
    ```

  - layouts/default.vue

    ```vue
    <template>
      <div>
        A *default* layout
        <slot />
      </div>
    </template>
    ```

#### Changing the Layout Dynamically

- You can also use a ref or computed property for your layout.

  ```vue
  <template>
    <div>
      <button @click="enableCustomLayout">Update layout</button>
    </div>
  </template>

  <script setup>
  function enableCustomLayout() {
    setPageLayout("custom");
  }
  definePageMeta({
    layout: false,
  });
  </script>
  ```

#### Overriding a Layout on a Per-page Basis

- If you are using the `~/pages` integration, you can take full control by setting `layout: false` and then using the `<NuxtLayout>` component within the page.

  - pages/index.vue

    ```vue
    <template>
      <div>
        <NuxtLayout name="custom">
          <template #header> Some header template content. </template>

          The rest of the page
        </NuxtLayout>
      </div>
    </template>

    <script setup>
    definePageMeta({
      layout: false,
    });
    </script>
    ```

  - layouts/custom.vue

    ```vue
    <template>
      <div>
        <header>
          <slot name="header"> Default header content </slot>
        </header>
        <main>
          <slot />
        </main>
      </div>
    </template>
    ```

- If you use `<NuxtLayout>` within your pages, make sure it is not the root element (or disable layout/page transitions).

### Pages Directory

- Nuxt provides a file-based routing to create routes within your web application using `Vue Router` under the hood.

  - This directory is optional, meaning that `vue-router` won't be included if you only use `app.vue` (unless you set `pages: true` in `nuxt.config` or have a `app/router.options.ts`), reducing your application's bundle size.

#### Usage

- Pages are Vue components and can have the `.vue`, `.js`, .`jsx`, `.ts` or `.tsx` extension.

  - pages/index.vue

    ```vue
    <template>
      <h1>Index page</h1>
    </template>
    ```

  - pages/index.ts

    ```js
    // https://vuejs.org/guide/extras/render-function.html
    export default defineComponent({
      render() {
        return h("h1", "Index page");
      },
    });
    ```

  - pages/index.tsx

    ```jsx
    // https://nuxt.com/docs/examples/advanced/jsx
    // https://vuejs.org/guide/extras/render-function.html#jsx-tsx
    export default defineComponent({
      render() {
        return <h1>Index page</h1>;
      },
    });
    ```

- The `pages/index.vue` file will be mapped to the `/` route of your application.

- If you are using `app.vue`, make sure to use the `<NuxtPage/>` component to display the current page:

  - app.vue

    ```vue
    <template>
      <div>
        <!-- Markup shared across all pages, ex: NavBar -->
        <NuxtPage />
      </div>
    </template>
    ```

- Pages **must have a single root element** to allow route transitions between pages. (HTML comments are considered elements as well.)

  - This means that when the route is server-rendered, or statically generated, you will be able to see its contents correctly, but when you navigate towards that route during client-side navigation the transition between routes will fail and you'll see that the route will not be rendered.

  - Here are some examples to illustrate what a page with a single root element looks like:

    - pages/working.vue

      ```vue
      <template>
        <div>
          <!-- This page correctly has only one single root element -->
          Page content
        </div>
      </template>
      ```

    - pages/bad-1.vue

      ```vue
      <template>
        <!-- This page will not render when route changes during client side navigation, because of this comment -->
        <div>Page content</div>
      </template>
      ```

    - pages/bad-2.vue

      ```vue
      <template>
        <div>This page</div>
        <div>Has more than one root element</div>
        <div>
          And will not render when route changes during client side navigation
        </div>
      </template>
      ```

#### Dynamic Routes

- If you place anything within square brackets, it will be turned into a `dynamic route` parameter. You can mix and match multiple parameters and even non-dynamic text within a file name or directory.

- If you want a parameter to be _optional_, you must enclose it in double square brackets - for example, `~/pages/[[slug]]/index.vue` or `~/pages/[[slug]]`.vue will match both `/` and `/test`.

##### Example

```
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```

- Given the example above, you can access group/id within your component via the `$route` object:

  - pages/users-[group]/[id].vue

    ```vue
    <template>
      <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
    </template>
    ```

  - Navigating to `/users-admins/123` would render:

    ```html
    <p>admins - 123</p>
    ```

- If you want to access the route using Composition API, there is a global `useRoute` function that will allow you to access the route just like `this.$route` in the Options API.

  ```vue
  <script setup>
  const route = useRoute();

  if (route.params.group === "admins" && !route.params.id) {
    console.log("Warning! Make sure user is authenticated!");
  }
  </script>
  ```

#### Catch-all Route

- If you need a catch-all route, you create it by using a file named like `[...slug].vue`. This will match all routes under that path.

  - pages/[...slug].vue

    ```vue
    <template>
      <p>{{ $route.params.slug }}</p>
    </template>
    ```

- Navigating to `/hello/world` would render:

  ```
  <p>["hello", "world"]</p>
  ```

#### Nested Routes

- It is possible to display nested routes with `<NuxtPage>`.

  - Example:

    ```
    -| pages/
    ---| parent/
    ------| child.vue
    ---| parent.vue

    ```

    - This file tree will generate these routes:

      ```json
      [
        {
          "path": "/parent",
          "component": "~/pages/parent.vue",
          "name": "parent",
          "children": [
            {
              "path": "child",
              "component": "~/pages/parent/child.vue",
              "name": "parent-child"
            }
          ]
        }
      ]
      ```

    - To display the `child.vue` component, you have to insert the `<NuxtPage>` component inside `pages/parent.vue`:

      - pages/parent.vue

        ```vue
        <template>
          <div>
            <h1>I am the parent view</h1>
            <NuxtPage :foobar="123" />
          </div>
        </template>
        ```

##### Child Route Keys

- If you want more control over when the `<NuxtPage>` component is re-rendered (for example, for transitions), you can either pass a string or function via the `pageKey` prop, or you can define a key value via `definePageMeta`:

  - pages/parent.vue

    ```vue
    <template>
      <div>
        <h1>I am the parent view</h1>
        <NuxtPage :page-key="someKey" />
      </div>
    </template>
    ```

- Or alternatively:

  - pages/child.vue

    ```vue
    <script setup>
    definePageMeta({
      key: (route) => route.fullPath,
    });
    </script>
    ```

#### Page Metadata

- You might want to define metadata for each route in your app. You can do this using the `definePageMeta` macro, which will work both in `<script>` and in `<script setup>`:

  ```vue
  <script setup>
  definePageMeta({
    title: "My home page",
  });
  </script>
  ```

- This data can then be accessed throughout the rest of your app from the `route.meta` object.

  ```vue
  <script setup>
  const route = useRoute();

  console.log(route.meta.title); // My home page
  </script>
  ```

- If you are using nested routes, the page metadata from all these routes will be merged into a single object.

- Much like `defineEmits` or `defineProps` (see Vue docs), `definePageMeta` is a **compiler macro**. It will be compiled away so you cannot reference it within your component. Instead, the metadata passed to it will be hoisted out of the component. Therefore, the page meta object cannot reference the component (or values defined on the component). However, it can reference imported bindings.

  ```vue
  <script setup>
  import { someData } from "~/utils/example";

  const title = ref("");

  definePageMeta({
    title, // This will create an error
    someData,
  });
  </script>
  ```

##### Special Metadata

- Of course, you are welcome to define metadata for your own use throughout your app. But some metadata defined with `definePageMeta` has a particular purpose:

- `alias`

  - You can define page aliases. They allow you to access the same page from different paths. It can be either a string or an array of strings as defined here on vue-router documentation.

- `keepalive`

  - Nuxt will automatically wrap your page in the Vue `<KeepAlive>` component if you set `keepalive: true` in your `definePageMeta`. This might be useful to do, for example, in a parent route that has dynamic child routes, if you want to preserve page state across route changes.

  - When your goal is to preserve state for parent routes use this syntax: `<NuxtPage keepalive />`. You can also set props to be passed to `<KeepAlive>` (see a full list [here](https://vuejs.org/api/built-in-components.html#keepalive)).

  - You can set a default value for this property in your `nuxt.config`.

- `key`

  - [See above](https://nuxt.com/docs/guide/directory-structure/pages#child-route-keys)

- `layout`

  - You can define the layout used to render the route. This can be either false (to disable any layout), a string or a ref/computed, if you want to make it reactive in some way. More about layouts.

- `layoutTransition` and `pageTransition`

  - You can define transition properties for the `<transition>` component that wraps your pages and layouts, or pass false to disable the `<transition>` wrapper for that route. You can see a list of options that can be passed [here](https://vuejs.org/api/built-in-components.html#transition) or read [more about how transitions work](https://vuejs.org/guide/built-ins/transition.html#transition).

  - You can set default values for these properties in your `nuxt.config`.

- `middleware`

  - You can define middleware to apply before loading this page. It will be merged with all the other middleware used in any matching parent/child routes. It can be a string, a function (an anonymous/inlined middleware function following [the global before guard pattern](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards)), or an array of strings/functions. [More about named middleware](https://nuxt.com/docs/guide/directory-structure/middleware).

- `name`

  - You may define a name for this page's route.

- `path`

  - You may define a path matcher, if you have a more complex pattern than can be expressed with the file name. See [the vue-router docs](https://router.vuejs.org/guide/essentials/route-matching-syntax.html#custom-regex-in-params) for more information.

##### Typing Custom Metadata

- If you add custom metadata for your pages, you may wish to do so in a type-safe way. It is possible to augment the type of the object accepted by `definePageMeta`:

  - index.d.ts

    ```js
    declare module "#app" {
      interface PageMeta {
        pageType?: string;
      }
    }

    // It is always important to ensure you import/export something when augmenting a type
    export {};
    ```

#### Navigation

- To navigate between pages of your app, you should use the `<NuxtLink>` component.

  - A simple link to the `index.vue` page in your `pages` folder:

    ```vue
    <template>
      <NuxtLink to="/">Home page</NuxtLink>
    </template>
    ```

#### Router Options

- It is possible to customize [vue-router options](https://router.vuejs.org/api/interfaces/routeroptions.html).

##### Using `app/router.options`

- This is the recommended way to specify router options.

  - app/router.options.ts

    ```js
    import type { RouterConfig } from "@nuxt/schema";

    // https://router.vuejs.org/api/interfaces/routeroptions.html
    export default <RouterConfig>{};
    ```

##### Custom Routes

- You can optionally override routes using a function that accepts scanned routes and returns customized routes. If returning `null` or `undefined`, Nuxt will fallback to the default routes. (useful to modify input array)

  - app/router.options.ts

    ```js
    import type { RouterConfig } from "@nuxt/schema";

    // https://router.vuejs.org/api/interfaces/routeroptions.html
    export default <RouterConfig>{
      routes: (_routes) => [
        {
          name: "home",
          path: "/",
          component: () => import("~/pages/home.vue"),
        },
      ],
    };
    ```

- Nuxt will not augment any new routes you return from the `routes` function with metadata defined in `definePageMeta` of the component you provide. If you want that to happen, you should probably use the `pages:extend` hook which is [called at build-time](https://nuxt.com/docs/api/advanced/hooks#nuxt-hooks-build-time).

###### Custom History (advanced)

- You can optionally override history mode using a function that accepts base url and returns history mode. If returning `null` or `undefined`, Nuxt will fallback to the default history.

  - app/router.options.ts

    ```js
    import type { RouterConfig } from '@nuxt/schema'
    import { createMemoryHistory } from 'vue-router'

    // https://router.vuejs.org/api/interfaces/routeroptions.html
    export default <RouterConfig> {
      history: base => process.client ? createMemoryHistory(base) : null /* default */
    }

    ```

##### Using `nuxt.config`

- Note: Only JSON serializable options are configurable:

  - `linkActiveClass`
  - `linkExactActiveClass`
  - `end`
  - `sensitive`
  - `strict`
  - `hashMode`

- nuxt.config

  ```js
  export default defineNuxtConfig({
    router: {
      // https://router.vuejs.org/api/interfaces/routeroptions.html
      options: {},
    },
  });
  ```

##### Hash Mode (SPA)

- You can enable hash history in SPA mode. In this mode, router uses a hash character (#) before the actual URL that is internally passed. When enabled, the **URL is never sent to the server** and `SSR is not supported`.

  - nuxt.config.ts

    ```js
    export default defineNuxtConfig({
      ssr: false,
      router: {
        options: {
          hashMode: true,
        },
      },
    });
    ```

#### Programmatic Navigation

- Nuxt 3 allows programmatic navigation through the `navigateTo()` utility method. Using this utility method, you will be able to programmatically navigate the user in your app. This is great for taking input from the user and navigating them dynamically throughout your application. In this example, we have a simple method called `navigate()` that gets called when the user submits a search form.

- **Note**: Ensure to always `await` on `navigateTo` or chain its result by returning from functions.

  ```vue
  <script setup>
  const router = useRouter();
  const name = ref("");
  const type = ref(1);

  function navigate() {
    return navigateTo({
      path: "/search",
      query: {
        name: name.value,
        type: type.value,
      },
    });
  }
  </script>
  ```

### Route Validation

- Nuxt offers route validation via the `validate` property in `definePageMeta` in each page you wish to validate.

- The `validate` property accepts the `route` as an argument. You can return a boolean value to determine whether or not this is a valid route to be rendered with this page. If you return `false`, and another match can't be found, this will cause a 404 error. You can also directly return an object with `statusCode`/`statusMessage` to respond immediately with an error (other matches will not be checked).

- If you have a more complex use case, then you can use anonymous route middleware instead.

- pages/post/[id].vue

  ```vue
  <script setup>
  definePageMeta({
    validate: async (route) => {
      // Check if the id is made up of digits
      return /^\d+$/.test(route.params.id);
    },
  });
  </script>
  ```

### `<NuxtPage>`

- `<NuxtPage>` is a built-in component that comes with Nuxt. NuxtPage is required to display top-level or nested pages located in the `pages/` directory.

- `NuxtPage` is a wrapper around `<RouterView>` component from Vue Router. `NuxtPage` component accepts same `name` and `route` props.

  - **name**: type: `string`

    - `name` helps `RouterView` render the component with the corresponding name in the matched route record's components option.

  - **route**: type: `RouteLocationNormalized`

    - `route` is a route location that has all of its components resolved.
      - Nuxt automatically resolves the `name` and `route` by scanning and rendering all Vue component files found in the `/pages` directory.

  - **pageKey**: type: `string` or `function`
    - `pageKey` helps control when the `NuxtPage` component is re-rendered.

#### Example

- For example, passing `static` key, `NuxtPage` component is rendered only once when it is mounted.

  ```vue
  <!-- static key -->
  <NuxtPage page-key="static" />
  ```

- Alternatively, `pageKey` can be passed as a `key` value via `definePageMeta` from the `<script>` section of your Vue component in the `/pages` directory.

  ```vue
  <script setup>
  definePageMeta({
    key: (route) => route.fullPath,
  });
  </script>
  ```

#### Custom Props

- In addition, `NuxtPage` also accepts custom props that you may need to pass further down the hierarchy. These custom props are accessible via `attrs` in the Nuxt app.

  ```vue
  <NuxtPage :foobar="123" />
  ```

  - For example, in above example, value of `foobar` will be available using `attrs.foobar`.

### Randering an Error Page

- When Nuxt encounters a fatal error, whether during the server lifecycle, or when rendering your Vue application (both SSR and SPA), it will either render a JSON response (if requested with `Accept: application/json` header) or an HTML error page.

- You can customize this error page by adding `~/error.vue` in the source directory of your application, alongside `app.vue`. This page has a single prop - `error` which contains an error for you to handle.

- When you are ready to remove the error page, you can call the `clearError` helper function, which takes an optional path to redirect to (for example, if you want to navigate to a 'safe' page).

- **NOTE**: Make sure to check before using anything dependent on Nuxt plugins, such as `$route` or `useRouter`, as if a plugin threw an error, then it won't be re-run until you clear the error.

#### Example

- error.vue

  ```vue
  <template>
    <button @click="handleError">Clear errors</button>
  </template>

  <script setup>
  const props = defineProps({
    error: Object,
  });

  const handleError = () => clearError({ redirect: "/" });
  </script>
  ```

## 02 Project

## 03 Handlinig Data

### State Management

- Nuxt provides `useState` composable to create a reactive and SSR-friendly shared state across components.

- `useState` is an SSR-friendly `ref` replacement. Its value will be preserved after server-side rendering (during client-side hydration) and shared across all components using a unique key.

- `useState` only works during `setup` or `Lifecycle Hooks`.

- Because the data inside `useState` will be serialized to JSON, it is important that it does not contain anything that cannot be serialized, such as classes, functions or symbols.

#### Best Practices

- Never define `const state = ref()` outside of `<script setup>` or `setup()` function.

  - Such state will be shared across all users visiting your website and can lead to memory leaks!

- Instead use `const useX = () => useState('x')`

#### Examples

##### Basic Usage

- In this example, we use a component-local counter state. Any other component that uses `useState('counter')` shares the same reactive state.

  - app.vue

    ```vue
    <script setup>
    const counter = useState("counter", () => Math.round(Math.random() * 1000));
    </script>

    <template>
      <div>
        Counter: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
      </div>
    </template>
    ```

##### Advanced

- In this example, we use a composable that detects the user's default locale from the HTTP request headers and keeps it in a `locale` state.

  - composables/locale.ts

    ```js
    import type { Ref } from "vue";

    export const useLocale = () =>
      useState < string > ("locale", () => useDefaultLocale().value);

    export const useDefaultLocale = (fallback = "en-US") => {
      const locale = ref(fallback);
      if (process.server) {
        // Learn more about the nuxtApp interface on https://nuxt.com/docs/guide/going-further/internals#the-nuxtapp-interface
        const reqLocale = useRequestHeaders()["accept-language"]?.split(",")[0];
        if (reqLocale) {
          locale.value = reqLocale;
        }
      } else if (process.client) {
        const navLang = navigator.language;
        if (navLang) {
          locale.value = navLang;
        }
      }
      return locale;
    };

    export const useLocales = () => {
      const locale = useLocale();
      const locales = ref([
        "en-US",
        "en-GB",
        "ko-KR",
        "zh-CN",
        "ar-EG",
        "fa-IR",
        "ja-JP-u-ca-japanese",
      ]);
      if (!locales.value.includes(locale.value)) {
        locales.value.unshift(locale.value);
      }
      return locales;
    };

    // Using Intl.DateTimeFormat for language-sensitive date and time formatting
    // Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
    export const useLocaleDate = (
      date: Ref<Date> | Date,
      locale = useLocale()
    ) => {
      return computed(() =>
        new Intl.DateTimeFormat(locale.value, { dateStyle: "full" }).format(
          unref(date)
        )
      );
    };
    ```

  - app.vue

    ```js
    <script setup lang="ts">
    // see ../composables/locale.ts for the implementation
    const locales = useLocales()
    const locale = useLocale()
    const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)
    </script>

    <template>
      <NuxtExampleLayout example="other/locale">
        <h1 class="text-xl opacity-50">
          Nuxt birthday
        </h1>
        <p class="text-4xl">
          {{ date }}
        </p>
        <div class="mt-4" />
        <label for="locale-chooser">Preview a different locale</label>
        <select id="locale-chooser" v-model="locale" class="m-auto w-50 border n-border-base rounded p-1">
          <option v-for="l of locales" :key="l" :value="l">
            {{ l }}
          </option>
        </select>
      </NuxtExampleLayout>
    </template>

    ```

### Vuex in Nuxt 3

- Nuxt no longer provides a Vuex integration. Instead, the official Vue recommendation is to use `pinia`, which has built-in Nuxt support via a [Nuxt module](https://pinia.vuejs.org/ssr/nuxt.html). [Find out more about pinia here](https://pinia.vuejs.org/).

- If you want to keep using Vuex, you can manually migrate to Vuex 4 following [these steps](https://vuex.vuejs.org/guide/migrating-to-4-0-from-3-x.html).

### Using Pinia in Nuxt 3

- Using Pinia with Nuxt.js is easier since Nuxt takes care of a lot of things when it comes to _server side rendering_. For instance, **you don't need to care about serialization nor XSS attacks**. Pinia supports Nuxt Bridge and Nuxt 3. For bare Nuxt 2 support, see below.

#### Installation

```sh
yarn add pinia @pinia/nuxt
# or with npm
npm install pinia @pinia/nuxt
```

- TIP

  - If you're using npm, you might encounter an _ERESOLVE_ unable to resolve dependency tree error. In that case, add the following to your `package.json`:

    ```js
    "overrides": {
      "vue": "latest"
    }
    ```

- We supply a _module_ to handle everything for you, you only need to add it to `modules` in your `nuxt.config.js` file:

  ```js
  // nuxt.config.js
  export default defineNuxtConfig({
    // ... other options
    modules: [
      // ...
      "@pinia/nuxt",
    ],
  });
  ```

- And that's it, use your store as usual!

#### Using the store outside of `setup()`

- If you want to use a store outside of `setup()`, remember to pass the `pinia` object to `useStore()`. We added it to the context so you have access to it in `asyncData()` and `fetch()`:

  ```js
  import { useStore } from "~/stores/myStore";

  export default {
    asyncData({ $pinia }) {
      const store = useStore($pinia);
    },
  };
  ```

#### Auto imports

- By default `@pinia/nuxt` exposes one single auto import: `usePinia()`, which is similar to `getActivePinia()` but works better with Nuxt. You can add auto imports to make your life easier:

  - nuxt.config.js

    ```js
    // nuxt.config.js
    export default defineNuxtConfig({
      // ... other options
      modules: [
        // ...
        [
          "@pinia/nuxt",
          {
            autoImports: [
              // automatically imports `defineStore`
              "defineStore", // import { defineStore } from 'pinia'
              // automatically imports `defineStore` as `definePiniaStore`
              ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
            ],
          },
        ],
      ],
    });
    ```

#### Nuxt 2 without bridge

- Pinia supports Nuxt 2 until `@pinia/nuxt` v0.2.1. Make sure to also install `@nuxtjs/composition-api` alongside `pinia`:

  ```sh
  yarn add pinia @pinia/nuxt@0.2.1 @nuxtjs/composition-api
  # or with npm
  npm install pinia @pinia/nuxt@0.2.1 @nuxtjs/composition-api
  ```

- We supply a _module_ to handle everything for you, you only need to add it to `buildModules` in your `nuxt.config.js` file:

  ```js
  // nuxt.config.js
  export default {
    // ... other options
    buildModules: [
      // Nuxt 2 only:
      // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
      "@nuxtjs/composition-api/module",
      "@pinia/nuxt",
    ],
  };
  ```

##### TypeScript

- If you are using Nuxt 2 (`@pinia/nuxt` < 0.3.0) with TypeScript or have a `jsconfig.json`, you should also add the types for `context.pinia`:

  ```json
  {
    "types": [
      // ...
      "@pinia/nuxt"
    ]
  }
  ```

  - This will also ensure you have autocompletion 😉.

##### Using Pinia alongside Vuex

- It is recommended to **avoid using both Pinia and Vuex** but if you need to use both, you need to tell pinia to not disable it:

  ```js
  // nuxt.config.js
  export default {
    buildModules: [
      "@nuxtjs/composition-api/module",
      ["@pinia/nuxt", { disableVuex: false }],
    ],
    // ... other options
  };
  ```

### Pinia

#### Comparison with Vuex 3.x/4.x

- Vuex 3.x is Vuex for Vue 2 while Vuex 4.x is for Vue 3

- Pinia API is very different from Vuex ≤4, namely:

  - _mutations_ no longer exist. They were often perceived as extremely verbose. They initially brought devtools integration but that is no longer an issue.

  - No need to create custom complex wrappers to support TypeScript, everything is typed and the API is designed in a way to leverage TS type inference as much as possible.

  - No more magic strings to inject, import the functions, call them, enjoy autocompletion!

  - No need to dynamically add stores, they are all dynamic by default and you won't even notice. Note you can still manually use a store to register it whenever you want but because it is automatic you don't need to worry about it.

  - No more nested structuring of modules. You can still nest stores implicitly by importing and using a store inside another but Pinia offers a flat structuring by design while still enabling ways of cross composition among stores. **You can even have circular dependencies of stores**.

  - No _namespaced modules_. Given the flat architecture of stores, "namespacing" stores is inherent to how they are defined and you could say all stores are namespaced.

#### Migrating from Vuex ≤4

- Although the structure of Vuex and Pinia stores is different, a lot of the logic can be reused. This guide serves to help you through the process and point out some common gotchas that can appear.

##### Preparation

-First, follow the [Getting Started guide](https://pinia.vuejs.org/getting-started.html) to install Pinia.

##### Restructuring Modules to Stores

- Vuex has the concept of a single store with multiple _modules_. These modules can optionally be namespaced and even nested within each other.

- The easiest way to transition that concept to be used with Pinia is that each module you used previously is now a _store_. Each store requires an `id` which is similar to a namespace in Vuex. This means that each store is namespaced by design. Nested modules can also each become their own store. Stores that depend on each other will simply import the other store.

- How you choose to restructure your Vuex modules into Pinia stores is entirely up to you, but here is one suggestion:

  ```sh
  # Vuex example (assuming namespaced modules)
  src
  └── store
      ├── index.js           # Initializes Vuex, imports modules
      └── modules
          ├── module1.js     # 'module1' namespace
          └── nested
              ├── index.js   # 'nested' namespace, imports module2 & module3
              ├── module2.js # 'nested/module2' namespace
              └── module3.js # 'nested/module3' namespace
  ```

  ```sh
  # Pinia equivalent, note ids match previous namespaces
  src
  └── stores
      ├── index.js          # (Optional) Initializes Pinia, does not import stores
      ├── module1.js        # 'module1' id
      ├── nested-module2.js # 'nestedModule2' id
      ├── nested-module3.js # 'nestedModule3' id
      └── nested.js         # 'nested' id
  ```

- This creates a flat structure for stores but also preserves the previous namespacing with equivalent `id`s. If you had some state/getters/actions/mutations in the root of the store (in the `store/index.js` file of Vuex) you may wish to create another store called something like `root` which holds all that information.

- The directory for Pinia is generally called `stores` instead of `store`. This is to emphasize that Pinia uses multiple stores, instead of a single store in Vuex.

- For large projects you may wish to do this conversion module by module rather than converting everything at once. You can actually mix Pinia and Vuex together during the migration so this approach can also work and is another reason for naming the Pinia directory `stores` instead.

##### Converting a Single Module

- Here is a complete example of the before and after of converting a Vuex module to a Pinia store, see below for a step-by-step guide. The Pinia example uses an option store as the structure is most similar to Vuex:

  ```ts
  // Vuex module in the 'auth/user' namespace
  import { Module } from "vuex";
  import { api } from "@/api";
  import { RootState } from "@/types"; // if using a Vuex type definition

  interface State {
    firstName: string;
    lastName: string;
    userId: number | null;
  }

  const storeModule: Module<State, RootState> = {
    namespaced: true,
    state: {
      firstName: "",
      lastName: "",
      userId: null,
    },
    getters: {
      firstName: (state) => state.firstName,
      fullName: (state) => `${state.firstName} ${state.lastName}`,
      loggedIn: (state) => state.userId !== null,
      // combine with some state from other modules
      fullUserDetails: (state, getters, rootState, rootGetters) => {
        return {
          ...state,
          fullName: getters.fullName,
          // read the state from another module named `auth`
          ...rootState.auth.preferences,
          // read a getter from a namespaced module called `email` nested under `auth`
          ...rootGetters["auth/email"].details,
        };
      },
    },
    actions: {
      async loadUser({ state, commit }, id: number) {
        if (state.userId !== null) throw new Error("Already logged in");
        const res = await api.user.load(id);
        commit("updateUser", res);
      },
    },
    mutations: {
      updateUser(state, payload) {
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.userId = payload.userId;
      },
      clearUser(state) {
        state.firstName = "";
        state.lastName = "";
        state.userId = null;
      },
    },
  };

  export default storeModule;
  ```

  ```ts
  // Pinia Store
  import { defineStore } from "pinia";
  import { useAuthPreferencesStore } from "./auth-preferences";
  import { useAuthEmailStore } from "./auth-email";
  import vuexStore from "@/store"; // for gradual conversion, see fullUserDetails

  interface State {
    firstName: string;
    lastName: string;
    userId: number | null;
  }

  export const useAuthUserStore = defineStore("authUser", {
    // convert to a function
    state: (): State => ({
      firstName: "",
      lastName: "",
      userId: null,
    }),
    getters: {
      // firstName getter removed, no longer needed
      fullName: (state) => `${state.firstName} ${state.lastName}`,
      loggedIn: (state) => state.userId !== null,
      // must define return type because of using `this`
      fullUserDetails(state): FullUserDetails {
        // import from other stores
        const authPreferencesStore = useAuthPreferencesStore();
        const authEmailStore = useAuthEmailStore();
        return {
          ...state,
          // other getters now on `this`
          fullName: this.fullName,
          ...authPreferencesStore.$state,
          ...authEmailStore.details,
        };

        // alternative if other modules are still in Vuex
        // return {
        //   ...state,
        //   fullName: this.fullName,
        //   ...vuexStore.state.auth.preferences,
        //   ...vuexStore.getters['auth/email'].details
        // }
      },
    },
    actions: {
      // no context as first argument, use `this` instead
      async loadUser(id: number) {
        if (this.userId !== null) throw new Error("Already logged in");
        const res = await api.user.load(id);
        this.updateUser(res);
      },
      // mutations can now become actions, instead of `state` as first argument use `this`
      updateUser(payload) {
        this.firstName = payload.firstName;
        this.lastName = payload.lastName;
        this.userId = payload.userId;
      },
      // easily reset state using `$reset`
      clearUser() {
        this.$reset();
      },
    },
  });
  ```

  - Let's break the above down into steps:

    - 1. Add a required `id` for the store, you may wish to keep this the same as the namespace before. It is also recommended to make sure the `id` is in _camelCase_ as it makes it easier to use with `mapStores()`.

    - 2. Convert `state` to a function if it was not one already

    - 3. Convert `getters`

      1. Remove any getters that return state under the same name (eg. `firstName: (state) => state.firstName`), these are not necessary as you can access any state directly from the store instance

      1. If you need to access other getters, they are on `this` instead of using the second argument. Remember that if you are using `this` then you will have to use a regular function instead of an arrow function. Also note that you will need to specify a return type because of TS limitations, see [here](https://pinia.vuejs.org/core-concepts/getters.html#accessing-other-getters) for more details

      1. If using `rootState` or `rootGetters` arguments, replace them by importing the other store directly, or if they still exist in Vuex then access them directly from Vuex

    - 4. Convert `actions`

      1. Remove the first `context` argument from each action. Everything should be accessible from `this` instead
      1. If using other stores either import them directly or access them on Vuex, the same as for getters

    - 5. Convert `mutations`

      1. Mutations do not exist any more. These can be converted to `actions` instead, or you can just assign directly to the store within your components (eg. `userStore.firstName = 'First'`)
      1. If converting to actions, remove the first `state` argument and replace any assignments with `this` instead
      1. A common mutation is to reset the state back to its initial state. This is built in functionality with the store's `$reset` method. Note that this functionality only exists for option stores.

    As you can see most of your code can be reused. Type safety should also help you identify what needs to be changed if anything is missed.

##### Usage Inside Components

- Now that your Vuex module has been converted to a Pinia store, any component or other file that uses that module needs to be updated too.

- If you were using `map` helpers from Vuex before, it's worth looking at the [Usage without setup() guide](https://pinia.vuejs.org/cookbook/options-api.html) as most of those helpers can be reused.

- If you were using `useStore` then instead import the new store directly and access the state on it. For example:

  ```ts
  // Vuex
  import { defineComponent, computed } from "vue";
  import { useStore } from "vuex";

  export default defineComponent({
    setup() {
      const store = useStore();

      const firstName = computed(() => store.state.auth.user.firstName);
      const fullName = computed(() => store.getters["auth/user/fullName"]);

      return {
        firstName,
        fullName,
      };
    },
  });
  ```

  ```ts
  // Pinia
  import { defineComponent, computed } from "vue";
  import { useAuthUserStore } from "@/stores/auth-user";

  export default defineComponent({
    setup() {
      const authUserStore = useAuthUserStore();

      const firstName = computed(() => authUserStore.firstName);
      const fullName = computed(() => authUserStore.fullName);

      return {
        // you can also access the whole store in your component by returning it
        authUserStore,
        firstName,
        fullName,
      };
    },
  });
  ```

##### Usage Outside Components

- Updating usage outside of components should be simple as long as you're careful _to not use a store outside of functions_. Here is an example of using the store in a Vue Router navigation guard:

  ```ts
  // Vuex
  import vuexStore from "@/store";

  router.beforeEach((to, from, next) => {
    if (vuexStore.getters["auth/user/loggedIn"]) next();
    else next("/login");
  });
  ```

  ```ts
  // Pinia
  import { useAuthUserStore } from "@/stores/auth-user";

  router.beforeEach((to, from, next) => {
    // Must be used within the function!
    const authUserStore = useAuthUserStore();
    if (authUserStore.loggedIn) next();
    else next("/login");
  });
  ```

  - More details can be found [here](https://pinia.vuejs.org/core-concepts/outside-component-usage.html).

##### Advanced Vuex Usage

- In the case your Vuex store using some of the more advanced features it offers, here is some guidance on how to accomplish the same in Pinia. Some of these points are already covered in [this comparison summary](https://pinia.vuejs.org/introduction.html#comparison-with-vuex-3-x-4-x).

- **Dynamic Modules**

  - There is no need to dynamically register modules in Pinia. Stores are dynamic by design and are only registered when they are needed. If a store is never used, it will never be "registered".

- **Hot Module Replacement**

  - HMR is also supported but will need to be replaced, see the [HMR Guide](https://pinia.vuejs.org/cookbook/hot-module-replacement.html).

- **Plugins**

  - If you use a public Vuex plugin then check if there is a Pinia alternative. If not you will need to write your own or evaluate whether the plugin is still necessary.

  - If you have written a plugin of your own, then it can likely be updated to work with Pinia. See the [Plugin Guide](https://pinia.vuejs.org/core-concepts/plugins.html).

## 04 Connecting the App to the Backend

## 05 Nuxt - Config, Plugins & Modules

## 06 Middleware & Authentication

## 07 The Server Side

## 08 Building a Nuxt App
