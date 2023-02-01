import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      alertIsVisible: false,
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
});
