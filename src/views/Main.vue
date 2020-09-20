<template>
  <div class="flex">
    <div class="w-1/5 min-h-screen bg-gray-800">
      <Sidebar id="nav" />
    </div>
    <div class="w-4/5 min-h-screen bg-gray-900">
        <router-view />
    </div>
  </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar/SideMain.vue'
    export default {
        name: 'Main',
        components: {
            Sidebar
        }
    }
</script>
