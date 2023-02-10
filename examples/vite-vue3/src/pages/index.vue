<template>
  <img alt="Vue logo" src="./../assets/logo.png" />
  <UsePinia />
  <router-link>点击跳转至login</router-link>
  <router-link>点击跳转至vueUse页面a</router-link>
  <div>{{ a }}</div>
  <div>font{{ a }}behind</div>
  <!-- <div v-if="a > 10">show</div> -->
  <table>
    <tr>
      <td>1</td>
      <td>3</td>
      <td>4</td>
      <td>6</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UsePinia from '@/components/UsePinia.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    UsePinia,
  },
  setup() {
    const a = 1
    return {
      a,
    }
  },
})
</script>
