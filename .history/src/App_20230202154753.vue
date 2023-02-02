<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getListAPI } from '@/api'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  async created () {
    const { data: res } = await getListAPI()
    console.log(res)
  }
}
</script>
<style lang="less">
</style>
