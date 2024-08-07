//引入echarts文件
import * as echarts from '../../ec-canvas/echarts';
const myhanshu = require('../../utils/util.js')
function line_set(chart, xdata, tdata, hdata, ldata) {
  var option = {
    title: {
      text: '光照强度展示',
      left: 'center'
    },
    legend: {
      data: ['照度lux'],
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
      name: '',
      axisLabel: {
        rotate: 0
      },
      type: 'category',
      boundaryGap: false,
      data: xdata
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitNumber: 5,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      name: '照度lux',
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
                color: "rgb(167,208,80)", // 0% 处的颜色,顶部
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
    }
  },

  //初始化第一个图表
  init_chart: function (xdata, tdata, hdata, ldata) {
    this.oneComponent.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      line_set(chart, xdata, tdata, hdata, ldata)
      this.chart = chart;
      return chart;
    });
  },
  getOption: function () {
    
    let that=this
    const token = wx.getStorageSync('token');
    const entityType = 'DEVICE';
    const entityId = '71771400-1106-11ef-add2-fd19fcae8edb';
    wx.request({
      url: `https://www.aiotcomm.com.cn:18888/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries?keys=lux_data&limit=7&startTs=1718208000000&endTs=1781285384219`,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      },
      success(res) {
        //console.log("获取成功",res);
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
          ans[5-i]=res.data.lux_data[i].value
          date[5-i]=myhanshu.ft(res.data.lux_data[i].ts)
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

