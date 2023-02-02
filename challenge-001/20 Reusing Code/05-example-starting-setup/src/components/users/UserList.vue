<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

import type User from "@/types/User";
import UserItem from "./UserItem.vue";

const props = defineProps<{ users: User[] }>();

const emit = defineEmits<{ (e: "list-projects", userId: string): void }>();

const enteredSearchTerm = ref<string>("");
const activeSearchTerm = ref<string>("");

const availableUsers = computed<User[]>(function () {
  if (activeSearchTerm.value) {
    return props.users.filter((usr) =>
      usr.fullName.includes(activeSearchTerm.value)
    );
  }
  return props.users;
});

watch(enteredSearchTerm, function (newValue) {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 300);
});

function updateSearch(val: string) {
  enteredSearchTerm.value = val;
}

const sorting = ref<"asc" | "desc" | null>(null);

const displayedUsers = computed<User[]>(function () {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === "asc" && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === "asc") {
      return -1;
    } else if (sorting.value === "desc" && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

function sort(mode: "asc" | "desc") {
  sorting.value = mode;
}

// data() {
//   return {
//     enteredSearchTerm: '',
//     activeSearchTerm: '',
//     sorting: null,
//   };
// },
// computed: {
//   availableUsers() {
//     let users = [];
//     if (this.activeSearchTerm) {
//       users = this.users.filter((usr) =>
//         usr.fullName.includes(this.activeSearchTerm)
//       );
//     } else if (this.users) {
//       users = this.users;
//     }
//     return users;
//   },
//   displayedUsers() {
//     if (!this.sorting) {
//       return this.availableUsers;
//     }
//     return this.availableUsers.slice().sort((u1, u2) => {
//       if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
//         return 1;
//       } else if (this.sorting === 'asc') {
//         return -1;
//       } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
//         return -1;
//       } else {
//         return 1;
//       }
//     });
//   },
// },
// methods: {
//   updateSearch(val) {
//     this.enteredSearchTerm = val;
//   },
//   sort(mode) {
//     this.sorting = mode;
//   },
// },
// watch: {
//   enteredSearchTerm(val) {
//     setTimeout(() => {
//       if (val === this.enteredSearchTerm) {
//         this.activeSearchTerm = val;
//       }
//     }, 300);
//   }
// },
// };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
