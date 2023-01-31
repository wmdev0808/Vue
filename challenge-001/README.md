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

- Using a Build Workflow
  - Our Code
    - Uses next-gen and Vue-specific Syntax & Features
  - "Build Step"
    - Changes code to use standard JS code
  - Development or Real Server
    - Host and run a regular JavaScript-based web app

### 7.7. Adding the "Vetur" Extension to Visual Studio Code

- For 2.x

  - `Vetur`

- For 3.x

  - `Volar`

    - `Volar` is the official VSCode extension that provides TypeScript support inside Vue SFCs, along with many other great features.

    - TIP

      - `Volar` replaces `Vetur`, our previous official VSCode extension for Vue 2. If you have `Vetur` currently installed, make sure to disable it in Vue 3 projects.

  - `TypeScript Vue Plugin`
    - This is also needed to get type support for `*.vue` imports in TS files.

### 7.8. More on ".vue" Files

### 7.9. A New Vue Project

### 7.10. Creating a Basic Vue App

### 7.11. Adding a Component

### 7.12. Adding Styling

## 8. Component Communication

### 8.1. Module Introduction

- Component Communication & Re-Usable Components

  - Gaining Flexibility!

- Content
  - Building a User Interface with Components
  - How Component Communication Works
  - Different Kinds of Component Communication

### 8.2. Introducing "Props" (Parent => Child Communication)

### 8.3. Prop Behavior & Changing Props

- Props should not be mutated by the component
  - Vue data flow should be uni-directional

### 8.4. Validating Props

- When a prop break the validation rules, the developer console just shows `Warning`
- For custom validator, you will get `Invalid prop: custom validator check failed for prop "xxx"`.

### 8.5. Working with Dynamic Prop Values

### 8.6. Emitting Custom Events (Child => Parent Communication)

### 8.7. Defining & Validating Custom Events

### 8.8. Demo: Adding Components & Connecting Them

### 8.9. Demo: Adding More Component Communication

### 8.10. A Potential Problem

- Path-through problem:
  - We have unnecessary path through steps to communicate between components
    - For example, using `@select-topic` custom event

### 8.11. Provide + Inject To The Rescue

### 8.12. Provide + Inject for Functions / Methods

### 8.13. Provide + Inject vs Props & Custom Events

### 8.14. Module Summary

- Component Communication

  - Component Communication Overview

    - Components are used to build UIs by `combining` them
    - Components build `parent-child` relations and use `unidirectional data flows` for communication

  - Props (parent => child)

    - `Props` are used to `pass data from a parent to a child` component
    - Props should be `defined in advance`, possibly in great detail(type, required, etc.)

  - Custom Events (child => parent)

    - `Custom Events` are `emitted` (via `$emit`) to trigger a method in a parent component
    - Custom events can `carry data` which can be used in the called method

  - Provide-Inject
    - If data needs to be passed `across multiple components`("pass-through"), you can use `provide/inject`
    - `Provide data in a parent` component, `inject it into a child` component.

## 9. Diving Deeper into Components

### 9.1. Module Introduction

- Unlocking The Full Potential
- Module Content

  - Component Registration & Styling
  - Slots & Dynamic Components
  - Naming & Folder Structure

### 9.2. Project Setup

### 9.3. Global vs Local Components

- Global Components

  - Components you can `use anywhere` in your Vue app - i.e. in `any template`.

  ```js
  const app = createApp(App);
  app.component('base-badge', BaseBadge);
  ...
  ```

- Local Components

  ```js
  import TheHeader from './components/TheHeader.vue';

  export default {
    components: {
      'the-header': TheHeader
    },
    ...
  }
  ```

### 9.4. Scoped Styles

```html
...
<style scoped>
  header {
    width: 100%;
  }
</style>
```

### 9.5. Introducing Slots

### 9.6. Named Slots

- A `<slot>` outlet without name implicitly has the name "default".

  ```html
  <BaseLayout>
    <template v-slot:header>
      <!-- content for the header slot -->
    </template>
  </BaseLayout>
  ```

- `v-slot` has a dedicated shorthand `#`, so `<template v-slot:header>` can be shortened to just `<template #header>`. Think of it as "render this template fragment in the child component's 'header' slot".

### 9.7. Slot Styles & Compilation

### 9.8. More on Slots

### 9.9. Scoped Slots

### 9.10. Dynamic Components

### 9.11. Keeping Dynamic Components Alive

### 9.12. Applying What We Know & A Problem

### 9.13. Teleporting Elements

### 9.14. Working with Fragments

### 9.15. The Vue Style Guide

### 9.16. Moving to a Different Folder Structure

### 9.17. Module Summary

- Component Registration & Styles

  - Components can be registered `globally or locally: Prefer local` registration.

  - Styles can be `global or scoped` to a component: `Prefer scoped` for most components.

- Slots

  - `Slots` can be used to add a `placeholder` for dynamic HTML code.
  - `Multiple, named slots` are possible, `default fallbacks` can be provided. `Scoped slots` allow adv. use-cases.

- Dynamic Components

  - Components can be `swapped dynamically` via the built-in `component" component.
  - Component caching can be added via the `keep-alive` component.

- Teleport & Style Guide
  - `DOM structure can be maintained` via `teleport` - it `keeps the component hierarchy!`
  - `Consider following the official style guide` to keep your code clean and understandable.

## 10. Project: The Learning Resources App

### 10.1. Module Introduction

### 10.2. Setup & First Steps

### 10.3. First Components & Props

### 10.4. Styling and More Components

### 10.5. Header & BaseCard Components

### 10.6. Adding a Base Button

### 10.7. Dynamic Components & Attribute Fallthrough

### 10.8. Adding & Styling Tabs

### 10.9. Adding a Form

### 10.10. Fetching User Input

### 10.11. Adding a Modal Dialog

### 10.12. Deleting Items

### 10.13. Adding "Teleport"

## 11. Forms

### 11.1. Module Introduction

### 11.2. v-model & Inputs

### 11.3. Working with v-model Modifiers and Numbers

### 11.4. v-model and Dropdowns

### 11.5. Using v-model with Checkboxes & Radiobuttons

### 11.6. Adding Basic Form Validation

### 11.7. Building a Custom Control Component

### 11.8. Using v-model on Custom Components

### 11.9. Module Summary

## 12. Sending HTTP Requests

### 12.1. Module Introduction

### 12.2. Starting App & Why we need a Backend

### 12.3. Adding a Backend

### 12.4. How To (Not) Send Http Requests

### 12.5. Sending a POST Request to Store Data

### Http Requests & Http Methods (Verbs)

### Using Axios Instead Of "fetch()"

### 12.6. Getting Data (GET Request) & Transforming Response Data

### 12.7. Loading Data When a Component Mounts

### 12.8. Showing a "Loading..." Message

### 12.9. Handling the "No Data" State

### 12.8. Handling Technical / Browser-side Errors

### 12.9. Handling Error Responses

### 12.10. Module Summary

## 13. Routing: Building "Multi-Page" Single Page Applications

### 13.1. Module Introduction

### 13.2. What & Why?

### 13.3. Routing Setup

### 13.4. Registering & Rendering Routes

### 13.5. Navigating with router-link

### 13.6. Styling Active Links

### 13.7. Programmatic Navigation

### 13.8. Passing Data with Route Params (Dynamic Segments)

### 13.9. Navigation & Dynamic Paths

### A Vue Bug

### 13.10. Updating Params Data with Watchers

### 13.11. Passing Params as Props

### 13.12. Redirecting & "Catch All" Routes

### 13.13. Using Nested Routes

### 13.14. More Fun with Named Routes & Location Objects

### 13.15. Using Query Params

### 13.16. Rendering Multiple Routes with Named Router Views

### 13.17. Controlling Scroll Behavior

### 13.18. Introducing Navigation Guards

### 13.19. Diving Deeper Into Navigation Guards

### 13.20. The Global "afterEach" Guard

### 13.21. Beyond Entering: Route Leave Guards

### 13.22. Utilizing Route Metadata

### 13.23. Organizing Route Files

### 13.24. Summary

## 14. Animations & Transitions

### 14.1. Module Introduction

### 14.2. Animation Basics & CSS Transitions

### 14.3. Understanding CSS Animations

### 14.4. Why Is "Just CSS" Not Enough?

### 14.5. Playing CSS Animations with Vue's Help

### 14.6. Using the Transition Component

### 14.7. CSS Animations with the Transition Component

### 14.8. Using Custom CSS Class Names

### 14.9. Example: Animating a Modal

### 14.10. Transitioning Between Multiple Elements

### 14.11. Using Transition Events

### 14.12. Building JavaScript Transitions (instead of CSS)

### 14.13. Disabling CSS Transitions

### 14.14. Getting Started with Animated Lists

### 14.15. Animating Lists with "transition-group"

### 14.16. Animate List Item Movement

### 14.17. Animating Route Changes

### 14.18. An Important Note on Animated Route Changes

## 15. Vuex

### 15.1. Module Introduction

### 15.2. What & Why?

### 15.3. Creating & Using a Store

### 15.4. Connecting Components to State

### 15.5. Introducing Mutations - A Better Way of Changing Data

### 15.6. Passing Data to Mutations with Payloads

### 15.7. Introducing Getters - A Better Way Of Getting Data

### 15.8. Running Async Code with Actions

### 15.9. Understanding the Action "Context"

### 15.10. Using Mapper Helpers

### 15.11. Example: Adding More State

### 15.12. Organizing your Store with Modules

### 15.13. Understanding Local Module State

### 15.14. Namespacing Modules

### 15.15. Structuring Vuex Code & Files

### 15.16. A Challenge!

### 15.17. Challenge Solution (1/3)

### 15.18. Challenge Solution (2/3)

### 15.19. Challenge Solution (3/3)

### 15.20. Summary

## 16. Main Project: "Find a Coach" Web App

### 16.1. Module Introduction

### 16.2. Planning the Project / Web App

### 16.3. Planning the Data Requirements

### 16.4. Planning the Layout / Components

### 16.5. Registering Routes

### 16.6. Adding Route Page Components

### 16.7. Working on the Main Layout & Styling

### 16.8. Wiring Up Pages

### 16.9. Adding Vuex and Coach Data

### 16.10. Working on the Coaches List and List Items

### 16.11. Adding a Couple of Base Components (Base Card, Base Button, Base Badge)

### 16.12. Building the Coach Detail Component

### 16.13. Filtering Coaches

### 16.14. Registering as a Coach: The Form

### 16.15. Adding Coaches to Vuex

### 16.16. Adding Form Validation

### 16.17. Working on the Contact Form

### 16.18. Storing Requests (Messages) With Vuex

### 16.19. Outputting Incoming Requests (Messages)

### 16.20. Filtering Requests for the Active Coach

### 16.21. Sending a PUT Http Request to Store Coach Data

### 16.22. Fetching Coach Data (GET Http Request)

### 16.23. Rendering a Loading Spinner

### 16.24. Adding Http Error Handling

### 16.25. Sending Coaching Requests Http Requests

### 16.26. Caching Http Response Data

### 16.27. Adding Route Transitions

### 16.28. The "Not Found" Page & Summary

## 17. Vue & Authentication

### 17.1. Module Introduction

### 17.2. How Authentication Works in Vue Apps (or any SPA)

### 17.3. Locking / Protecting Backend Resources

### 17.4. Adding an Authentication Page (Login & Signup)

### 17.5. Preparing Vuex

### 17.6. Adding a "Signup" Action & Flow

### 17.7. Better UX: Loading Spinner & Error Handling

### 17.8. Adding a "Login" Action & Flow

### 17.9. Attaching the Token to Outgoing Requests

### 17.10. Updating the UI Based on Auth State

### 17.11. Adding a "Logout" Action & Flow

### 17.12. Authentication & Routing (incl. Navigation Guards)

### 17.13. Adding "Auto Login"

### 17.14. Adding "Auto Logout"

### 17.15. Summary

## 18. Optimizing & Deploying Vue Apps

### 18.1. Module Introduction

- From Development to Production

### 18.2. What To Deploy?

- Vue apps `run in the browser` - with browser-side JavaScript code

  - `HTML` (just one HTML file)
  - `CSS` (often no separate files)
  - `JavaScript` (built by Vue project setup)

- A `static` web app / website
- A static websites hosting provider is needed

### 18.3. Optimization: Using Asynchronous Components

- Optimize Your Code
  - Test for Errors
  - Refactor & "Don't repeat yourself"
  - Consider using `Asynchronous Components`

### Note: Async Components & Routing

- Implecations:
  - We don't always need a `Dialog` component, so it can be lazily loaded

### 18.4. Building the Project For Production

- Creating Deployable Resources
  - Vue Project
    - Custom HTML + CSS + JS Files
      - Just deploy!
    - More Complex Project (e.g. created with CLI)
      - Optimize Your Code
      - Build + automatically optimize code
      - Deploy generated files

### 18.5. Deploying a Vue App

- Firebase Hosting

  - 1. Install Firebase CLI

    ```bash
    $ npm install -g firebase-tools
    ```

  - 2. Initialize your project

    - Sign in to Google

      ```bash
      $ firebase login
      ```

    - Initiate your project

      ```bash
      $ firebase init
      ```

  - 3. Deploy to Firebase Hosting

    - When you’re ready, deploy your web app

      - Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

      ```bash
      $ firebase deploy
      ```

## 19. The Component API - Replacing the Options API

### 19.1. Module Introduction

### 19.2. Which Problem Does The Composition API Solve?

### 19.3. Replacing "data" with "refs"

### Replacing the setup() Method

### 19.4. Building "reactive" Objects

### 19.5. Reactivity: A Deep Dive

### 19.6. Replacing "methods" with Regular Functions

### Time to Practice: Data & Functions

- 1 question

### 19.7. Replacing "Computed Properties" with the "computed" Function

### 19.8. Two-Way-Binding and the Composition API

### 19.9. Working with Watchers

### Time to Practice: Composition API Core Building Blocks

- 1 question

### 19.10. A First Summary

### 19.11. How To Use Template Refs

### 19.12. Components, Props & The Composition API

### 19.13. Emitting Custom Events

### 19.14. Working with Provide/ Inject

### 19.15. Lifecycle Hooks in the Composition API

### 19.16. Migrating from Options API to Composition API - An Example Project

### 19.17. Migrating a First Component

### 19.18. Migrating a Big Component

### 19.19. Migrating the Remaining Components

### 19.20. Routing, Params & The Composition API

### 19.21. The Route & Router Objects and the Composition API

### 19.22. Using Vuex with the Composition API

### 19.23. Summary

## 20. Reusing Functionality: Mixins & Custom Composition Functions

### 20.1. Module Introduction

### 20.2. Reusability Concepts

### 20.3. Using Mixins

### 20.4. Understanding Mixin Merging

### 20.5. Global Mixins

### 20.6. Disadvantages of Mixins

### 20.7. Custom Hooks / Composables & The Composition API

### 20.8. More Custom Composition Functions

### 20.9. Why Hooks / Composables Beat Mixins

### 20.10. Example: Creating a "Search" Hook

### 20.11. Custom Hooks Gotchas

### 20.12. More Thoughts on Custom Hooks / Composables

### 20.13. Example: A Custom "Sort" Hook

## 21. Roundup & Next Steps

### 21.1. Roundup & Next Steps

## 22. Vue 2 to Vue 3 Migration

### 22.1. Vue 3 - Overview

### 22.2. Important Changes & Migration Steps

### 22.3. Vue 3: New Features

### 22.4. The New Composition API (Optional!)

## 23. Getting Started [VUE2]

### 23.1. Module Introduction

### 23.2. Creating Your First Vue.js Application

### 23.3. Extending the Vue.js Application

### 23.4. Course Structure

### 23.5. Take Advantage of All Coure Resources!

### 23.6. Set up Vue.js Locally

## 24. Using Vue.js to Interact with the Document Object Model(DOM) [VUE2]

### 24.1. Module Introduction

### 24.2. Understanding Vue.js Templates

### 24.3. How the Vue.js Template Syntax and Instance Work Together

### 24.4. Accessing Data in the Vue Instance

### 24.5. Binding to Attributes

### 24.6. Understanding and Using Directives

### 24.7. Disable Re-Rendering with v-once

### 24.8. How to Output Raw HTML

### Assignment: Outputting Data to Templates (Problem)

### Assignment: Outputting Data to Tempaltes (Solution)

### 24.9. Listening to Events

### 24.10. Getting Event Data from the Event Object

### 24.11. Passing Your Own Arguments with Events

### 24.12. Modifying an event - with Event Modifiers

### 24.13. Listening to Keyboard Events

### Assignment Events (Problem)

### Assignment Events (Solution)

### 24.14. Writing JavaScript Code in the Templates

### 24.15. Using Two-Way-Binding

### 24.16. Writing JavaScript Code in the Templates

### 24.17. Reacting to Changes with Computed Properties

### 24.18. An Alternative to Computed Properties: Watching for Changes

### 24.19. Saving Time with Shorthands

### Assignment: Reactive Properties (Problem)

### Assignment: Reactive Properties (Solution)

### 24.20. Dynamic Styling with CSS Classes - Basics

### 24.21. Dynamic Styling with CSS Classes - Using Objects

### 24.22. Dynamic Styling with CSS Classes - Using Names

### 24.23. Setting Styles Dynamically (without CSS Classes)

### 24.24. Styling Elements with the Array Syntax

### Assignment: Styling (Problem)

### Assignment: Styling (Solution)

### 24.25. Wrap Up

## 25. Using Conditionals and Rendering Lists [VUE2]

### 25.1 Module Introduction

### 25.2 Conditional Rendering with v-if

### 25.3 Using an Alternative v-if Syntax

### 25.4 Don't Detach it with v-show

### 25.5 Rendering Lists with v-for

### 25.6 Getting the Current Index

### 25.7 Using an Alternative v-for Syntax

### 25.8 Looping through Objects

### 25.9 Looping through a List of Numbers

### 25.10 Keeping Track of Elements when using v-for

### Assignment: Conditionals & Lists (Problem)

### Assignment: Conditionals & Lists (Solution)

### 25.11 Wrap Up

## 26. First Project - The Monster Slayer [VUE2]

### 26.1 Introduction & Challenge

### 26.2 Setting up the Course Project

### 26.3 Creating the Vue Instance and Styling the Healthbars

### 26.4 Showing the Player Controls Conditionally

### 26.5 Implementing a "Start Game" Method

### 26.6 Implementing a "Attack" Method

### 26.7 Write better Code - Time for Refactoring!

### 26.8 Implementing a "Special Attack"

### 26.9 Implementing a "Heal" Method

### 26.10 Finishing the Action Buttons

### 26.11 Creating an Action Log

### 26.12 Printing the Log (v-for)

### 26.13 Finishing the Log

### 26.14 Styling the Log Conditionally

### 26.15 Wrap Up

## 27. Understanding the Vue.js Instance [VUE2]

### 27.1 Module Introduction

### 27.2 Some Basics about the VueJS Instance

### 27.3 Using Multiple Vue Instances

### 27.4 Accessing the Vue Instance from Outside

### 27.5 How VueJS manages your Data and Methods

### 27.6 A Closer Look at $el and $data

### 27.7 Placing $refs and Using them on your Templates

### 27.8 Where to learn more about the Vue API

### 27.9 Mounting a Template

### 27.10 Using Components

### 27.11 Limitations of some Templates

### 27.12 How VueJS Updates the DOM

### 27.13 The VueJS Instance Lifecycle

### 27.14 The VueJS Instance Lifecycle in Practice

### 27.15 Wrap Up

## 28. Moving to a "Real" Development Workflow with Webpack and Vue CLI [VUE2]

### 28.1 Module Introduction

### 28.2 Why do we need a Development Server?

### 28.3 What does "Development Workflow" mean?

### 28.4 Using the Vue CLI to create Projects

### 28.5 Installing the Vue CLI and Creating a new Project

### 28.6 An Overview over the Webpack Template Folder Structure

### 28.7 Understanding ".vue" Files

### 28.8 Understanding the Object in the Vue File

### 28.9 How to Build your App for Production

### 28.10 More about ".vue" Files & the CLI

### 28.11 Debugging VueJS Projects

### 28.12 Wrap Up

## 29. An Introduction to Components [VUE2]

### 29.1 Module Introduction

### 29.2 An Introduction to Components

### 29.3 Storing Data in Components with the Data Method

### 29.4 Registering Components Locally and Globally

### 29.5 The "Root Component" in the App.vue File

### 29.6 Creating a Component

### 29.7 Using Components

### Assignment: Components Basics (Problem)

### Assignment: Components Basics (Solution)

### 29.8 Moving to a Better Folder Structure

### 29.9 How to Name your Component Tags (Selectors)

### 29.10 Scoping Component Styles

### 29.11 Wrap Up

## 30. Communicating between Components [VUE2]

### 30.1 Module Introduction

### 30.2 Communication Problems

### 30.3 Using Props for Parent => Child Communication

### 30.4 Naming "props"

### 30.5 Using "props" in the Child Component

### 30.6 Validating "props"

### 30.7 Using Custom Events for Child => Parent Communication

### 30.8 Understanding Unidirectional Data Flow

### 30.9 Communicating with Callback Functions

### 30.10 Communication between Sibling Components

### 30.11 Using an Event Bus for Communication

### 30.12 Centralizing Code in an Event Bus

### Assignment: Component Communication (Problem)

### Assignment: Component Communication (Solution)

### 30.13 Wrap Up

## 31. Advanced Component Usage [VUE2]

### 31.1 Module Introduction

### 31.2 Setting up the Module Project

### 31.3 Passing Content - The Suboptimal Solution

### 31.4 Passing Content with Slots

### 31.5 How Slot Content gets Compiled and Styled

### 31.6 Using Multiple Slots (Named Slots)

### 31.7 Default Slots and Slot Defaults

### 31.8 A Summary on Slots

### 31.9 Switching Multiple Components with Dynamic Components

### 31.10 Understanding Dynamic Component Behavior

### 31.11 Keeping Dynamic Components Alive

### 31.12 Dynamic Component Lifecycle Hooks

### 31.13 Assignment: Advanced Components (Problem)

### 31.14 Assignment: Advanced Components (Solution)

### 31.15 Wrap Up

## 32. Second Project - Wonderful Quotes [VUE2]

### 32.1 Module Introduction

### 32.2 Setting up the Project

### 32.3 Initializing the Application

### 32.4 Creating the Application Components

### 32.5 Passing Data with Props and Slots

### 32.6 Allowing Users to Create Quotes with a NewQuote Component

### 32.7 Adding Quotes with Custom Events

### 32.8 Adding a Info Box

### 32.9 Allowing for Quote Deletion

### 32.10 Controlling Quotes with a Progress Bar

### 32.11 Finishing Touches and State Management

## 33. Handling User Input with Forms [VUE2]

### 33.1 Module Introduction

### 33.2 A Basic Form Binding

### 33.3 Grouping Data and Pre-Populating Inputs

### 33.4 Modifying User Input with Input Modifiers

### 33.5 Binding and Saving Line Breaks

### 33.6 Using Checkboxes and Saving Data in Arrays

### 33.7 Using Radio Buttons

### 33.8 Handling Dropdowns with and

### 33.9 What v-model does and How to Create a Custom Control

### 33.10 Creating a Custom Control (Input)

### 33.11 Submitting a Form

### Assignment: Forms (Problem)

### Assignment: Forms (Solution)

### 33.12 Wrap Up

## 34. Using and Creating Directives [VUE2]

### 34.1 Module Introduction

### 34.2 Understanding Directives

### 34.3 How Directives Work - Hook Functions

### 34.4 Creating a Simple Directive

### 34.5 Passing Values to Custom Directives

### 34.6 Passing Arguments to Custom Directives

### 34.7 Modifying a Custom Directive with Modifiers

### 34.8 Custom Directives - A Summary

### 34.9 Registering Directives Locally

### 34.10 Using Multiple Modifiers

### 34.11 Passing more Complex Values to Directives

### 34.12 Assignment: Directives (Problem)

### 34.13 Assignment: Directives (Solution)

### 34.14. Wrap Up

## 35. Improving your App with Filters and Mixins [VUE2]

### 35.1 Module Introduction

### 35.2 Creating a Local Filter

### 35.3 Global Filters and How to Chain Multiple Filters

### 35.4 An (often-times better) Alternative to Filters: Computed Properties

### 35.5 Understanding Mixins

### 35.6 Creating and Using Mixins

### 35.7 How Mixins get Merged

### 35.8 Creating a Global Mixin (Special Case!)

### 35.9 Mixins and Scope

### 35. Assignments: Filters & Mixins (Problem)

### 35. Assignments: Filters & Mixins (Solution)

### 35.10 Wrap Up

## 36. Adding Animations and Transitions [VUE2]

### 36.1 Module Introduction

### 36.2 Understanding Transitions

### 36.3 Preparing Code to use Transitions

### 36.4 Setting Up a Transition

### 36.5 Assigning CSS Classes for Transitions

### 36.6 Creating a "Fade" Transition with the CSS Transition Property

### 36.7 Creating a "Slide" Transition with the CSS Animation Property

### 36.8 Mixing Transition and Animation Properties

### 36.9 Animating v-if and v-show

### 36.10 Setting Up an Initial (on-load) Animation

### 36.11 Using Different CSS Class Names

### 36.12 Using Dynamic Names and Attributes

### 36.13 Transitioning between Multiple Elements (Theory)

### 36.14 Transitioning between Multiple Elements (Practice)

### 36.15 Listening to Transition Event Hooks

### 36.16 Understanding JavaScript Animations

### 36.17 Excluding CSS from your Animation

### 36.18 Creating an Animation in JavaScript

### 36.19 Animating Dynamic Components

### 36.20 Animating Lists with "transition-group"

### 36.21 Using "transition-group" - Preparations

### 36.22 Using "transition-group" to Animate a List

### 36.23 Understanding the App

### 36.24 Creating the App

### 36.25 Adding Animations

### 36.2 5Wrap Up

## 37. Connecting to Servers through HTTP - Using Vue-resource [VUE2]

### 37.1 Accessing Http via vue-resource - Setup

### 37.2 Creating an Application and Setting Up a Server (Firebase)

### 37.3 POSTing Data to a Server (Sending a POST Request)

### 37.4 GETting and Transforming Data (Sending a GET Request)

### 37.5 Configuring vue-resource Globally

### 37.6 Intercepting Requests

### 37.7 Intercepting Responses

### 37.8 Where the "resource" in vue-resource Comes From

### 37.9 Creating Custom Resources

### 37.10 Resources vs "Normal" Http Requests

### 37.11 Understanding Template URLs

### 37.12 Wrap Up

## 38. Routing in a Vue.js Application [VUE2]

### 38.1 Module Introduction

### 38.2 Setting up the VueJS Router (vue-router)

### 38.3 Setting Up and Loading Routes

### 38.4 Understanding Routing Modes (Hash vs History)

### 38.5 Navigating with Router Links

### 38.6 Where am I? - Styling Active Links

### 38.7 Navigating from Code (Imperative Navigation)

### 38.8 Setting Up Route Parameters

### 38.9 Fetching and Using Route Parameters

### 38.10 Reacting to Changes in Route Parameters

### 38.11 vue-router 2.2: Extract Route Params via "props"

### 38.12 Setting Up Child Routes (Nested Routes)

### 38.13 Navigating to Nested Routes

### 38.14 Making Router Links more Dynamic

### 38.15 A Better Way of Creating Links - With Named Routes

### 38.16 Using Query Parameters

### 38.17 Multiple Router Views (Named Router Views)

### 38.18 Redirecting

### 38.19 Setting Up "Catch All" Routes / Wildcards

### 38.20 Animating Route Transitions

### 38.21 Passing the Hash Fragment

### 38.22 Controlling the Scroll Behavior

### 38.23 Protecting Routes with Guards

### 38.24 Using the "beforeEnter" Guard

### 38.25 Using the "beforeLeave" Guard

### 38.26 Loading Routes Lazily

### 38.27 Wrap Up

## 39. Better State Management with Vuex [VUE2]

### 39.1 Module Introduction

### 39.2 Why a Different State Management May Be Needed

### 39.3 Understanding "Centralized State"

### 39.4 Using the Centralized State

### 39.5 Why a Centralized State Alone Won't Fix It

### 39.6 Understanding Getters

### 39.7 Using Getters

### 39.8 Mapping Getters to Properties

### 39.9 Understanding Mutations

### 39.10 Using Mutations

### 39.11 Why Mutations have to run Synchronously

### 39.12 How Actions improve Mutations

### 39.13 Using Actions

### 39.14 Mapping Actions to Methods

### 39.15 A Summary of Vuex

### 39.16 Two-Way-Binding (v-model) and Vuex

### 39.17 Improving Folder Structures

### 39.18 Modularizing the State Management

### 39.19 Using Separate Files

### 39.20 Using Namespaces to Avoid Naming Problems

### 39.21 Wrap Up

## 40. Final Project - The Stock Trader [VUE2]

### 40.1 Project Introduction

### 40.2 Project Setup and Planning

### 40.3 Creating the First Components

### 40.4 Setup Project Routes

### 40.5 Adding a Header and Navigation

### 40.6 Planning the Next Steps

### 40.7 Creating Stocks Components

### 40.8 Adding a "Buy" Button

### 40.9 Setting up the Vuex State Management

### 40.10 Adding a Portfolio Module to Vuex

### 40.11 Working on the Portfolio Stocks

### 40.12 Connecting the Portfolio with Vuex

### 40.13 Time to fix some Errors

### 40.14 Displaying the Funds

### 40.15 Adding some Order Checks

### 40.16 Making Funds Look Nicer with Filters

### 40.17 Ending the Day - Randomizing Stocks

### 40.18 Animating the Route Transitions

### 40.19 Saving & Fetching Data - Adding a Dropdown

### 40.20 Setting up vue-resource and Firebase

### 40.21 Saving Data (PUT Request)

### 40.22 Fetching Data (GET Request)

### 40.23 Testing and Bug Fixes

### 40.24 Project Wrap Up

### 40.25 Bonus: Debugging Vuex with Vue Developer Tools

## 41. Deploying a Vue.js Application [VUE2]

### 41.1 Module Introduction

### 41.2 Preparing for Deployment

### 41.3 Deploying the App (Example: AWS S3)

## 42. Bonus: Using Axios Instead of Vue-resource [VUE2]

### 42.1 About this Section

### 42.2 Module Introduction

### 42.3 Project Setup

### 42.4 Axios Setup

### 42.5 Sending a POST Request

### 42.6 Sending a GET Request

### 42.7 Accessing & Using Response Data

### 42.8 Setting a Global Request Configuration

### 42.9 Using Interceptors

### 42.10 Custom Axios Instances

### 42.11 Wrap Up

## 43. Bonus: Authentication in Vue Apps

### 43.1 About this Section

### 43.2 Module Introduction

### 43.3 How Authentication Works in SPAs

### 43.4 Project Setup

### 43.5 Adding User Signup

### 43.6 Adding User Signin (Login)

### 43.7 Using Vuex to send Auth Requests

### 43.8 Storing Auth Data in Vuex

### 43.9 Accessing other Resources from Vuex

### 43.10 Sending the Token to the Backend

### 43.11 Protecting Routes (Auth Guard)

### 43.12 Updating the UI State (based on Authentication State)

### 43.13 Adding User Logout

### 43.14 Adding Auto Logout

### 43.15 Adding Auto Login

### 43.16 Wrap Up
