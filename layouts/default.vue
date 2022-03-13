<template>
  <div class="space-y-20 text-gray-700 dark:bg-slate-900 dark:text-slate-300">
    <AppHeader/>
    <div class="py-16">
      <slot/>
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/layouts/AppHeader";
export default {
  components: {AppHeader}
}
</script>