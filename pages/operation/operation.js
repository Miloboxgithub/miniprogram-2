Page({
  onLoad(op) {
    this.getstatus()
  },
  data: {
    deviceId: 1234567,
    fanStatus: '关闭',
    Time1: '2024-05-27 11:11:48',
    Time2: '2024-05-27 11:11:48',
    Time3: '2024-05-27 11:11:48',
    Time4: '2024-05-27 11:11:48',
    Time5: '2024-05-27 11:11:48',
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false
  },
  onChange1({ detail }) {
    this.setData({
      checked1: detail
    })
  },
  onChange2({ detail }) {
    this.setData({
      checked2: detail
    })
  },
  onChange3({ detail }) {
    this.setData({
      checked3: detail
    })
  },
  onChange4({ detail }) {
    this.setData({
      checked4: detail
    })
  },
  onChange5({ detail }) {
    this.setData({
      checked5: detail
    })
  },
  getstatus: function () {
    let that = this;
    const token = wx.getStorageSync('token');
    wx.request({
      url: 'http://www.aiotcomm.com.cn:19527/api/plugins/telemetry/DEVICE/1ecdf330-2890-11ef-add2-fd19fcae8edb/values/timeseries?deviceProfileId=3e94a884-ece7-4604-9982-77d7729ff51e&organizationId=70d64505-6367-423e-83fc-44a9d25d9185&keys=device_flag&agg=NONE&limit=7&startTs=1718208000000&endTs=1722182399000&_t=1721285840325',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        //console.log('yes', that.getTime(res.data.device_flag[0].ts));
        let source = res.data.device_flag
        let datas = {}
        let tt = {}
        source.reverse().forEach((item) => {
          if (item.value) {
            let key = 'checked' + item.value
            let kk = 'Time' + item.value
            datas[key] = true
            tt[kk] = that.getTime(item.ts)
          }
          else {
            let key = 'checked' + parseInt(item.value) * -1
            let kk = 'Time' + parseInt(item.value) * -1
            datas[key] = false
            tt[kk] = that.getTime(item.ts)
          }

        })
        that.setData(datas)
        that.setData(tt)
      },
      fail: (res) => { console.log('no', res); },
      complete: () => { }
    });

  },
  getTime: function (value) {

    let date = new Date(value);
    let y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      h = date.getHours(),
      i = date.getMinutes(),
      s = date.getSeconds();
    if (m < 10) {
      m = '0' + m;
    }
    if (d < 10) {
      d = '0' + d;
    }
    if (h < 10) {
      h = '0' + h;
    }
    if (i < 10) {
      i = '0' + i;
    }
    if (s < 10) {
      s = '0' + s;
    }
    let t = y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    return t;

  }
});