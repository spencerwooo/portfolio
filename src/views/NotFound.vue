<template>
  <div class="container">
    <h1>404</h1>
    <p>Oh, no. Not here.</p>
    <p>
      <img class="bg" src="./../assets/images/404.svg" alt="404" />
      <router-link class="back-home" to="/">← Back home.</router-link>
    </p>
  </div>
</template>

<style scoped>
.bg {
  width: 100%;
  margin-bottom: 40px;
}

.back-home {
  font-weight: 700;
  font-size: 18px;
}

.back-home:hover {
  border: none;
}
</style>
