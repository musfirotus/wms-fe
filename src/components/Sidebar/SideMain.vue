<template>
  <div>
    <h1 class="p-5 mb-4 text-blue-500 font-bold">WMS ~ Frontend</h1>
    <div class="w-full p-5">
      <router-link :to="{name:'MainRoute'}">Dashboard</router-link>
    </div>
    <div class="w-full p-5">
      <router-link :to="{ name: 'Products' }">Product</router-link>
    </div>
    <div class="w-full p-5">
      <router-link :to="{ name: 'Users' }">User</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMain'
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  padding: 20px 50px;
  background-color: #4299e1;
}

#nav a:hover {
  color: #ffffff;
  padding: 20px 50px;
  background-color: #4299e1;
}
</style>