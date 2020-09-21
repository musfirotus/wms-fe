<template>
    <main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-6 mx-auto">
            <h2 class="my-6 text-2xl font-semibold text-gray-200">Products Outcome List</h2>

            <div class="flex w-full">
                <modal-out />
            </div>

            <!-- With actions -->
            <div class="w-full overflow-x-auto rounded-lg shadow-xs">
                <table class="w-full">
                    <tr
                        class="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800"
                    >
                        <th class="px-4 py-3 text-center">Product Name</th>
                        <th class="px-4 py-3 text-center">Supplier</th>
                        <th class="px-4 py-3 text-center">Date</th>
                        <th class="px-4 py-3 text-center">Total</th>
                        <th class="px-4 py-3 text-center">Delete</th>
                        <!-- <th class="px-4 py-3">Actions</th> -->
                    </tr>
                    <tr v-for="(outcome, i) in outcomes.data" :key="i" class="text-gray-400 text-sm bg-gray-800">
                        <td class="items-center font-semibold">{{ outcome.Product['name'] }}</td>
                        <td class="items-center font-semibold">{{ outcome.Product['supplier']['full_name'] }}</td>
                        <td class="text-sm">{{ outcome.date }}</td>
                        <td class="text-sm">{{ outcome.total }}</td>
                        <td class="px-4 py-3 justify-center">
                            <button
                                class="px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete"
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
                                ></path>
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
import { mapActions, mapState } from 'vuex'
import ModalOut from '@/components/Modals/Add/ModalOut.vue'

export default {
  name: 'ViewOut',
  components: {
      ModalOut
  },
  created() {
      this.getOutcomes()
  },
  computed: {
      ...mapState("Out", ['outcomes'])
  },
  methods: {
      ...mapActions("Out", ['getOutcomes'])
  }
}
</script>
