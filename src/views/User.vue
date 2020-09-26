<template>
    <main class="h-full pb-16 overflow-y-auto">
        <div class="container grid px-6 mx-auto">
            <h2 class="my-6 text-2xl font-semibold text-gray-200">
                Users List
            </h2>
            <div class="flex w-full">
                <modal-user />
            </div>
            <div class="w-full overflow-x-auto rounded-lg shadow-xs">
                <table class="w-full">
                    <tr
                        class="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800"
                    >
                        <th class="px-4 py-3 text-center">Full Name</th>
                        <th class="px-4 py-3 text-center">Username</th>
                        <th class="px-4 py-3 text-center">Email</th>
                        <th class="px-4 py-3 text-center">Phone Number</th>
                        <!-- <th class="px-4 py-3 text-center">Status</th> -->
                        <th class="px-4 py-3 text-center">Detail</th>
                        <!-- <th class="px-4 py-3 text-center">Update</th> -->
                        <th class="px-4 py-3 text-center">Delete</th>
                    </tr>
                    <tr
                        v-for="(user, i) in users.data"
                        :key="i"
                        class="text-gray-400 text-sm bg-gray-800"
                    >
                        <td class="px-4 py-3 font-semibold">
                            {{ user.full_name }}
                        </td>
                        <td class="px-4 py-3 text-sm">{{ user.username }}</td>
                        <td class="px-4 py-3 text-sm">{{ user.email }}</td>
                        <td class="px-4 py-3 text-sm">
                            {{ user.phone_number }}
                        </td>
                        <!-- <td class="px-4 py-3 text-xs">
                            <span
                                class="px-2 py-1 font-semibold leading-tight rounded-full bg-green-700 text-green-100"
                                >Active</span>
                        </td> -->
                        <td class="px-4 py-3 justify-center">
                            <button
                                class="px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Detail"
                            >
                                <svg
                                    class="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </td>
                        <td class="px-4 py-3 justify-center">
                            <button
                                class="px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete"
                                @click="delUser(user.id)"
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
    import { mapState, mapActions } from "vuex";
    import ModalUser from '@/components/Modals/Add/ModalUser.vue'
    export default {
        name: "User",
        components: {
            ModalUser
        },
        created() {
            this.getUser();
        },
        computed: {
            ...mapState("User", ["users"]),
        },
        methods: {
            ...mapActions("User", ["getUser", "deleteUser"]),
            delUser(id){
                const yesno = confirm("Are you sure you want to delete this data?")
                if(yesno){
                    this.deleteUser(id)
                }
            },
        }
    };
</script>
