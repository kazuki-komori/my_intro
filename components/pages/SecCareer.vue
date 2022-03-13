<template>
  <section class="space-y-6">
    <h2 class="text-xl">キャリア</h2>
    <div
        v-for="career in careers"
        :key="career.id"
        class="tracking-wide"
    >
      <p class="text-lg">
        {{career.company_name}}
        <span class="text-sm">({{career.date}})</span>
      </p>
      <p class="text-sm" v-html="blankReplacer(career.detail)"/>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import json from "@/assets/data/career.json"

interface ICareer {
  id: number,
  company_name: string,
  detail: string,
  date: string
}

export default defineComponent({
  name: "SecCareer",
  setup() {
    const careers: ICareer[] = json.careers

    const blankReplacer = (text: string) => {
      text = text.replace(/\\n/g, '<br>')
      return text
    }

    return {careers, blankReplacer}
  }
})
</script>