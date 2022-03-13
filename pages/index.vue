<template>
  <div class="max-w-screen-md mx-auto space-y-20">
    <SecProfile/>
    <SecCareer/>
    <SecPublication/>
    <SecActivity/>
    <SecOss/>
  </div>
</template>
<script lang="ts">
import SecProfile from "@/components/pages/SecProfile.vue"
import SecCareer from "@/components/pages/SecCareer.vue"
import SecPublication from "@/components/pages/SecPublication.vue"
import SecActivity from "@/components/pages/SecActivity.vue"
import {defineComponent} from "@vue/runtime-core"
import SecOss from "@/components/pages/SecOss.vue"

export default defineComponent({
  components: {
    SecOss,
    SecActivity,
    SecPublication,
    SecCareer,
    SecProfile
  },
})
</script>