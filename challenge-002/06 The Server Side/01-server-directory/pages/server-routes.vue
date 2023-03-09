<template>
  <div>
    <div>
      <h1>Server Routes</h1>
      <p>Fetched from<pre>/hello</pre>: {{ hello }}</p>
    </div>
  </div>  
</template>

<script setup lang="ts">
const {data: hello} = await useFetch('/hello')
</script>
