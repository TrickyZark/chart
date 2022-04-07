<template>
  <div id="Home">

    <div class="title">
      一卡通数据分析
      <div class="time">
        数据更新时间:{{MapList.date}}
      </div>
    </div>

    <div class="header">
    <div  class="box12" id="myChart1" ></div>
    <div  class="box12" id="myChart2" ></div>
      <div  class="box12" id="myChart5" ></div>
    </div>
    <div class="footer">
    <div  class="box12" id="myChart3" ></div>
    <div  class="box12" id="myChart4"></div>

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
      this.MapList.consumePer = this.MapList.consumePer.map(item => {
        return {value: item.sum / 100, name: item.consumetype}
      })
      // 绘制图表
      myChart.setOption({
        title: {
          text: '各类消费占比',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
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
      let dayList = this.MapList.avgList.filter(line => line.sex === 1).map(line => {
        return '03-0' + line.day
      })
      let manList = this.MapList.avgList.filter(line => line.sex === 0).map(line => {
        return (line.avg / 100).toFixed(2)
      })
      let womanList = this.MapList.avgList.filter(line => line.sex === 1).map(line => {
        return (line.avg / 100).toFixed(2)
      })
      // 绘制图表
      myChart.setOption({
        title: {
          text: '日均消费'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['男生', '女生']
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: dayList
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '男生',
            type: 'bar',
            data: manList
          },
          {
            name: '女生',
            type: 'bar',
            data: womanList
            /* markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            } */
          }
        ]
      })
    },
    fix (value) {
      if (value < 10) { return '0' + value.toString() } else { return value.toString() }
    },
    drawLine3 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart3'))
      let dateList = []
      for (var i = 6; i < 21; i++) {
        for (var j = 0; j < 60; j++) {
          dateList[(i - 6) * 60 + j] = this.fix(i) + ':' + this.fix(j)
          //   console.log(dateList[(i - 7) * 60 + j])
        }
      }
      let valuemap = {}
      this.MapList.resFlow.forEach(line => {
        valuemap[this.fix(line.hour) + ':' + this.fix(line.minute)] = line.count
        // console.log(this.fix(line.hour) + ':' + this.fix(line.minute))
      })
      let valueList = dateList.map(line => {
        if (valuemap[line] !== undefined) { return valuemap[line] } else { return 0 }
      })
      // 绘制图表
      myChart.setOption({
        visualMap:
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          },
        title:
          {
            left: 'center',
            text: '食堂流量分析'
          },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          data: dateList
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: valueList
          }
        ]
      })
    },
    drawLine4 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart4'))
      let dateList = []
      for (var i = 8; i < 22; i++) {
        for (var j = 0; j < 60; j++) {
          dateList[(i - 8) * 60 + j] = this.fix(i) + ':' + this.fix(j)
          //   console.log(dateList[(i - 7) * 60 + j])
        }
      }
      let valuemap = {}
      this.MapList.bathFlow.forEach(line => {
        valuemap[this.fix(line.hour) + ':' + this.fix(line.minute)] = line.count
        // console.log(this.fix(line.hour) + ':' + this.fix(line.minute))
      })
      let valueList = dateList.map(line => {
        if (valuemap[line] !== undefined) { return valuemap[line] } else { return 0 }
      })
      // 绘制图表
      myChart.setOption({
        visualMap:
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          },
        title:
          {
            left: 'center',
            text: '澡堂流量分析'
          },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          data: dateList
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: valueList
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
        toolbox: {
          show: true,
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
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
  width: 300px;
  height: 350px;
 display: inline-block;
}

#myChart2{
  margin:10px;
  width: 600px;
  height: 350px;
  display: inline-block;
}

#myChart3{
  margin:10px;
  width: 730px;
  height: 350px;
  display: inline-block;
}

#myChart4{
  margin:10px;
  width: 730px;
  height: 350px;
  display: inline-block;
}
#myChart5{
  margin:10px;
  width: 500px;
  height: 350px;
  display: inline-block;
}
.time{
  text-align: right;
  font-size: 10px;
}
</style>
