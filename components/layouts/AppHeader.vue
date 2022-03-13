<template>
  <header class="max-w-screen-md mx-auto py-3 tracking-wide text-xl">
    <nav class="text-right space-x-5">
      <a
        class="duration-500 hover:opacity-90 opacity-60"
        href="https://github.com/kazuki-komori"
        target="_blank"
      >
        GitHub
      </a>
      <a
        class="duration-500 hover:opacity-90 opacity-60"
        href="https://twitter.com/D_kazuyan"
        target="_blank"
      >
        Twitter
      </a>
    </nav>
  </header>
</template>
<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
export default defineComponent({
  name: "AppHeader"
})
</script>