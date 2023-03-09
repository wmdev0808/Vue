<template>
  <div>
    <div>
      <h1>Example</h1>
      <p>Fetched from<pre>/api/hello</pre>: {{ hello }}</p>
    </div>
  </div>
  
</template>

<script setup lang="ts">
const {data: hello} = await useFetch('/api/hello')
</script>
