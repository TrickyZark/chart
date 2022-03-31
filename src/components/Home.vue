<template>
  <div id="Home">

    <div  class="box12" id="myChart" :style="{width: '800px', height: '300px'}"></div>
    <div  class="box12" id="myChart2" :style="{width: '800px', height: '300px'}"></div>
    <div  class="box12" id="myChart3" :style="{width: '800px', height: '300px'}"></div>
    <div  class="box12" id="myChart4" :style="{width: '800px', height: '300px'}"></div>
    <div  class="box12" id="myChart5" :style="{width: '800px', height: '300px'}"></div>

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
    this.drawLine()
    this.drawLine2()
    this.drawLine3()
    this.drawLine4()
    this.drawLine5()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
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
  border:10px solid hsla(0, 0%, 100%,.5);
  background-clip:padding-box;
  outline: 1px white dashed;
  outline-offset:-10px;
  border-radius:4%;
  background:#795548;
// 思路如下：为元素设置圆角，外层设置轮廓outline。圆角与直角之间的空隙用阴影补齐，阴影的尺寸为圆角半径的一半
border-radius:10px;
  background: tan;
  outline:10px solid #655;
  box-shadow:0 0 0 5px #655;
}
</style>
