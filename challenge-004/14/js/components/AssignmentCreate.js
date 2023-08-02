export default {
  template: `
        <form @submit.prevent="add" class="mt-2">
            <div class="flex border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New assignment..." class="w-full p-2 mr-2" /> 
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form> 
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);

      this.newAssignment = "";
    },
  },
};
