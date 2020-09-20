<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-900">
      <div
        class="flex-1 h-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-800"
      >
        <div @submit="sendRequest" class="flex flex-col overflow-y-auto md:flex-row">
          <!-- <div class="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              class="object-cover w-full h-full"
              src="@/assets/img/login-office.jpeg"
              alt="Office"
            />
          </div> -->
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-full">
            <form class="w-full">
              <h1 class="mb-4 text-xl font-semibold text-gray-200">Login</h1>
              <div>
                <label
                  class="block text-sm text-gray-400"
                  for="username">
                  Username
                </label>
                <input
                  class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                  id="username"
                  type="text"
                  placeholder="useranda"
                  v-model="username"
                />
              </div>

              <div>
                <label
                  class="block mt-4 text-sm"
                  for="password">
                  Password
                </label>
                <input
                  class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                  id="password"
                  v-model="password"
                  placeholder="***************"
                  type="password"
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  type="submit">
                  Log in
                </button>
              </div>

              <hr class="my-6" />

              <div class="mt-1">
                <router-link :to="{ name: 'Register'}" class="text-sm font-medium text-purple-400 hover:underline">Create account</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'LoginIndex',
  data: () => ({
    username: "",
    password: "",
  }),
  created() {},
  computed: {},
  methods: {
    ...mapActions("Auth", ["reqLogin"]),
    sendRequest(e) {
      e.preventDefault();
      const error = [];
      if (this.username === "") error.push("Username required");
      if (this.password === "") error.push("Password required");

      if (error.length > 0) {
        alert(error.join(",\r\n"));
      } else {
        this.reqLogin({ username: this.username, password: this.password });
      }
      return false;
    },
  },
}
</script>