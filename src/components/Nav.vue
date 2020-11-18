<template>
  <div class="fill-current flex flex-col w-12 bg-gray-300 p-1">

    <nav-btn class="my-1" @click="$router.push('/edit')" :active="$route.path === '/edit'">
      <i-edit/>
    </nav-btn>

    <nav-btn class="my-1" @click="$router.push('/folders')" :active="$route.path === '/folders'">
      <i-folders/>
    </nav-btn>

    <nav-btn class="my-1" @click="$router.push('/search')" :active="$route.path === '/search'">
      <i-search/>
    </nav-btn>

    <nav-btn class="mt-auto">
      <i-archive/>
    </nav-btn>
  </div>
</template>

<script>
import ISearch from "@/components/kit/icons/ISearch";
import IFolders from "@/components/kit/icons/IFolders";
import IEdit from "@/components/kit/icons/IEdit";
import IArchive from "@/components/kit/icons/IArchive";
import NavBtn from "@/components/kit/NavBtn";

export default {
  name: "Nav",
  components: {
    IArchive,
    IFolders,
    ISearch,
    IEdit,
    NavBtn
  },
}
</script>
