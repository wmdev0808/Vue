<template>
  <base-card>
    <base-button
      @click="setSelectedTab(Tab.STORED_RESOURCES)"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab(Tab.ADD_RESOURCE)"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ButtonMode } from "../UI/BaseButton.vue";

import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
}

export enum Tab {
  STORED_RESOURCES = "stored-resources",
  ADD_RESOURCE = "add-resource",
}

export default defineComponent({
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: Tab.STORED_RESOURCES,
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === Tab.STORED_RESOURCES
        ? ButtonMode.DEFAULT
        : ButtonMode.FLAT;
    },
    addResButtonMode() {
      return this.selectedTab === Tab.ADD_RESOURCE
        ? ButtonMode.DEFAULT
        : ButtonMode.FLAT;
    },
  },
  methods: {
    setSelectedTab(tab: Tab) {
      this.selectedTab = tab;
    },
    addResource(title: string, description: string, url: string) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = Tab.STORED_RESOURCES;
    },
    removeResource(resId: string) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
});
</script>

<script setup lang="ts">
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";
</script>
