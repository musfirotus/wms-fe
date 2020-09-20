<template>
    <div>
        <button
            class="flex w-1/7 justify-left mr-2 mb-4 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            type="button"
            style="transition: all .15s ease"
            @click="toggleModal()"
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
            <span>New Product</span>
        </button>

        <div
            v-if="showModal"
            class="bg-gray-700 bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
            <!-- a -->
            <div class="mx-auto">
                <div class="w-full rounded-lg text-white max-w-xs mx-auto mt-8 bg-gray-900">
                    <form
                        class="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        @submit="kirimData"
                    >
                        <h1 class="font-bold mt-4 mb-8 text-xl">
                            Add Product
                        </h1>

                        <!-- Product Name -->
                        <div class="mb-4">
                            <label
                                class="text-left block text-base font-bold mb-2"
                                for="productname"
                                >Product Name</label
                            >
                            <input
                                class="shadow bg-gray-800 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="productname"
                                type="text"
                                v-model="data.productname"
                            />
                        </div>

                        <!-- Stock -->
                        <div class="mb-4">
                            <label
                                class="text-left block text-base font-bold mb-2"
                                for="stock"
                                >Stock</label
                            >
                            <input
                                class="shadow bg-gray-800 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="stock"
                                type="text"
                                v-model="data.productstock"
                            />
                        </div>

                        <!-- Price -->
                        <div class="mb-4">
                            <label
                                class="text-left block text-base font-bold mb-2"
                                for="price"
                                >Price</label
                            >
                            <input
                                class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                v-model="data.productprice"
                                type="text"
                            />
                        </div>

                        <!-- Photo -->
                        <div class="mb-4">
                            <label
                                class="text-left block text-base font-bold mb-2"
                                for="username"
                                >Photo</label
                            >
                            <input type="file" @change="previewFiles" />
                        </div>

                        <div class="flex items-center justify-between">
                            <button
                                class="bg-purple-500 hover:bg-purple-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                @click="kirimData"
                            >
                                Add
                            </button>
                            <!-- </router-link> -->
                        </div>
                        <div class="mt-4">
                            <button
                                class="text-purple-500 text-center font-bold"
                                style="transition: all .15s ease"
                                v-on:click="toggleModal()"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- b -->
        </div>
        <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
    </div>
</template>

<script>
    // import { mapState, mapActions, mapMutations } from "vuex";

    export default {
        name: "ModalAll",
        components: {},
        data() {
            return {
                showModal: false,
                data: {
                    productname: "",
                    productprice: 0,
                    productstock: 0,
                    productFoto: null,
                },
            };
        },
        computed: {
        },


        methods: {
            toggleModal() {
                this.showModal = !this.showModal;
            }
        }
    };
</script>
