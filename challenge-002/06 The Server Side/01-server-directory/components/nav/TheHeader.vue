<template>
  <div class="header-container">
    <header class="the-header">
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/example">Example</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/server-routes">Server Routes</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/server-middleware">Server Middleware</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/usage-examples/matching-http-method"
              >Matching HTTP Method</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/advanced-examples/server-storage"
              >Server Storage</NuxtLink
            >
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
