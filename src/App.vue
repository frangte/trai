<template>
  <div id="app" class="flex h-screen w-full font-mono">
    <custom-nav />
    {{ home }}
    <div class="w-full overflow-x-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    CustomNav: Nav
  },
  data() {
    return {
      home: process.env
    }
  },
  created() {
    
  }
}
</script>
