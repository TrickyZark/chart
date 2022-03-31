<template>
  <div>
    <div class="con">
      <div class="tip">输入地图名称：</div>
      <input class="inputS" type="text" v-model="name" placeholder="请在此输入地图名称">

      <div class="tip">输入地图说明：</div>
      <input class="inputS" type="text" v-model="dsc" placeholder="请在此输入地图说明">

      <div class="tip">上传地图：</div>
      <input class="file" type="file" id="Map" title="请选择文件" value="请选择文件">

      <div class="tip">上传封面（选填）：</div>
      <input class="file" type="file" id="MapCover" title="请选择文件" value="请选择文件">

      <div class="tip">输入备注信息（选填）：</div>

      <input class="inputS" type="text" v-model="note" placeholder="请在此输入备注信息">
      <button class="submit" @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// var formData = new FormData() // js中声明FormData对象的方法

export default {
  data () {
    return {
      name: '',
      dsc: '',
      note: ''
      // file: ''
    }
  },
  methods: {
    submit: function () {
      var formData = new window.FormData() // vue 中使用此方法创建FromData对象 window.FormData(),否则会报 'FormData isn't definded'
      formData.append('file', document.querySelector('input[id=Map]').files[0]) // 'file' 这个名字要和后台获取文件的名字一样;
      if (document.querySelector('input[id=MapCover]').files[0] !== undefined) {
        formData.append('fileCover', document.querySelector('input[id=MapCover]').files[0])
      }
      formData.append('name', this.name)
      formData.append('dsc', this.dsc)
      formData.append('note', this.note)
      // 'userfile'是formData这个对象的键名
      axios({
        url: '/api/PublicMap/uploadwork',
        data: formData,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
          // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8080'
          // 这里是为了解决跨域问题，但是博主并没有用这种方式解决。后面会给出解决方案
        }
      }).then((res) => {
        console.log(res.data)
      }) // 发送请求
    }
  }
}
</script>

<style scoped>

</style>
