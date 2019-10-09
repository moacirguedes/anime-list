<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Animes</router-link>|
      <router-link to="/favorites">Favorites</router-link>|
      <a href="">PDF</a>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f2c50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #3f2c50;
}

#nav a.router-link-exact-active {
  color: #af42b9;
}
</style>
