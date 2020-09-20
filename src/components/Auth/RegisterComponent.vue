<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-900">
        <div
            class="flex-1 h-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-800"
        >
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <!-- <div class="h-32 md:h-auto md:w-1/2">
                    <img
                    aria-hidden="true"
                    class="object-cover w-full h-full"
                    src="@/assets/img/create-account-office.jpeg"
                    alt="Office"
                    />
                </div> -->
                <div
                    
                    class="flex items-center justify-center p-6 sm:p-12 md:w-full"
                >
                    <form class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-200">
                            Create account
                        </h1>
                        <div>
                            <label
                                class="block text-gray-400 text-sm"
                                for="full_name">
                                Full Name
                            </label>
                            <input
                                class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                placeholder="Nama Anda"
                                id="full_name"
                                type="text"
                                v-model="datas.full_name"
                            />
                        </div>

                        <div>
                            <label
                                class="text-gray-400 block mt-4 text-sm"
                                for="phone_number">
                                Phone Number
                            </label>
                            <input
                                class="block p-2 rounded-lg text-center w-full mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                placeholder="08xxxxxxxxxx"
                                id="phone_number"
                                type="text"
                                v-model="datas.phone_number"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-gray-400 mt-4 text-sm"
                                for="email">
                                Email Address
                            </label>
                            <input
                                class="block p-2 rounded-lg text-center w-full mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                placeholder="user@example.com"
                                id="email"
                                type="email"
                                v-model="datas.email"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-gray-400 mt-4 text-sm"
                                for="username">
                                Username
                            </label>
                            <input
                                class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                placeholder="useranda"
                                id="username"
                                type="text"
                                v-model="datas.username"
                            />
                        </div>

                        <div>
                            <label
                                class="block text-gray-400 mt-4 text-sm"
                                for="password">
                                Password
                            </label>
                            <input
                                class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                placeholder="***************"
                                id="password"
                                type="password"
                                v-model="datas.password"
                            />
                        </div>
                        <div>
                            <label
                                class="block text-gray-400 mt-4 text-sm"
                                for="confirm">
                                Confirm password
                            </label>
                            <input
                                class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                placeholder="***************"
                                id="confirm"
                                type="password"
                                v-model="datas.confirm"
                            />
                        </div>
                        <div>
                            <button
                                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                type="submit"
                                @click="sendRequest"
                            >
                                Create account
                            </button>
                        </div>

                        <hr class="my-8" />

                        <div class="mt-1">
                            <p class="text-sm font-medium text-purple-600 dark:text-purple-400">
                                Already have an account?
                                <router-link
                                    :to="{ name: 'Login' }"
                                    class="hover:underline"
                                >
                                    Login
                                </router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from "vuex";
    export default {
        name: "RegisterIndex",
        data() {
            return {
                datas: {
                    username: "",
                    password: "",
                    phone_number: "",
                    email: "",
                    full_name: "",
                    confirm: "",
                }
            };
        },
        computed: {
            ...mapState("Auth", ["errorMessage"]),
        },
        methods: {
            ...mapActions("Auth", ["register"]),
            sendRequest(e) {
                e.preventDefault();
                const error = [];
                if (this.datas.username === "") error.push("Username required");
                if (this.datas.password === "") error.push("Password required");
                if (this.datas.phone_number === "") error.push("Phone Number required");
                if (this.datas.email === "") error.push("Email required");
                if (this.datas.full_name === "") error.push("Full Name required");
                if (this.datas.confirm !== this.datas.password) error.push("Confirm Password doesn't Match");
                if (error.length > 0) {
                    alert(error.join(",\r\n"));
                } else {
                    const payload = {
                        username: this.datas.username,
                        password: this.datas.password,
                        full_name: this.datas.full_name,
                        phone_number: this.datas.phone_number,
                        email: this.datas.email
                    }
                    this.register(payload);
                }
                return false;
            },
        },
    };
</script>
