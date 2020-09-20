<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-900">
        <div
            class="flex-1 h-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-800"
        >
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div
                    class="flex items-center justify-center p-6 sm:p-12 md:w-full"
                >
                    <form @submit.prevent="update" class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-200">
                            Detail 	&amp; Update Product
                        </h1>
                        <div class="ml-64 my-auto mb-4">
                            <img
                                class="w-full h-full border-4 border-white"
                                v-bind:src="photo_url"
                            />
                            <!-- <input class="mt-4" type="file" name="" ref="file" id="" @change="onSelect" /> -->
                        </div>
                        <div class="my-auto">
                            <div>
                                <label
                                    class="block text-sm text-gray-400"
                                    for="name"
                                >
                                    Name
                                </label>
                                <input
                                    class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                    id="name"
                                    type="text"
                                    v-model="name"
                                />
                            </div>

                            <div>
                                <label
                                    class="block mt-4 text-sm text-gray-400"
                                    for="stock"
                                >
                                    Price
                                </label>
                                <input
                                    class="block w-full p-2 rounded-lg text-center mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                    id="stock"
                                    type="text"
                                    v-model="price"
                                />
                            </div>

                            <div>
                                <label
                                    class="block mt-4 text-sm text-gray-400"
                                    for="stock"
                                >
                                    Stock
                                </label>
                                <input
                                    class="block w-full text-center p-2 rounded-lg mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
                                    id="stock"
                                    type="text"
                                    v-model="stock"
                                />
                            </div>

                            <div>
                                <label
                                    class="block mt-4 text-sm text-gray-400"
                                >
                                    Supplier
                                </label>
                                <p class="block w-full mt-1 text-sm p-2 rounded-lg border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input">
                                    {{detail.supplier.full_name}}
                                </p>
                            </div>

                            <hr class="my-6" />

                            <div class="mt-1 flex">
                                <button
                                    class="w-1/2 mx-2 block px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    type="submit"
                                >
                                    Update
                                </button>
                                <button
                                    @click="delData"
                                    type="button"
                                    class="w-1/2 block px-4 py-2 mt-4 mx-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
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
        name: "DetailContent",
        data() {
            return {
                id: 0,
                name: "",
                price: 0,
                photo_url: "",
                photo: null,
            };
        },
        created() {
            this.getById(this.$route.params.id).then(() => {
                this.name = this.detail.name;
                this.price = this.detail.price;
                this.stock = this.detail.stock;
                this.photo_url = this.detail.photo_url;
                this.id = this.detail.id;
                this.isLoading = false;
            });
        },
        computed: {
            ...mapState("Product", ["detail"]),
        },
        methods: {
            onSelect() {
                this.data.photo = this.$refs.file.files[0];
                console.log(this.data.photo);
            },
            update() {
                const payload = {
                    id: this.id,
                    data: {
                        name: this.name,
                        price: this.price,
                        stock: this.stock,
                    },
                };
                console.log(payload);
                this.updateProducts(payload);
            },
            delData() {
                this.$swal("Sure?", "Delete this product?", "question"
                ).then(() => this.deleteProducts(this.id));
            },
            ...mapActions("Product", ["updateProducts", "deleteProducts", "getById",
            ]),
        },
    };
</script>
