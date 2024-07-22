//引入echarts文件
import * as echarts from '../../ec-canvas/echarts';
const myhanshu = require('../../utils/util.js')
function line_set(chart,xdata,tdata,hdata,ldata) {
  var option = {
    title: {
      text: '二氧化碳浓度展示',
      left: 'center'
    },
    legend: {
      data: ['浓度'],
      top: 30,
      left: 'center',
      backgroundColor: 'pink',
      textStyle: {
        color: 'black'
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      name:'',
      axisLabel: { 
        rotate:0
     } ,
      type: 'category',
      boundaryGap: false,
      data: xdata
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitNumber:3,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      name: '浓度',
      type: 'line',
      smooth: true,
      data: hdata,
      areaStyle: {
        //覆盖区域的渐变色
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgb(146,208,80)", // 0% 处的颜色,顶部
              },
              {
                offset: 1,
                color: "#FFFFFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },]
  };
  chart.setOption(option);
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec: {
    },
  },

//初始化第一个图表
  init_chart: function (xdata, tdata,hdata,ldata) {        
    this.oneComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
            width: width,
            height: height,
            devicePixelRatio: dpr 
        });
        line_set(chart, xdata, tdata,hdata,ldata)
        this.chart = chart;
        return chart;
    });
},
getOption: function () {
  let that=this
  const token = wx.getStorageSync('token');
  wx.request({
    url: 'http://www.aiotcomm.com.cn:19527/api/plugins/telemetry/DEVICE/166f1ad0-2ca9-11ef-add2-fd19fcae8edb/values/timeseries?deviceProfileId=27b95d3a-0697-4714-ba9e-685c59cbb054&organizationId=70d64505-6367-423e-83fc-44a9d25d9185&keys=CO2_data&agg=NONE&limit=7&startTs=1717171200000&endTs=1725811199000&_t=1720187894693',
    method: 'GET',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    },
    success(res) {
      //console.log("获取成功",res.data);
      that.setData({      
        //将接口返回的数据data赋值给data
        data:res.data  
      })
      var i
      var Temperature=[1,2,3,4,5,6];
      var ans=[1,2,3,4,5,6];
      var Light=[1,2,3,4,5,6];
      var date=[1,2,3,4,5,6];
      for(i=0;i<=5;i++)
      {
        ans[5-i]=res.data.CO2_data[i].value
        date[5-i]=myhanshu.ft(res.data.CO2_data[i].ts)
      }
      that.init_chart(date,Temperature,ans,Light)
    },
    fail(err) {
      console.error('失败', err);
    }

  })
},
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.oneComponent = that.selectComponent('#myechart');
    that.getOption();
    that.setData({                    //每隔5s刷新一次
      timer: setInterval(function () {
        that.getOption();
    }, 15000)
    })
  }
})

