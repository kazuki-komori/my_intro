<template>
  <section class="space-y-5">
    <h2 class="text-xl">OSS</h2>
    <div class="space-y-3">
      <p
        v-for="(oss, idx_oss) in ossArr"
        :key="idx_oss"
      >
        <a
          :href="oss.link"
          target="_blank"
          class="text-vue-green tracking-wider"
        >
          {{oss.title}}
        </a>
      </p>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import json from "@/assets/data/oss.json"

interface IOss {
  title: string,
  link: string
}

export default defineComponent({
  name: "SecOss",
  setup() {
    const ossArr: IOss[] = json.oss
    return {ossArr}
  }
})
</script>