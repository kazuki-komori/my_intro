<template>
  <section class="space-y-6">
    <h2 class="text-xl">所属</h2>
    <div class="space-y-3">
      <p
          v-for="(act, idx_act) in activities"
          :key="idx_act"
      >
        {{act.title}} - {{act.role}}
      </p>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "@vue/runtime-core"
import json from "@/assets/data/activity.json"

interface IActivity {
  title: string,
  role: string
}

export default defineComponent({
  name: "SecActivity",
  setup() {
    const activities: IActivity[] = json.activities
    return {activities}
  }
})
</script>