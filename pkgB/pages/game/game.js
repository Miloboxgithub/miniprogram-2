const app = getApp();
Page({
  data: {
      posX: 20, // 初始位置
      posY: 20, // 初始位置
      posX1: 110, // 初始位置
      posY1: 20, // 初始位置
      posX2: 200, // 初始位置
      posY2: 20, // 初始位置
      posX3: 290, // 初始位置
      posY3: 20, // 初始位置
      copyVisible: false, // 复制件可见性
      copyVisible1: false,
      copyVisible2: false,
      copyVisible3: false,
      copyPosX: 0, // 复制件初始位置
      copyPosY: 0, // 复制件初始位置
      copyPosX1: 0, // 复制件初始位置
      copyPosY1: 0, // 复制件初始位置
      copyPosX2: 0, // 复制件初始位置
      copyPosY2: 0, // 复制件初始位置
      copyPosX3: 0, // 复制件初始位置
      copyPosY3: 0, // 复制件初始位置
      touch: false, // 触摸标记
      chaX: 0, // 转换值X
      chaY: 0, // 转换值Y
      chaX1: 0, // 转换值X
      chaY1: 0, // 转换值Y
      chaX2: 0, // 转换值X
      chaY2: 0, // 转换值Y
      chaX3: 0, // 转换值X
      chaY3: 0, // 转换值Y
      boxClass: '',
      boxClass1: '',
      boxClass2:'',
      hew:100,
      heh:100,
      hew1:100,
      heh1:100,
      hew2:100,
      heh2:100,
      hew3:100,
      heh3:100,
      san:false,
      san1:false,
      san2:false,
      san3:false,
      show: false,
      show1: false,
      show2: false,
      show3: false,
    actions: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
        subname: '描述信息',
        openType: 'share',
      },
    ],
    actions1: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
        subname: '描述信息',
        openType: 'share',
      },
    ],
    actions2: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
        subname: '描述信息',
        openType: 'share',
      },
    ],
    actions3: [
      {
        name: '选项',
      },
      {
        name: '选项',
      },
      {
        name: '选项',
        subname: '描述信息',
        openType: 'share',
      },
    ],
  },
onLoad(){
  app.fetchToken()
},
onClose() {
  this.setData({ show: false,
    show1: false,
    show2: false,
    show3: false });
  console.log(123)
},

onSelect(event) {
  console.log(event.detail);
},
showch:function () {
  this.setData({
    show:true
  })
},
showch1:function () {
  this.setData({
    show1:true
  })
},
showch2:function () {
  this.setData({
    show2:true
  })
},
showch3:function () {
  this.setData({
    show3:true
  })
},
  // 开始触摸
  touchStart: function (e) {
      console.log("== touchStart =="); // 拖动开始
      // e.touches[0] 内容就是触摸点的坐标值
      var tranX = e.touches[0].pageX - this.data.posX;
      var tranY = e.touches[0].pageY - this.data.posY;
      console.log("start tranX: " + tranX);
      console.log("start tranY: " + tranY);
      
      // 创建一个副本
      this.setData({
          copyVisible: true,
          copyPosX: this.data.posX,
          copyPosY: this.data.posY,
          touch: true,
          chaX: tranX,
          chaY: tranY,
          hew:120,
          heh:120
      });
  },
  touchStart1: function (e) {
    console.log("== touchStart1 =="); // 拖动开始
    // e.touches[0] 内容就是触摸点的坐标值
    var tranX = e.touches[0].pageX - this.data.posX1;
    var tranY = e.touches[0].pageY - this.data.posY1;
    console.log("start tranX: " + tranX);
    console.log("start tranY: " + tranY);
    
    // 创建一个副本
    this.setData({
        copyVisible1: true,
        copyPosX1: this.data.posX1,
        copyPosY1: this.data.posY1,
        touch: true,
        chaX1: tranX,
        chaY1: tranY,
        hew1:120,
          heh1:120
    });
},
touchStart2: function (e) {
  console.log("== touchStart2 =="); // 拖动开始
  // e.touches[0] 内容就是触摸点的坐标值
  var tranX = e.touches[0].pageX - this.data.posX2;
  var tranY = e.touches[0].pageY - this.data.posY2;
  console.log("start tranX: " + tranX);
  console.log("start tranY: " + tranY);
  
  // 创建一个副本
  this.setData({
      copyVisible2: true,
      copyPosX2: this.data.posX2,
      copyPosY2: this.data.posY2,
      touch: true,
      chaX2: tranX,
      chaY2: tranY,
      hew2:120,
          heh2:120
  });
},
touchStart3: function (e) {
  console.log("== touchStart3 =="); // 拖动开始
  // e.touches[0] 内容就是触摸点的坐标值
  var tranX = e.touches[0].pageX - this.data.posX3;
  var tranY = e.touches[0].pageY - this.data.posY3;
  console.log("start tranX: " + tranX);
  console.log("start tranY: " + tranY);
  
  // 创建一个副本
  this.setData({
      copyVisible3: true,
      copyPosX3: this.data.posX3,
      copyPosY3: this.data.posY3,
      touch: true,
      chaX3: tranX,
      chaY3: tranY,
      hew3:120,
          heh3:120
  });
},

  // 触摸移动
  touchMove: function (e) {
      if (!this.data.touch) return;
      // e.touches[0] 内容就是触摸点的坐标值
      var new_posX = e.touches[0].pageX - this.data.chaX;
      var new_posY = e.touches[0].pageY - this.data.chaY;
      // console.log(" move new_posX: " + new_posX);
      // console.log(" move new_posY: " + new_posY);
      this.setData({
          posX: new_posX,
          posY: new_posY
      });
  },
  touchMove1: function (e) {
    if (!this.data.touch) return;
    // e.touches[0] 内容就是触摸点的坐标值
    var new_posX = e.touches[0].pageX - this.data.chaX1;
    var new_posY = e.touches[0].pageY - this.data.chaY1;
    console.log(" move new_posX: " + new_posX);
    console.log(" move new_posY: " + new_posY);

    this.setData({
        posX1: new_posX,
        posY1: new_posY
    });
},
touchMove2: function (e) {
  if (!this.data.touch) return;
  // e.touches[0] 内容就是触摸点的坐标值
  var new_posX = e.touches[0].pageX - this.data.chaX2;
  var new_posY = e.touches[0].pageY - this.data.chaY2;
  console.log(" move new_posX: " + new_posX);
  console.log(" move new_posY: " + new_posY);

  this.setData({
      posX2: new_posX,
      posY2: new_posY
  });
},
touchMove3: function (e) {
  if (!this.data.touch) return;
  // e.touches[0] 内容就是触摸点的坐标值
  var new_posX = e.touches[0].pageX - this.data.chaX3;
  var new_posY = e.touches[0].pageY - this.data.chaY3;
  console.log(" move new_posX: " + new_posX);
  console.log(" move new_posY: " + new_posY);

  this.setData({
      posX3: new_posX,
      posY3: new_posY
  });
},

  // 触摸结束
  touchEnd: function (e) {
      console.log("== touchEnd ==")
      if (!this.data.touch) return;
      if(parseInt(this.data.posY)>100&&parseInt(this.data.posY)<250&&parseInt(this.data.posX)<140){
        this.setData({
          boxClass:'shake',
        })
      }
      if(parseInt(this.data.posY)>100&&parseInt(this.data.posY)<250&&parseInt(this.data.posX)>180&&parseInt(this.data.posX)<320){
        console.log('down')
        this.setData({
          boxClass1:'shake'
        })
      }
      if(parseInt(this.data.posY)>280&&parseInt(this.data.posY)<430&&parseInt(this.data.posX)>0&&parseInt(this.data.posX)<140){
        this.setData({
          boxClass2:'shake'
        })
      }
      if(parseInt(this.data.posY)>280&&parseInt(this.data.posY)<430&&parseInt(this.data.posX)>180&&parseInt(this.data.posX)<320){
        this.setData({
          boxClass3:'shake'
        })
      }
      this.setData({
        san:true,
          touch: false,
          chaX: 0,
          chaY: 0,
          
          heh:100,
          hew:100
      });
      setTimeout(() => {
        this.setData({
          san:false,
          posX:20,
          posY:20,
          boxClass: '',
          boxClass1:'',
          boxClass2:'',
          boxClass3:''
        });
      }, 550); 
  },
  touchEnd1: function (e) {
    console.log("== touchEnd1 ==")
    if (!this.data.touch) return;
    if(parseInt(this.data.posY1)>100&&parseInt(this.data.posY1)<250&&parseInt(this.data.posX1)<140){
      console.log('hhfdhg')
      this.setData({
        boxClass:'shake'
      })
    }
    if(parseInt(this.data.posY1)>100&&parseInt(this.data.posY1)<250&&parseInt(this.data.posX1)>180&&parseInt(this.data.posX1)<320){
      console.log('down')
      this.setData({
        boxClass1:'shake'
      })
    }
    if(parseInt(this.data.posY1)>280&&parseInt(this.data.posY1)<430&&parseInt(this.data.posX1)>0&&parseInt(this.data.posX1)<140){
      this.setData({
        boxClass2:'shake'
      })
    }
    if(parseInt(this.data.posY1)>280&&parseInt(this.data.posY1)<430&&parseInt(this.data.posX1)>180&&parseInt(this.data.posX1)<320){
      this.setData({
        boxClass3:'shake'
      })
    }
    this.setData({
        touch: false,
        chaX1: 0,
        chaY1: 0,
        san1:true,
        heh1:100,
          hew1:100
    });
    setTimeout(() => {
      this.setData({
        posX1:110,
        posY1:20,
        san1:false,
        boxClass: '',
        boxClass1:'',
        boxClass2:'',
        boxClass3:''
      });
    }, 550); 
},
touchEnd2: function (e) {
  console.log("== touchEnd2 ==")
  if (!this.data.touch) return;
  if(parseInt(this.data.posY2)>100&&parseInt(this.data.posY2)<250&&parseInt(this.data.posX2)<140){
    console.log('hhfdhg')
    this.setData({
      boxClass:'shake'
    })
  }
  if(parseInt(this.data.posY2)>100&&parseInt(this.data.posY2)<250&&parseInt(this.data.posX2)>180&&parseInt(this.data.posX2)<320){
    console.log('down')
    this.setData({
      boxClass1:'shake'
    })
  }
  if(parseInt(this.data.posY2)>280&&parseInt(this.data.posY2)<430&&parseInt(this.data.posX2)>0&&parseInt(this.data.posX2)<140){
    this.setData({
      boxClass2:'shake'
    })
  }
  if(parseInt(this.data.posY2)>280&&parseInt(this.data.posY2)<430&&parseInt(this.data.posX2)>180&&parseInt(this.data.posX2)<320){
    this.setData({
      boxClass3:'shake'
    })
  }
  this.setData({
    san2:true,
      touch: false,
      chaX2: 0,
      chaY2: 0,
      
      heh2:100,
          hew2:100
  });
  setTimeout(() => {
    this.setData({
      san2:false,
      posX2:200,
      posY2:20,
      boxClass: '',
      boxClass1:'',
      boxClass2:'',
      boxClass3:''
    });
  }, 550); 
},
touchEnd3: function (e) {
  console.log("== touchEnd3 ==")
  if (!this.data.touch) return;
  if(parseInt(this.data.posY3)>100&&parseInt(this.data.posY3)<250&&parseInt(this.data.posX3)<140){
    console.log('hhfdhg')
    this.setData({
      boxClass:'shake'
    })
  }
  if(parseInt(this.data.posY3)>100&&parseInt(this.data.posY3)<250&&parseInt(this.data.posX3)>180&&parseInt(this.data.posX3)<320){
    console.log('down')
    this.setData({
      boxClass1:'shake'
    })
  }
  if(parseInt(this.data.posY3)>280&&parseInt(this.data.posY3)<430&&parseInt(this.data.posX3)>0&&parseInt(this.data.posX3)<140){
    this.setData({
      boxClass2:'shake'
    })
  }
  if(parseInt(this.data.posY3)>280&&parseInt(this.data.posY3)<430&&parseInt(this.data.posX3)>180&&parseInt(this.data.posX3)<320){
    this.setData({
      boxClass3:'shake'
    })
  }
  this.setData({
      touch: false,
      chaX3: 0,
      chaY3: 0,
      san3:true,
      heh3:100,
          hew3:100
  });
  setTimeout(() => {
    this.setData({
      posX3:290,
      posY3:20,
      san3:false,
      boxClass: '',
      boxClass1:'',
      boxClass2:'',
      boxClass3:''
    });
  }, 550); 
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
  // 复制件的触摸移动
  copyTouchMove: function (e) {
      if (!this.data.copyVisible) return;
      // e.touches[0] 内容就是触摸点的坐标值
      var new_copyPosX = e.touches[0].pageX - this.data.chaX;
      var new_copyPosY = e.touches[0].pageY - this.data.chaY;
      console.log(" move new_copyPosX: " + new_copyPosX);
      console.log(" move new_copyPosY: " + new_copyPosY);

      this.setData({
          copyPosX: new_copyPosX,
          copyPosY: new_copyPosY
      });
  },

  // 复制件的触摸结束
  copyTouchEnd: function (e) {
      if (!this.data.copyVisible) return;
      this.setData({
          copyVisible: false
      });
  }
});