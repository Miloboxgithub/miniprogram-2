//app.js
App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
		if (capsule) {
		 	this.globalData.Custom = capsule;
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
    //this.fetchToken();
    // 展示本地存储能力
    //this.refreshToken();
    
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  },
  fetchToken: function () {
    const url = 'https://www.aiotcomm.com.cn:18888/api/auth/login'; // 替换为实际的API地址
    const data = {
      username: 'sztuiot2024',
      password: 'Iot@2024'
    };

    wx.request({
      url: url,
      method: 'POST',
      header: {
        'content-type': 'application/json' // 设置请求的 header
      },
      data: data,
      success(res) {
        if (res.statusCode === 200) {
          console.log('登录成功',res);
          
          wx.setStorageSync('token', res.data.token);
          wx.setStorageSync('refreshtoken', res.data.refreshToken);
          //console.log(wx.getStorageSync('token'))
        } else {
          console.error('登录失败，状态码：', res.statusCode);
        }
      },
      fail(err) {
        console.error('请求失败：', err);
      }
    });
  },
  refreshToken: function () {
    return new Promise((resolve, reject)=>{wx.request({
      url: 'https://www.aiotcomm.com.cn:18888/api/auth/token',
      method: 'POST',
      data:  {

        "refreshToken": wx.getStorageSync('refreshtoken')
  
      },
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        if (res.statusCode === 200) {
          console.log('刷新token成功', res);
          wx.setStorageSync('token', res.data.token);
          wx.setStorageSync('refreshtoken', res.data.refreshToken);
          //console.log('reee',wx.getStorageSync('token'))
        } else {
          console.error('刷新token失败，状态码：', res.statusCode);
        }

      },
      fail(err) {
        console.error('请求失败：', err);
      }
    });
  })
  }

})