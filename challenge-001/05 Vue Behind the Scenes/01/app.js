const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// ** Demonstrate vanilla JavaScript Proxy feature which is used by Vue under the hood **

/**
 * JavaScript is not reactive by default, meaning, for example, if we change message variable, all the referencing expressions are not re-evaluated
 */
// let message = "Hello";
// let longMessage = message + " World!";

// console.log(longMessage);

// message = "Hello!!!";
// console.log(longMessage);

/**
 * JavaScript Proxy can be used to implement reactivity, for example, if message variable changes, its referencing property values in a target object will also be changed using Set trap mechanism
 */
// const data = {
//   message: "Hello!",
//   longMessage: "Hello! World!",
// };

// const handler = {
//   set(target, key, value) {
//     // console.log(target);
//     // console.log(key);
//     // console.log(value);
//     if (key === "message") {
//       target.longMessage = value + " World";
//     }
//     target.message = value;
//   },
// };

// const proxy = new Proxy(data, handler);

// proxy.message = "Hello!!!!";

// console.log(proxy.longMessage);
