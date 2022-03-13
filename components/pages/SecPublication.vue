<template>
  <section class="space-y-4">
    <h2 class="text-xl">受賞歴</h2>
    <div
        v-for="publication in publications"
        :key="publication.id"
        class="tracking-wider"
    >
      <p class="mb-1">
        {{publication.title}}
        <span class="text-sm">({{publication.date}})</span>
      </p>
      <p class="text-sm">{{publication.detail}}</p>
      <p class="text-sm">{{publication.tech}}</p>
      <a class="inline-block tracking-wide my-1 text-vue-green" :href="publication.link">{{publication.link}}</a>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import json from "@/assets/data/publication.json"

interface IPublication {
  id:     number
  title:  string
  detail: string
  tech:   string
  date:   string
  link:   string
}

export default defineComponent({
  name: "SecPublication",
  setup() {
    const publications: IPublication[] = json.publicatios
    return {publications}
  }
})
</script>
