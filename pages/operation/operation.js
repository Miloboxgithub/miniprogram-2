const app = getApp();

Page({
  onLoad(op) {
    
    var pageData = {}
for (var i = 1; i < 3; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i);
}

    app.fetchToken()
    // setTimeout(() => {
    //   this.getstatus()
    // }, 1000);
    // const genxin=()=>{
    //   this.getstatus
    // }
    // setInterval(genxin,5000)
    //this.getstatus()
  },
  data: {
    checked0:false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,
    checked14: false,
    checked15: false,
    checked16: false,
    slider1value: 0,
    slider2value: 0
  },
  slider1change: function(e) {
    console.log(`slider1发生change事件，携带值为`, e.detail.value);
    
    this.poststatus1(e.detail.value,'lamb2')
  },
  slider2change: function(e) {
    console.log(`slider2发生change事件，携带值为`, e.detail.value);
    
    this.poststatus1(e.detail.value,'lamb4')
  },
  onChange0({ detail }) {
    this.setData({
      checked0: detail
    })
    //console.log(this.checked1,detail)
    if(detail){
      this.poststatus0(1,'anniu')
    }
    else{
      this.poststatus0(0,'anniu')
    }
  },
  onChange1({ detail }) {
    this.setData({
      checked1: detail
    })
    //console.log(this.checked1,detail)
    if(detail){
      this.poststatus(1,'pump1')
    }
    else{
      this.poststatus(0,'pump1')
    }
  },
  onChange2({ detail }) {
    this.setData({
      checked2: detail
    })
    if(detail){
      this.poststatus(1,'pump11')
    }
    else{
      this.poststatus(0,'pump11')
    }
  },
  onChange3({ detail }) {
    this.setData({
      checked3: detail
    })
    if(detail){
      this.poststatus(1,'wuhuapian1')
    }
    else{
      this.poststatus(0,'wuhuapian1')
    }
  },
  onChange4({ detail }) {
    this.setData({
      checked4: detail
    })
    if(detail){
      this.poststatus(1,'fan1')
    }
    else{
      this.poststatus(0,'fan1')
    }
  },
  onChange5({ detail }) {
    this.setData({
      checked5: detail
    })
    if(detail){
      this.poststatus1(1,'pump2')
    }
    else{
      this.poststatus1(0,'pump2')
    }
  },
  onChange6({ detail }) {
    this.setData({
      checked6: detail
    })
    if(detail){
      this.poststatus1(1,'pump22')
    }
    else{
      this.poststatus1(0,'pump22')
    }
  },
  onChange7({ detail }) {
    this.setData({
      checked7: detail
    })
    if(detail){
      this.poststatus1(1,'wuhuapian2')
    }
    else{
      this.poststatus1(0,'wuhuapian2')
    }
  },
  onChange8({ detail }) {
    this.setData({
      checked8: detail
    })
    if(detail){
      this.poststatus1(1,'fan2')
    }
    else{
      this.poststatus1(0,'fan2')
    }
  },
  onChange9({ detail }) {
    this.setData({
      checked9: detail
    })
    if(detail){
      this.poststatus(1,'pump3')
    }
    else{
      this.poststatus(0,'pump3')
    }
  },
  onChange10({ detail }) {
    this.setData({
      checked10: detail
    })
    if(detail){
      this.poststatus(1,'pump33')
    }
    else{
      this.poststatus(0,'pump33')
    }
  },
  onChange11({ detail }) {
    this.setData({
      checked11: detail
    })
    if(detail){
      this.poststatus(1,'wuhuapian3')
    }
    else{
      this.poststatus(0,'wuhuapian3')
    }
  },
  onChange12({ detail }) {
    this.setData({
      checked12: detail
    })
    if(detail){
      this.poststatus(1,'fan3')
    }
    else{
      this.poststatus(0,'fan3')
    }
  },
  onChange13({ detail }) {
    this.setData({
      checked13: detail
    })
    if(detail){
      this.poststatus1(1,'pump4')
    }
    else{
      this.poststatus1(0,'pump4')
    }
  },
  onChange14({ detail }) {
    this.setData({
      checked14: detail
    })
    if(detail){
      this.poststatus1(1,'pump44')
    }
    else{
      this.poststatus1(0,'pump44')
    }
  },
  onChange15({ detail }) {
    this.setData({
      checked15: detail
    })
    if(detail){
      this.poststatus1(1,'wuhuapian4')
    }
    else{
      this.poststatus1(0,'wuhuapian4')
    }
  },
  onChange16({ detail }) {
    this.setData({
      checked16: detail
    })
    if(detail){
      this.poststatus1(1,'fan4')
    }
    else{
      this.poststatus1(0,'fan4')
    }
  },
  
  // getstatus: function () {
  //   let that = this;
  //   const token = wx.getStorageSync('token');
  //   const entityType = 'DEVICE';
  //   const ID='1ecdf330-2890-11ef-add2-fd19fcae8edb'
  //   wx.request({
  //     url: `https://www.aiotcomm.com.cn:18888/api/plugins/telemetry/${entityType}/${ID}/values/timeseries?keys=device_flag&limit=20&startTs=1718208000000&endTs=1781285384219`,
  //     data: {},
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       'Authorization': `Bearer ${token}`
  //     },
  //     method: 'GET',
  //     dataType: 'json',
  //     responseType: 'text',
  //     success: (res) => {
  //       console.log(res)
  //       //console.log('yes', that.getTime(res.data.device_flag[0].ts));
  //       let source = res.data.device_flag
  //       let datas = {}
  //       let tt = {}
  //       source.reverse().forEach((item) => {
  //         if (item.value) {
  //           let key = 'checked' + item.value
  //           let kk = 'Time' + item.value
  //           datas[key] = true
  //           tt[kk] = that.getTime(item.ts)
  //         }
  //         else {
  //           let key = 'checked' + parseInt(item.value) * -1
  //           let kk = 'Time' + parseInt(item.value) * -1
  //           datas[key] = false
  //           tt[kk] = that.getTime(item.ts)
  //         }

  //       })
  //       that.setData(datas)
  //       that.setData(tt)
  //     },
  //     fail: (res) => { console.log('no', res); },
  //     complete: () => { }
  //   });

  // },
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
  poststatus: function (op,ed) {
    // 控制泵的函数
    function pump1(i,ed) {
      const deviceApiUrl = "https://www.aiotcomm.com.cn:18888/api/plugins/rpc/oneway/63720cd0-548f-11ef-add2-fd19fcae8edb";
      const open = { "persistent": "true", "method": "methodThingskit", "params": { [ed]: 1 } };
      const close = { "persistent": "true", "method": "methodThingskit", "params": { [ed]: 0 } };
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
pump1(op,ed); // 用 1 来开启泵，用 0 来关闭泵
  },
  poststatus1: function (op,ed) {
    // 控制泵的函数
    //console.log(op)
    function pump1(i,ed) {
      const deviceApiUrl = "https://www.aiotcomm.com.cn:18888/api/plugins/rpc/oneway/a5ac4170-5493-11ef-add2-fd19fcae8edb";
      const open = { "persistent": "true", "method": "methodThingskit", "params": { [ed]:  i} };
      const close = { "persistent": "true", "method": "methodThingskit", "params": { [ed]: i } };
      let data;
      const token = wx.getStorageSync('token');
      if (i > 0) {
        data = JSON.stringify(open); // 使用 JSON.stringify() 来替代 json.dumps()
        //console.log('yes')
      } else{
        data = JSON.stringify(close);
//console.log('no')
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
pump1(Number(op),ed); // 用 1 来开启泵，用 0 来关闭泵
  },
  poststatus0: function (op,ed) {
    // 控制泵的函数
    function pump1(i,ed) {
      const deviceApiUrl = "https://www.aiotcomm.com.cn:18888/api/plugins/rpc/oneway/2cdae7b0-54a7-11ef-add2-fd19fcae8edb";
      const open = { "persistent": "true", "method": "methodThingskit", "params": { [ed]: 1 } };
      const close = { "persistent": "true", "method": "methodThingskit", "params": { [ed]: 0 } };
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
pump1(op,ed); // 用 1 来开启泵，用 0 来关闭泵
  },
  getstatus: function (op,ed) {
    // 控制泵的函数
    console.log(123)
    function pump1(i,ed) {
      const deviceApiUrl = "https://www.aiotcomm.com.cn:18888/api/plugins/rpc/oneway/63720cd0-548f-11ef-add2-fd19fcae8edb";
      const open = { "persistent": "true", "method": "methodThingskit", "params": { [ed]: 1 } };
      const close = { "persistent": "true", "method": "methodThingskit", "params": { [ed]: 0 } };
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
          method: 'GET',
          data: data,
          header: headers,
          success: (res) => {
            if (res.statusCode === 200) {
              console.log("设备命令已成功发送321");
            } else {
              console.error(`请求失败312: ${res.statusCode}`);
            }
            console.log(res.data);
          },
          fail: (err) => {
            console.error("Error controlling pump:321", err);
          }
        });
     
    }

// 调用 pump1 函数来控制泵
pump1(op,ed); // 用 1 来开启泵，用 0 来关闭泵
  }
});