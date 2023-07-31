# Learn Vue 3: Step by Step

## SECTION 1 Getting Started

### 01. Vue 3 Absolute Basics

- About

  Let's start...at the beginning! We'll pull in Vue 3 through a CDN, and then review the absolute basics of the framework, including Vue initialization, text interpolation, and reactivity.

- Things You'll Learn
  - Vue.createApp()
  - Text Interpolation
  - Reactivity

### 02. Atribute Binding and Event Handling

- About

  You'll often want to bind the value of an HTML attribute to an expression. We can allow for this by using the v-bind directive. As part of this lesson, we'll also get a first taste of event handling in Vue.

- Things You'll Learn
  - v-bind
  - v-on

### 03. Lists, Conditionals, and Computed Properties

- About

  Let's dig into a few more important concepts in this episode. Using the example of an assignment list, we'll learn how to loop over arrays, conditionally display HTML, and prepare computed properties.

- Things You'll Learn
  - Computed Properties
  - Conditionals
  - Loops

## SECTION 2 Vue Components

### 04. Your First Custom Vue Component

- About

  We've now learned the absolute basics of Vue; however, this still looks nothing like real-life Vue applications. Let's begin digging into custom Vue components.

- Things You'll Learn
  - Component Basics

### 05. One Vue Component Per File

- About

  We can technically inline child Vue components, but you'll rarely do so. Instead, a much cleaner approach is to store each Vue component within its own file. Let's take care of that in this episode.

- Things You'll Learn
  - EcmaScript Imports

### 06. Component Props

- About

  If we want our Vue components to be as flexible as possible, we should figure out a way to pass in data from the outside. This way, each "instance" of a component can be configurable. Props allow for this!

- Things You'll Learn
  - Props
  - Class Object Binding

### 07. Bring it All Together

- About

  Let's now return to the simple assignment lists that we worked on in episode three. But this time, we'll approach it with fresh eyes and a new understanding of how Vue components work.

- Things You'll Learn
  - Component Trees
  - Refactoring Steps

## SECTION 3 Event Handling

### 08. Handle a Form Submission

- About

  In this episode, we'll combine forms and events to allow a user to create new assignments on the fly.

- Things You'll Learn
  - Form Handling

### 09. Parent-Child State Communication

- About

  Now, let's throw a wrench into the mix. If we extract a new Vue component, we'll then need to figure out how our components should communicate state changes.

- Things You'll Learn
  - Props
  - Emitting Events

## SECTION 4 Beyond the Basics

### 10. It's All So Easy

- About

  Once you understand the basics of Vue, you'll quickly find that things, which were incredibly time consuming years ago, can now be accomplished in seconds. Let's review a couple examples in this video.

- Things You'll Learn
  - Assignment Tagging
  - Sets

### 11. Component Responsibility

- About

  In this episode, we'll discuss component responsibility as we refactor to an `AssignmentsTags` component. I think of component responsibility in the same way that I think of server-side class responsibility. "Does this bit of logic belong here?"

- Things You'll Learn
  - Component Refactoring
  - Component Responsibility

### 12. A Deeper Look at V-Model

- About

  We reviewed the basics of the `v-model` directive at the beginning of the series, but I think it's time that we take a deeper look. What exactly happens when we apply `v-model` to an input? And can we also use it on custom Vue components?

- Things You'll Learn
  - v-model

### 13. Lifecycle Hooks, Fake APIs, and AJAX

- About

  So far, we've been hard-coding the list of assignments directly within our Vue component. But of course, that's not overly realistic. Let's switch over to using the `fetch()` JavaScript API to request data from a fake API.

- Things You'll Learn
  - Component hooks
  - json-server
  - Promises

### 14. More Flexible Components With Slots and Flags

- About

  There are many ways to allow for more flexible and configurable components. Let's begin with two simple and obvious techniques: slots and flags.

- Things You'll Learn
  - Component Slots
  - Feature Flags

### 15. Named Slots

- About

  So far, we've been working with components that only required a single, default slot. But, of course in real life, you'll encounter situations where you need to insert content in multiple areas. In these cases, we can used named slots.

- Things You'll Learn
  - Named Slots
  - $slots

## SECTION 5 Vite

### 16. Vite

- About

  Great job, if you've made it this far. I think you're now ready to move on to part two of this series. Now that you understand many of the fundamentals of Vue, let's now figure out how to actually construct a single-page application using it. To demonstrate this, we'll pull in a first-party tool called [Vite](https://vitejs.dev/).

- Things You'll Learn
  - Vite
  - Hot Reloading
  - Vue Router

### 17. Little Confusing Things

- About

  At this stage, I fully expect you to be confused in numerous ways. We went from building basic Vue components to scaffolding a full single-page application with routing, configuration, aliases, and more. In this lesson, let's review a handful of small things that I think you might initially find to be confusing.

- Things You'll Learn
  - Aliases
  - RouterView
  - Pascal Case for Components
  - Single Use Components

## SECTION 6 The Composition API

### 18. Two Mental Leaps to Script Setup

- About

  I must admit, I feel bad for what I'm about to do. You were becoming so comfortable, and I had to suddenly throw a wrench into the gears. In this lesson, let's mentally adjust to working with the Composition API and script setup.

- Things You'll Learn
  - Composition API
  - Script setup
  - Reactivity

### 19. From Mixins to Composables

- About

  Let's talk about code re-use in this episode. We'll begin by reviewing a basic example using a traditional, mixin-based approach. And then, we'll convert it to the more recommended approach these days: composables.

- Things You'll Learn
  - Code Re-use
  - Mixins
  - Composables

### 20. Composable Example: Local Storage

- About

  Let's review another example of a composable. This time, we'll leverage localStorage and Vue reactivity to "remember" a form input's value - even if you refresh the page.

- Things You'll Learn
  - Composables
  - localStorage
  - Vue watchers

### 21. Refactor to defineProps and defineEmits

- About

  Let's review a couple other Composition API gotchas in this episode. Using the example of an enhanced "tabbable" textarea, we'll learn how to use defineProps and defineEmits when using script setup.

- Things You'll Learn
  - v-model for Custom Components
  - defineProps
  - defineEmits

## SECTION 7 Managing State

### 22. Dependency Injection With Provide and Inject

- About

  Let's next move on to a discussion about dependency injection, and what that might look like within the context of a Vue application. One issue you'll quickly run into is what we refer to as "prop drilling." Let's learn what it is, and how to fix it.

- Things You'll Learn
  - Prop Drilling
  - Dependency Injection
  - provide / inject

### 23. Store State in an External File

- About

  So far, we've reviewed two different ways to share state across a wide range of components. But we're not done yet! Let's review a simple example that will take you a long way. There's nothing keeping you from extracting data, or state, to a reusable external file.

- Things You'll Learn
  - Global State
  - Prop Drilling
  - Reactivity

### 24. Direct Mutation Concerns

- About

  Before we move on to a dedicated tool for managing globally accessible state (Pinia), let's first review some new terminology and discuss potential concerns related to directly mutating state.

- Things You'll Learn
  - State
  - Actions
  - Mutating State

### 25. Say Hello to Pinia

- About

  I think we're finally ready to review dedicated tooling for managing global state. The go-to option these days is Pinia. Compared to our make-shift store from the previous episodes, Pinia will provide us with better devtool support, hot reloading, time traveling, and more!

- Things You'll Learn
  - State
  - Actions
  - Getters

## SECTION 8 Team Dashboard Exercise

### 26. Code Organization

- About

  Let's work on a more realistic exercise in this chapter. Let's prepare a dashboard for managing a team - perhaps for a SaaS. In this first episode, we'll review the design and then begin organizing the layout into a series of Vue components.

- Things You'll Learn
  - Extract Vue Components

### 27. Build and Seed a Team Store

- About

  In this episode, we'll extract a dedicated Pinia store for managing the state for a team. We'll also discuss how you might go about seeding a store with initial date that is fetched asynchronously.

- Things You'll Learn
  - Extract Pinia Store
  - Seed Initial Data

## SECTION 9 Transitions, Teleports, Tips

### 28. Build a Modal Component

- About

  Before I show you how transitions work, let's first build a modal component with Vue. As you'll find, it's surprisingly easy to create and toggle.

- Things You'll Learn
  - Modal Components
  - Emitting Events

### 29. Two Ways to Transition

- About

  The modal we created in the previous episode is looking decent now. The next step is to add a bit of animation for when it shows and hides. To allow for this, we can use Vue's `Transition` component.

- Things You'll Learn
  - Transition Component
  - CSS Transitioning

### 30. Teleporting

- About

  If you've ever built a modal before, you're probably aware that it's generally considered a good practice to place it at the bottom of the document, just before the closing body tag. In this episode, I'll show you how to do just that by leveraging Vue's `Teleport` component.

- Things You'll Learn
  - Teleport
  - Conditional Teleporting

## SECTION 10 Conclusion

### 31. That's All She Wrote

- About

  I hate to say it, but that's all she wrote. We're all wrapped up for this series. But, of course, there's still more to learn. In this final episode, we'll review

- Things You'll Learn
  - Continued Learning
