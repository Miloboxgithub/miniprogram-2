const app = getApp();
Page({
  onLoad(op) {
    app.fetchToken()
    setTimeout(() => {
      this.getstatus()
    }, 1000);
    const genxin=()=>{
      this.getstatus
    }
    setInterval(genxin,5000)
   
  },
  data: {
    deviceId: 1234567,
    fanStatus: '关闭',
    Time1: '',
    Time2: '',
    Time3: '',
    Time4: '',
    Time5: '',
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
    //console.log(this.checked1,detail)
    if(detail){
      this.poststatus(1)
    }
    else{
      this.poststatus(0)
    }
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
    const entityType = 'DEVICE';
    const ID='1ecdf330-2890-11ef-add2-fd19fcae8edb'
    wx.request({
      url: `https://www.aiotcomm.com.cn:18888/api/plugins/telemetry/${entityType}/${ID}/values/timeseries?keys=device_flag&limit=20&startTs=1718208000000&endTs=1781285384219`,
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res)
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

  },
  poststatus: function (op) {
    // 控制泵的函数
    function pump1(i) {
      const deviceApiUrl = "https://www.aiotcomm.com.cn:18888/api/plugins/rpc/oneway/63720cd0-548f-11ef-add2-fd19fcae8edb";
      const open = { "persistent": "true", "method": "methodThingskit", "params": { "pump1": 1 } };
      const close = { "persistent": "true", "method": "methodThingskit", "params": { "pump1": 0 } };
      let data;
      const token = wx.getStorageSync('token');
      if (i === 1) {
        data = JSON.stringify(open); // 使用 JSON.stringify() 来替代 json.dumps()
      } else if (i === 0) {
        data = JSON.stringify(close);
      }
    
      
        const headers = {
          // "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": `Bearer ${token}`
        };
    
        wx.request({
          url: deviceApiUrl,
          method: 'POST',
          data: data,
          header: headers,
          success: (res) => {
            if (res.statusCode === 200) {
              console.log("设备命令已成功发送");
            } else {
              console.error(`请求失败: ${res.statusCode}`);
            }
            console.log(res.data);
          },
          fail: (err) => {
            console.error("Error controlling pump:", err);
          }
        });
     
    }

// 调用 pump1 函数来控制泵
pump1(op); // 用 1 来开启泵，用 0 来关闭泵
  }
});