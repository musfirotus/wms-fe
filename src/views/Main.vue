<template>
  <div class="flex w-full">
    <div class="w-1/4 h-screen">
      <Sidebar id="nav" />
    </div>
    <div class="w-3/4 h-screen border border-black">
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
