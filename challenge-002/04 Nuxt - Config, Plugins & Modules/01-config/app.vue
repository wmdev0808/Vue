<template>
  <div>
    <NuxtLayout>
      <!-- Set throttle to 0. By default we only show it for transitions longer than 200ms. -->
      <NuxtLoadingIndicator
        color="#fa923f"
        :height="10"
        :duration="5000"
        :throttle="0"
      />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
