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
            <span>New In</span>
        </button>

        <div
            v-if="showModal"
            class="bg-gray-700 bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
            <!-- a -->
            <div class="mx-auto">
                <div
                    class="w-full rounded-lg max-w-xs mx-auto mt-8 bg-gray-900 text-gray-400"
                >
                    <form @submit="addForm" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 class="font-bold mt-4 mb-8 text-xl">
                            Add Product IN
                        </h1>

                        <!-- Product Name -->
                        <div class="mb-4">
                            <label
                                class="text-left block text-base font-bold mb-2"
                                for="productname"
                                >Product Name</label
                            >
                            <div class="relative">
                                <select
                                    class="shadow bg-gray-800 appearance-none w-full border py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500"
                                    id="grid-state"
                                    v-model="product_name"
                                    placeholder="Select Product"
                                >
                                    <option
                                        v-for="(product, i) in products.data"
                                        :key="i"
                                        :value="product.id"
                                        >{{ product.name }}</option
                                    >
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                >
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Total -->
                        <div class="mb-4">
                            <label
                                class="text-left block text-base font-bold mb-2"
                                for="total"
                                >Total</label
                            >
                            <input
                                class="shadow bg-gray-800 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="total"
                                v-model="total"
                                type="text"
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
            <!-- b -->
        </div>
        <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
    </div>
</template>

<script>
    import { mapActions, mapState } from "vuex";
    export default {
        name: "ModalIn",
        components: {},
        data() {
            return {
                showModal: false,
                total: "",
                product_name: ""
            };
        },
        created() {
            this.getProducts();
        },
        computed: {
            ...mapState("Product", ["products"]),
        },
        methods: {
            toggleModal() {
                this.showModal = !this.showModal;
            },
            addForm(e) {
                let error = [];
                if (this.product_name === "") error.push("Product name Required");
                if (this.total === "") error.push("total Required");
                if (error.length > 0) alert(error.join(",\r\n"));
                else {
                    const payload = {
                        product_id: this.product_name,
                        total: this.total,
                    };
                    this.addIn(payload);
                    this.showModal = false;
                }
                e.preventDefault();
                return false;
            },
            ...mapActions("Product", ["getProducts"]),
            ...mapActions("In", ["addIn"]),
        },
    };
</script>
