<template>
  <div id="Home" >
    <div class="title">
      食堂流量分析
      <!--<div class="time">
        数据更新时间:{{MapList.date}}
      </div>-->
    </div>
    <div  class="box12" id="myChart1" ></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      MapList: {
        'resFlow': [],
        'date': []
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$http.get('/api/hive2/list').then(function (res) {
      this.MapList = res.data
      this.drawLine1()
    }, function () {
      console.log('请求失败处理')
    })
  },
  methods: {
    drawLine1 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart1'))
      let dateList = []
      for (var i = 5; i < 8; i++) {
        for (var j = 1; j < 29; j++) {
          for (var k = 0; k < 24; k++) {
            dateList[(i - 5) * 28 * 24 + (j - 1) * 24 + k] = '2014-' + this.fix(i) + '-' + this.fix(j) + ' ' + this.fix(k) + ':00:00'
            // console.log(dateList[(i - 5) * 28 * 24 + (j - 1) * 24 + k])
          }
        }
      }
      let valuemap = {}
      this.MapList.resFlow.filter(x => x.hour !== undefined).forEach(line => {
        valuemap[line.year + '-' + this.fix(line.month) + '-' + this.fix(line.day) + ' ' + this.fix(line.hour) + ':00:00'] = line.count
        // console.log(valuemap[new Date(line.year + '-' + this.fix(line.month) + '-' + this.fix(line.day) + ' ' + this.fix(line.hour) + ':00:00').valueOf()])
      })
      let data = dateList.map(line => {
        if (valuemap[line] !== undefined) {
          // console.log(line + '---' + valuemap[line])
          return [line, valuemap[line]]
        } else {
          // console.log(line + '---' + 0)
          return [line, 0]
        }
        // eslint-disable-next-line no-unreachable
      })
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        title: {
          left: 'center',
          text: 'Large Ara Chart'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'time',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '0%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 20
          },
          {
            start: 0,
            end: 20
          }
        ],
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data: data
          }
        ]
      })
    },
    fix (value) {
      if (value < 10) { return '0' + value.toString() } else { return value.toString() }
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

.title{
  border-radius: 5px;
  font-size: 30px;
  color: dimgray;
  background: rgba(175, 172, 172, 0.7) ;
  text-align: center;
  margin: 20px 100px 10px;
}
#myChart1{
  margin:0px auto;
  width: 1600px;
  height: 800px;
}

</style>
