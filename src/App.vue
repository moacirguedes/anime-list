<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Animes</router-link>|
      <router-link to="/favorites">Favorites</router-link>|
      <a href="https://docs.google.com/document/d/1GTcH5mkeAcOjII9jmXMxaLQ5B1fP45CO2xU6RbZdXPA/edit?usp=sharing">PDF</a>
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
