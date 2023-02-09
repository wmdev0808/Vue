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

## 02 Project

## 03 Handlinig Data

## 04 Connecting the App to the Backend

## 05 Nuxt - Config, Plugins & Modules

## 06 Middleware & Authentication

## 07 The Server Side

## 08 Building a Nuxt App
