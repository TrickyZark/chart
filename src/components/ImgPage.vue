<template>
  <div id="ImgPage">
    <img :src="this.MapPath" width="100%">
  </div>
</template>

<script>

export default {
  name: 'ImgPage',
  data () {
    return {
      MapPath: ''
    }
  },
  mounted () {
    // console.log(this.$route.params.ImgId)
    this.MapPath = '/api/Img/getImg/' + this.$route.params.ImgId
  }
}

</script>

<style>

</style>
