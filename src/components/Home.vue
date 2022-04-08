<template>
  <div id="Home">
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
