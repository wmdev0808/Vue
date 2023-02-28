<template>
  <div>
    Go to <NuxtLink to="/test"> Test Page </NuxtLink>
    <div>
      <p>Today is: {{ $formatDate(new Date()) }}</p>
    </div>
  </div>
</template>
