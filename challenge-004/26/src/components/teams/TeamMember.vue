<script setup lang="ts">
import type { Member } from '@/types/teams'

defineProps<Member>()
</script>

<template>
  <tr class="bg-gray-100 px-12">
    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
      <img :src="`https://i.pravatar.cc/50?u=${email}`" alt="" class="rounded-xl" />
      {{ name }}
    </td>

    <td class="text-gray-500 px-6 py-4">{{ email }}</td>

    <td class="px-6 py-4">
      <button class="text-green-400 text-xl">{{ status }}</button>
    </td>
  </tr>
</template>
