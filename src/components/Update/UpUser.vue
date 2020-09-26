<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-900">
        <div
            class="flex-1 h-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-800"
        >
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div
                    class="flex items-center justify-center p-6 sm:p-12 md:w-full"
                >
                    <form class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-200">
                            Detail User
                        </h1>
                        <div class="my-auto">
                            <div class="mb-4">
                                <label
                                    class="text-left text-white block text-base font-bold mb-2"
                                    for="full_name"
                                    >Full Name</label
                                >
                                <p class="block w-full mt-1 text-sm p-2 rounded-lg border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input">
                                    {{detail.full_name}}
                                </p>
                            </div>

                            <div class="mb-4">
                                <label
                                    class="text-left block text-white text-base font-bold mb-2"
                                    for="phone_number"
                                    >Phone Number</label
                                >
                                <p class="block w-full mt-1 text-sm p-2 rounded-lg border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input">
                                    {{detail.phone_number}}
                                </p>
                            </div>

                            <div class="mb-4">
                                <label
                                    class="text-left block text-white text-base font-bold mb-2"
                                    for="email"
                                    >Email</label
                                >
                                <p class="block w-full mt-1 text-sm p-2 rounded-lg border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input">
                                    {{detail.email}}
                                </p>
                            </div>

                            <div class="mb-4">
                                <label
                                    class="text-left block text-white text-base font-bold mb-2"
                                    for="username"
                                    >Username</label
                                >
                                <p class="block w-full mt-1 text-sm p-2 rounded-lg border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input">
                                    {{detail.username}}
                                </p>
                            </div>

                            <hr class="my-6" />

                            <div class="flex">
                                <button
                                    @click="delData"
                                    type="button"
                                    class="w-full block px-4 py-2 mx-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                >
                                    Delete
                                </button>
                            </div>
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
        name: "DetailUser",
        data() {
            return {
                id: 0,
                full_name: "",
                username: "",
                password: "",
                email: "",
                phone_number: "",
            };
        },
        created() {
            this.getById(this.$route.params.id).then(() => {
                this.full_name = this.detail.full_name;
                this.username = this.detail.username;
                this.password = this.detail.password;
                this.email = this.detail.email;
                this.phone_number = this.detail.phone_number;
                this.id = this.detail.id;
            });
        },
        computed: {
            ...mapState("User", ["detail"]),
        },
        methods: {
            delData() {
                const yesno = confirm(
                    "Are you sure you want to delete this data?"
                );
                if (yesno) {
                    this.deleteUsert(this.id);
                }
            },
            ...mapActions("User", ["deleteUser", "getById"]),
        },
    };
</script>
