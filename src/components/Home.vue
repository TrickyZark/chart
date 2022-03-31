<template>
  <div id="Home">

    <div class="mapListTitle">地图列表</div>

    <div v-for="(item,index) in MapList" :key="index" class="imgFrame">
      <img :src="'/api/Img/getImgAbridge/'+item.relativepath" height="200px" width="240px" class="img" @click="jumpPage(item.relativepath)"></div>
    <!-- <router-view/>-->
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      MapList: []
    }
  },
  mounted () {
    this.$http.get('/api/PublicMap/getAll').then(function (res) {
      this.MapList = res.data.data
    }, function () {
      console.log('请求失败处理')
    })
  },
  methods: {
    jumpPage (page) {
      const hrefs =
      this.$router.resolve({
        path: '/ImgPage/' + page
      })
      window.open(hrefs.href)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.imgFrame{
  border-width:1px;
  border-style:solid;
  border-color: #687471;
  width: 240px;
  height: 200px;
  float: left;
  margin-left: 50px;
}

.img{
  cursor: pointer;
}
.mapListTitle{
  margin-bottom: 30px;

  text-align: center;
}
</style>
