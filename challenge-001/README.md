# The Complete Guide

## 1. Getting Started

### 1.1. What is Vue.js

- What is Vue.js (or just `Vue`)?

  - Vue.js(Vue) is a `JavaScript` `framework` that makes building interactive and `reative` `web frontends` (= browser-side web applications) easier.

    - `JavaScript`

      - A programming language that is supported by all browsers. It allows you to manipulate the already-running page and hence provide richer user experiences.

    - `framework`

      - A framework is a (third-party) library that exposes utility functionalities AND a "set of rules" (a clear guidance) on how to build your JavaScript application

    - `reactive`

      - Your app is able to react to user input, update the screen dynamically (e.g. to show overlays or input validation errors) -> Look and feel of mobile apps

    - `web frontends`
      - "What the user sees"
        - HTML + CSS + JavaScript, running in the browser of your user

  - Mobile apps and desktop apps `feel very "reactive"`: Things happen instantly, you `don't wait` for new pages to load or actions to start.

  - Traditionally, in web apps, you click a link and wait for a new page to load. You click a button and wait for some action to complete.

  - JavaScript To The Rescue!

    - JavaScript runs in the browser - on the loaded page.
    - You can manipulate the HTML structure(DOM) of the page.
    - No (visible) request to the server required. no need to wait for a new HTML page as a response.

  - But `Just JavaScript` May Not Be Ideal!
    - You can build ANY kind of web application with just "vanilla" JavaScript
      - No framework like Vue is needed!
    - But
      - You have to write all code on your own (-> re-invent the wheel)
      - You might write suboptimal code or introduce errors & bugs
      - Working in a team might be harder because not everyone knows you structure and "code philosophy"

### 1.2. Different Ways of Using Vue

- Vue can be used to control parts of HTML pages or entire pages.
  - `Widget` approach on a multi-page-application.
    - (Some) pages are still rendered `on and served by a backend server`.
- Vue can also be used to control the entire frontend of a web application
  - `Single-Page-Application`(SPA) approach.
    - Server `only sends one HTML page`, thereafter, Vue takes over and controls the UI.

### 1.3. Exploring Vue Alternatives

- Vue.js

  - Complete component-based UI framework, includes most core features. A bit less popular than React & Angular.

- React.js

  - Lean and focused component-based UI library. Certain features (e.g. routing) are added via community packages.

- Angular
  - Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.

### 1.4. Building Your First App with JavaScript

### 1.5. Re-building the App with Vue.js

### 1.6. Vue vs Vanilla JavaScript (Just JavaScript)

### 1.7. Outline and Contents

- Basics

  - Core Syntax, Templates, Directives, Data, Methods, Computed Properties, Watchers

- Intermediate

  - Components, Component Communication, Behind the Scenes, Forms, Http, Routing, Animations

- Advanced
  - Vuex, Authentication, Deployment & Optimizations, Composition API, Re-using Code

## 2. Basics and Core Concepts - Document Object Model(DOM) Interaction with Vue

### 2.1. Module Introduction

- Core Concepts (The Essentials)
  - Module Content
    - Vue + HTML = Templates
    - Outputting Dynamic Content
    - Reacting to User Input

### 2.2. Creating and Connecting Vue App Instances

- `createApp()`
  - mount

### 2.3. Interpolation and Data Binding

- Interpolation

  ```vue
  {{}}
  ```

- Data binding

  ```vue
  {{ outputGoal() }}
  ```

### 2.4. Binding Attributes with the "v-bind" Directive

- `v-bind`

  ```html
  <p>Learn more <a v-bind:href="vueLink">about Vue</a>.</p>
  ```

### 2.5. Understanding "methods" in Vue Apps

### 2.6. Working with Data inside a Vue App

### 2.7. Outputting Raw HTML Content with v-html

- `v-html`

  ```html
  <p v-html="outputGoal()"></p>
  ```

### 2.8. A First Summary

### 2.9. Understanding Event Binding

### 2.10. Events & Methods

### 2.11. Working with Event Arguments

### 2.12. Using the Native Event Object

### 2.13. Exploring Event Modifiers

### 2.14. Locking Content with v-once

### 2.15. Data Binding + Event Binding = Two-Way Binding

### 2.16. Methods Used for Data Binding: How it Works

### 2.17. Introducing Computed Properties

### 2.18. Working with Watchers

### 2.19. Methods vs Computed Properties vs Watchers

### 2.20. v-bind and v-on Shorthands

### 2.21. Dynamic Styling with Inline Styles

### 2.22. Adding CSS Classes Dynamically

### 2.23. Classes and Computed Properties

### 2.24. Dynamic Classes Array Syntax

### 2.25. Module Summary

## 3. Rendering Conditional Content and Lists

### 3.1. Module Introduction

### 3.2. Understanding the Problem

### 3.3. Rendering Content Conditionally

### 3.4. v-if, v-else, and v-else-if

### 3.5. Using v-show instead of v-if

### 3.6. Rendering Lists of Data

### 3.7. Diving Deeper into v-for

### 3.8. Removing List Items

### 3.9. Listening to Events

### 3.10. Module Summary

## 4. Project - The Monster Slayer Game

### 4.1. Module Introduction

### 4.2. Project Setup and First Methods

### 4.3. Updating the Healthbars

### 4.4. Adding a Special Attack

### 4.5. Adding a Heal Functionality

### 4.6. Adding a Game Over Screen

### 4.7. Finishing the Core Functionality

### 4.8. Adding a Battle Log

## 5. Vue Behind the Scenes

### 5.1. Module Introduction

- Vue: Behind the Scenes
  - How Vue Works
  - Understanding `Virtual DOM` & DOM Updating

### 5.2. An Introduction to Vue's Reactivity

- Use JavaScript Proxy

### 5.3. Vue Reactivity: A Deep Dive

- JavaScript Proxy
  - Set trap

### 5.4. One App vs Multiple Apps

- You can have multiple Vue apps creating new apps using `Vue.createApp`
  - You can't use the states from other apps, meaning there's no connection between apps
  - If you need different independent parts in your app, then you can use multiple Vue apps separately.
  - However, if you want different parts of the app to work dependently, you should use the same Vue app.

### 5.5. Understanding Templates

- In HTML file using Vue,
  - You should not make one Vue app to control multiple content parts or vice versa.

### 5.6. Working with Refs

- Use case

  - example0:

    ```html
    <input type="text" @input="saveInput" />
    ```

  - The above example can be implemented using different way, using `v-model`

    ```html
    <input type="text" v-model="currentUserInput" />
    ```

  - Here Vue is updating the underlying data regarding every keystroke
    - It might be your purpose.
    - For that, you can use `ref`

### 5.7. How Vue Updates the Document Object Model(DOM)

- How Vue Updates The DOM

  - ![](./05%20Vue%20Behind%20the%20Scenes/04-virtual-dom/5.7_1.png)

### 5.8. Vue App Lifecycle - Theory

- ![](./05%20Vue%20Behind%20the%20Scenes/05-lifecycle/5.8_1.png)

### 5.9. Vue App Lifecycle - Practice

## 6. Introducing Components

### 6.1. Module Introduction

- Understanding Vue Components
  - Connected Vue Instances

### 6.2. Understanding the Problem

### 6.3. Introducing Components

- Vue component
  - Reusable building block in the app's template
  - Vue mini app inside Vue app

### 6.4. Building Complex User Interfaces with Components

## 7. Moving to a Better Development Setup and Workflow with the Vue CLI

### 7.1. Module Introduction

### 7.2. Why You Need a Development Server

- Why Need A Proper (Development) Web Server

  - `Double-clicking` index.html doesn't run the app under realistic circumstances

    - We use the `file://` protocol instead of the `https://` protocol
    - Some (modern JavaScript or Browser) features will not work there
    - The final, deployed app will be served via `https://` not via `file://`

  - So, we need a development web server

### 7.3. Why You Want a Better Developer Experience

- We Want A Better Developer Experience

  - Current State

    - We always need to reload the page whenever we make any change.
    - IDE auto-completion is highly limited
    - We work in just one file OR we need to handle multiple files with multiple `<script src="..." imports`

  - Wanted State
    - Saved changes should be auto-detected and page should reload/update
    - IDE should provide better auto-completion and hints
    - We should be able to split code into multiple files and export/import via ES modules

### 7.4. Installing and Using the Vue CLI

- `Vue CLI` is in Maintenance Mode!

  - For new projects, it is now recommended to use `create-vue` to scaffold Vite-based projects.

- `create-vue`

  - The recommended way to start a Vite-powered Vue project
  - Usage:

    ```
    npm create vue@3
    ```

    - Or, if you need to support IE11, you can create a Vue 2 project with:

      ```
      npm create vue@2
      ```

    - Note that the version number (@3 or @2) MUST NOT be omitted, otherwise npm may resolve to a cached and outdated version of the package.

  - Difference from Vue CLI

    - Vue CLI is based on webpack, while `create-vue` is based on [Vite](https://vitejs.dev/). Vite supports most of the configured conventions found in Vue CLI projects out of the box, and provides a significantly better development experience due to its extremely fast startup and hot-module replacement speed. Learn more about why we recommend Vite over webpack [here](https://vitejs.dev/guide/why.html).

    - Unlike Vue CLI, `create-vue` itself is just a scaffolding tool: it creates a pre-configured project base on the features you choose, and delegates the rest to Vite. Projects scaffolded this way can directly leverage the [Vite plugin ecosystem](https://vitejs.dev/plugins/) which is Rollup-compatible.

### 7.5. Inspecting the Created Project

### 7.6. Inspecting the Vue Code and ".vue" Files

### 7.7. Adding the "Vetur" Extension to Visual Studio Code

### 7.8. More on ".vue" Files

### 7.9. A New Vue Project

### 7.10. Creating a Basic Vue App

### 7.11. Adding a Component

### 7.12. Adding Styling

## 8. Component Communication

## 9. Diving Deeper into Components

## 10. Project - The Learning Resources App

## 11. Forms

## 12. Sending HTTP Requests

## 13. Routing: Building "Multi-Page" Single Page Applications

## 14. Animations and Transitions

## 15. Vuex

## 16. Main Project - "Find a Coach" Web App

## 17. Vue and Authentication

## 18. Optimizing and Deploying Vue Apps

## 19. The Component API - Replacing the Options API

## 20. Reusing Functionality Mixins and Custom Composition Functions

## 21. Roundup and Next Steps

## 22. Vue 2 to Vue 3 Migration

## 23. Getting Started [VUE2]

## 24. Using Vue.js to Interact with the Document Object Model(DOM) [VUE2]

## 25. Using Conditionals and Rendering Lists [VUE2]

## 26. First Project - The Monster Slayer [VUE2]

## 27. Understanding the Vue.js Instance [VUE2]

## 28. Moving to a "Real" Development Workflow with Webpack and Vue CLI [VUE2]

## 29. An Introduction to Components [VUE2]

## 30. Communicating between Components [VUE2]

## 31. Advanced Component Usage [VUE2]

## 32. Second Project - Wonderful Quotes [VUE2]

## 33. Handling User Input with Forms [VUE2]

## 34. Using and Creating Directives [VUE2]

## 35. Improving your App with Filters and Mixins [VUE2]

## 36. Adding Animations and Transitions [VUE2]

## 37. Connecting to Servers through HTTP - Using Vue-resource [VUE2]

## 38. Routing in a Vue.js Application [VUE2]

## 39. Better State Management with Vuex [VUE2]

## 40. Final Project - The Stock Trader [VUE2]

## 41. Deploying a Vue.js Application [VUE2]

## 42. Bonus: Using Axios Instead of Vue-resource [VUE2]

## 43. Bonus: Authentication in Vue Apps
