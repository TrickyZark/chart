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
      myChart.setOption(
        {
          title: {
            text: '各类支出占比',
            subtext: 'Fake Data',
            left: 'center'
          },
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 150],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
              ]
            }
          ]
        }
      )
    },
    drawLine2 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '日人均支出',
          subtext: 'Fake Data',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      })
    },
    drawLine3 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart3'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '食堂流量分析',
          subtext: 'Fake Data',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      })
    },
    drawLine4 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart4'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '澡堂流量分析',
          subtext: 'Fake Data',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      })
    },
    drawLine5 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart5'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '商铺流量分析',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
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
