<template>
    <main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-6 mx-auto">
            <h2 class="my-6 text-2xl font-semibold text-gray-200">Products Outcome List</h2>

            <div class="flex w-full">
                <button class="flex justify-right w-1/7 mb-4 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    <span>New Outcome</span>
                </button>
            </div>

            <!-- With actions -->
            <div class="w-full overflow-x-auto rounded-lg shadow-xs">
                <table class="w-full">
                    <tr
                        class="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800"
                    >
                        <th class="px-4 py-3 text-center">Product Name</th>
                        <th class="px-4 py-3 text-center">Date</th>
                        <th class="px-4 py-3 text-center">Total</th>
                        <th class="px-4 py-3 text-center">Update</th>
                        <th class="px-4 py-3 text-center">Delete</th>
                        <!-- <th class="px-4 py-3">Actions</th> -->
                    </tr>
                    <tr class="text-gray-400 text-sm bg-gray-800">
                        <td class="items-center"><p class="font-semibold">Baju</p></td>
                        <td class="text-sm">22/09/2020</td>
                        <td class="text-sm">5</td>
                        <td class="px-4 py-3 justify-center">
                        <button
                            class="px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                            >
                            <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                ></path>
                            </svg>
                            </button>
                        </td>
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

export default {
  name: 'Out',
  components: {
  }
}
</script>
