<template>
  <section class="space-y-12">
    <img
        class="w-32 h-32 mx-auto rounded-full object-cover"
        
        src="@/assets/image/profile.jpg"
        alt="kazuyan icon"
    >
    <div>
      <h1 class="text-4xl tracking-wider">小森 一輝</h1>
      <p class="text-lg tracking-wider">Kazuki Komori</p>
    </div>
    <div class="tracking-wider">
      <p>
        はじめまして！小森 一輝
        <span class="text-xs">(こもりかずき)</span>
        です。
      </p>
      <br>
      <p>スタートアップや新規事業のwebサービスの開発支援に取り組んでいます。</p>
      <br>
      <p>フロントエンドからバックエンド・インフラまでweb開発を中心に, kaggle などデータ分析にも興味をもって取り組んでいます。</p>
      <br>
      <p>Vue.js が好きで, 2022年 Vue.js JP のコアメンバーとして活動していました。</p>
      <br>
      <p>同志社大学・エンジニア団体 Do'er 創設者としてエンジニアの育成に興味を持っています。</p>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "SecProfile"
})
</script>