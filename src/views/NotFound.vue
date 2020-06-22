<template>
  <div class="container">
    <h1>404</h1>
    <p>You don't belong here.</p>
    <p class="not-found-container">
      <router-link to="/">← Back home.</router-link>
    </p>
  </div>
</template>

<style scoped>
.not-found-container {
  margin: 240px 0;
}

p {
  line-height: 30px;
}
</style>
