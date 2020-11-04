<template>
  <div class="grid grid-cols-1 grid-rows-6 h-full">
    <div class="row-span-1 grid grid-rows-3 grid-cols-4">
      <div class="col-span-2 col-start-2 row-span-1 row-start-3">
        <input class="bg-white w-full rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Search collection" type="text">
      </div>
    </div>

    <div class="row-span-5 grid grid-rows-3 grid-cols-4">
     {{collections}}
    </div>

  </div>
</template>

<script>
const ipcRenderer = window.require("electron").ipcRenderer;

export default {
  name: "Folders",
  data() {
    return {
      collections: null
    }
  },
  mounted() {
    ipcRenderer.on('statsWorkspace', (event, data) => {
      this.collections = data
    })
    ipcRenderer.send('statsWorkspace')
  },
}
</script>
