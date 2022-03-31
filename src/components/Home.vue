<template>
  <div id="Home">

    <div class="title">
      一卡通数据分析
    </div>

    <div class="header">
    <div  class="box12" id="myChart1" ></div>
    <div  class="box12" id="myChart2" ></div>
    </div>
    <div class="footer">
    <div  class="box12" id="myChart3" ></div>
    <div  class="box12" id="myChart4"></div>
    <div  class="box12" id="myChart5" ></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
    this.drawLine4()
    this.drawLine5()
  },
  methods: {
    drawLine1 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      myChart.setOption({
        title: { text: '各类支出占比' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawLine2 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart.setOption({
        title: { text: '日人均消费额' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawLine3 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart3'))
      // 绘制图表
      myChart.setOption({
        title: { text: '食堂流量分析' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawLine4 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart4'))
      // 绘制图表
      myChart.setOption({
        title: { text: '澡堂流量分析' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawLine5 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart5'))
      // 绘制图表
      myChart.setOption({
        title: { text: '商铺流量分析' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}

</script>

<style>

.box12{
  border:1px solid black;
  border-radius: 10px;
  box-shadow:10px 10px 5px #888888;
  padding: 10px;
}
.header{
   text-align: center;
}
.footer{
  text-align: center;
}

.title{
  border-radius: 5px;
  font-size: 30px;
  color: dimgray;
  background: rgba(175, 172, 172, 0.7) ;
  text-align: center;
  margin: 20px 100px 10px;
}
#myChart1{
  margin:10px;
  width: 620px;
  height: 350px;
 display: inline-block;
}

#myChart2{
  margin:10px;
  width: 620px;
  height: 350px;
  display: inline-block;
}

#myChart3{
  margin:10px;
  width: 400px;
  height: 350px;
  display: inline-block;
}

#myChart4{
  margin:10px;
  width: 400px;
  height: 350px;
  display: inline-block;
}
#myChart5{
  margin:10px;
  width: 400px;
  height: 350px;
  display: inline-block;
}
</style>
