<template>
    <div>
        <button
            class="flex w-1/7 justify-left mr-2 mb-4 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            type="button"
            style="transition: all .15s ease"
            v-on:click="toggleModal()"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5 mr-1"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>New User</span>
        </button>

        <div
            v-if="showModal"
            class="bg-gray-700 bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
            <div class="mx-auto">
                <div class="w-full max-w-sm mx-auto mt-8 bg-gray-900">
                    <form
                        class="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        @submit="addForm"
                    >
                        <h1 class="text-white font-bold mt-4 mb-8 text-xl">
                            Add User
                        </h1>

                        <div class="mb-4">
                            <label
                                class="text-left text-white block text-base font-bold mb-2"
                                for="full_name"
                                >Full Name</label
                            >
                            <input
                                class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="full_name"
                                v-model="full_name"
                                type="text"
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="text-left block text-white text-base font-bold mb-2"
                                for="phone_number"
                                >Phone Number</label
                            >
                            <input
                                class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="phone_number"
                                v-model="phone_number"
                                type="text"
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="text-left block text-white text-base font-bold mb-2"
                                for="email"
                                >Email</label
                            >
                            <input
                                class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                v-model="email"
                                type="email"
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="text-left block text-white text-base font-bold mb-2"
                                for="username"
                                >Username</label
                            >
                            <input
                                class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                v-model="username"
                                type="text"
                            />
                        </div>

                        <div class="mb-4">
                            <label
                                class="text-left block text-white text-base font-bold mb-2"
                                for="password"
                                >Password</label
                            >
                            <input
                                class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                v-model="password"
                                type="password"
                            />
                        </div>

                        <div class="flex items-center justify-between">
                            <button
                                class="bg-purple-500 hover:bg-purple-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                        <div class="mt-4">
                            <button
                                class="text-purple-500 text-center font-bold"
                                style="transition: all .15s ease"
                                @click="toggleModal()"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: "ModalUser",
        components: {},
        data() {
            return {
                showModal: false,
                full_name: "",
                username: "",
                password: "",
                email: "",
                phone_number: ""
            };
        },
        methods: {
            toggleModal() {
                this.showModal = !this.showModal;
            },
            addForm(e) {
                let error = [];
                if (this.full_name === "") error.push("Full name Required");
                if (this.email === "") error.push("Email Required");
                if (this.phone_number === "") error.push("Phone number Required");
                if (this.username === "") error.push("Username Required");
                if (this.password === "") error.push("Password Required");
                if (error.length > 0) alert(error.join(",\r\n"));
                else {
                    const payload = {
                        full_name: this.full_name,
                        email: this.email,
                        phone_number: this.phone_number,
                        username: this.username,
                        password: this.password
                    };
                    this.addUser(payload);
                    this.showModal = false;
                }
                e.preventDefault();
                return false;
            },
            ...mapActions("User", ["addUser"])
        },
    };
</script>
