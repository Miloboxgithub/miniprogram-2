// pages/data/data.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CO2_data: '0',
    soild_hum: '0',
    soild_temp: '0',
    lux_data: '0',
    env_hum: '0',
    env_temp: '0',


  },

  onLoad(options) {
    
    app.fetchToken()


    setTimeout(() => {
      this.getDatas()
    }, 1000);
    const genxin = () => {
      this.getDatas()
    }
    //setInterval(genxin, 5000);



  },

  navigate: function (e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url });
  },
  getDatas: function (cd) {
    wx.showLoading({
      title: '数据加载中...',
    })
    let that = this
    const entityType = 'DEVICE';
    //const entityId = '71771400-1106-11ef-add2-fd19fcae8edb';
    const entityId = 'e917e400-43ea-11ef-add2-fd19fcae8edb';
    let token = wx.getStorageSync('token');
    wx.request({
      url: `https://www.aiotcomm.com.cn:18888/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries`,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      },
      success(res) {
        console.log('成功2',res.data);
        that.setData({
          soild_hum: res.data.soild_hum_data[0].value,
          soild_temp: res.data.soild_temp_data[0].value,
          env_temp: res.data.env_temp_data[0].value,
          env_hum: res.data.env_hum_data[0].value,
          lux_data: res.data.lux_data[0].value,

        })
      },
      fail(err) {
        console.error('失败', err);
      }
    });
    
    const ID2='d17507c0-43ee-11ef-add2-fd19fcae8edb'
    wx.request({
      url: `https://www.aiotcomm.com.cn:18888/api/plugins/telemetry/${entityType}/${ID2}/values/timeseries?limit=7`,

      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      },
      success(res) {
        console.log('hh',res.data)
        // let a = +res.data.CO2_data.value
        // let b = a.toFixed(2)
        // //console.log(a,b)
        // that.setData({
        //   CO2_data: b,

        // })
        that.setData({
          //CO2_data:res.data.CO2[0].value,

        })
        wx.hideLoading()
      },
      fail(err) {

      }
    });
    cd&&cd()
  },
  onPullDownRefresh() {

    this.getDatas(() => {
      wx.stopPullDownRefresh()
    })

  },
})