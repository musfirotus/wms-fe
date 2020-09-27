<template>
    <main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-6 mx-auto">
            <h2 class="my-6 text-2xl font-semibold text-gray-200">
                Products List
            </h2>

            <div class="flex w-full">
                <modal-product />
                <modal-in />
                <modal-out />
            </div>

            <!-- With actions -->
            <div class="w-full overflow-x-auto rounded-lg shadow-xs">
                <table class="w-full">
                    <tr
                        class="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800"
                    >
                        <th class="px-4 py-3 text-center">Product Name</th>
                        <!-- <th class="px-4 py-3 text-center">Picture</th> -->
                        <th class="px-4 py-3 text-center">Stock</th>
                        <th class="px-4 py-3 text-center">Price</th>
                        <th class="px-4 py-3 text-center">Supplier</th>
                        <th class="px-4 py-3 text-center">Status</th>
                        <th class="px-4 py-3 text-center">Update</th>
                        <th class="px-4 py-3 text-center">Delete</th>
                    </tr>
                    <tr
                        v-for="(product, i) in products.data"
                        :key="i"
                        class="text-gray-400 text-sm bg-gray-800"
                    >
                        <td class="items-center font-semibold">
                            {{ product.name }}
                        </td>
                        <!-- <td class="text-sm">
                            <img class="items-center w-56 m-4" :src="product.photo_url" :alt="product.photo_url">
                        </td> -->
                        <td class="text-sm">
                            {{ product.stock }}
                        </td>
                        <td class="text-sm">
                            {{ product.price }}
                        </td>
                        <td class="text-xs">
                            {{ product.supplier.full_name }}
                        </td>
                        <td class="px-4 py-3 text-xs">
                            <span
                                class="px-2 py-1 font-semibold leading-tight rounded-full bg-green-700 text-green-100"
                                >Out of Stock / Ready</span>
                        </td>
                        <td class="px-4 py-3">
                            <router-link
                                class="px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Edit"
                                :to="{ name: `DetProduct`, params: { id: product.id } }"
                            >
                                <svg
                                    class="w-5 mx-auto h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                    ></path>
                                </svg>
                            </router-link>
                        </td>
                        <td class="px-4 py-3">
                            <button
                                class="px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete"
                                @click="deleteProduct(product.id)"
                            >
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
    import { mapActions, mapState } from "vuex";
    import ModalProduct from '@/components/Modals/Add/ModalProduct.vue'
    import ModalIn from '@/components/Modals/Add/ModalIn.vue'
    import ModalOut from '@/components/Modals/Add/ModalOut.vue'

    export default {
        name: "Product",
        components: {
            ModalProduct,
            ModalIn,
            ModalOut
        },
        created() {
            this.getProducts();
        },
        computed: {
            ...mapState("Product", ["products"]),
        },
        methods: {
            deleteProduct(id) {
                const yesno = confirm("Are you sure delete data?");
                if(yesno) {
                    this.delProduct(id)
                }
            },
            ...mapActions("Product",["getProducts", "delProduct"]),
        },
    };
</script>
