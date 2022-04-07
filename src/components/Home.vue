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
      MapList: {
        'avgList': [],
        'consumePer': [],
        'resFlow': [],
        'bathFlow': [],
        'shopFlow': [],
        'date': []
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$http.get('/api/hive2/list').then(function (res) {
      this.MapList = res.data
      this.drawLine1()
      this.drawLine2()
      this.drawLine3()
      this.drawLine4()
      this.drawLine5()
    }, function () {
      console.log('请求失败处理')
    })
  },
  methods: {
    drawLine1 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart1'))
      // eslint-disable-next-line no-unused-vars
      let sumofAll = 0
      this.MapList.consumePer.forEach(item => {
        sumofAll += item.sum
      })
      this.MapList.consumePer = this.MapList.consumePer.map(item => {
        return {value: (item.sum / sumofAll).toFixed(2), name: item.consumetype}
      })
      // 绘制图表
      myChart.setOption({
        title: {
          text: '各类消费占比',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: 'bottom'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: this.MapList.consumePer,
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
      let legendData = this.MapList.shopFlow.map(item => {
        return item.company
      })
      let seriesData = this.MapList.shopFlow.map(item => {
        return {value: item.count, name: item.company}
      })
      // 绘制图表
      myChart.setOption({
        title: {
          text: '商铺消费统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 0,
          top: 30,
          bottom: 20,
          data: legendData
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '35%',
            center: ['40%', '50%'],
            data: seriesData,
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
