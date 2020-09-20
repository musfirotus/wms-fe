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
      <router-link :to="{ name: 'Ins' }">Product In</router-link>
    </div>
    <div class="w-full p-5">
      <router-link :to="{ name: 'Outs' }">Product Out</router-link>
    </div>
    <div class="w-full p-5">
      <router-link :to="{ name: 'Users' }">User</router-link>
    </div>
    <hr class="my-4" />
    <div class="w-full p-5 bottom-0">
      <button @click="logout" class="text-red-500">
          Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SideMain',
  methods: {
    ...mapActions("Auth",["logout"])
  }
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

#nav a {
  font-weight: bold;
  color: white;
}

#nav button {
  font-weight: bold;
  color: red;
}

#nav a.router-link-exact-active {
  color: #4299e1;
}

#nav a:hover {
  color: #4299e1;
}
</style>