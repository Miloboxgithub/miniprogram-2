const app = getApp();
Page({
  data: {
    articleContent: "建议：针对灰霉病，应及时使用防治药剂如异菌脲、腐霉利、嘧霉胺、嘧菌酯、咯菌腈、或嘧菌环胺进行喷施。注意从花期开始密切监控，一旦发现病症，立即按照药物说明书推荐浓度进行处理，以防止病害扩散。同时，保持棚内通风，减少湿度，可有效遏制灰霉病的发展 ",
    articleContent1: '土地1:温度、湿度、土壤湿度和pH值都在适宜范围内，但土壤中氮含量略低，可适当施加氮肥。植株无病虫害，生长状况良好。',
    articleContent2: '土地2:温度、湿度、土壤湿度和pH值都在适宜范围内，但土壤中氮含量略低，可适当施加氮肥。植株有灰霉病，建议使用异菌脲、腐霉利、嘧霉胺、嘧菌酯、咯菌腈、嘧菌环胺等进行喷雾防治，每隔7-10天喷一次，连续喷2-3次。',
    articleContent3: '土地3:温度、湿度、土壤湿度和pH值都在适宜范围内，但土壤中磷含量略高，可适当减少磷肥的施用量。植株无病虫害，生长状况良好。',
    articleContent4: '土地4:温度、湿度、土壤湿度和pH值都在适宜范围内，但土壤中氮含量略高，可适当减少氮肥的施用量。植株无病虫害，生长状况良好。',
    iszhan:true,
    iszhan1:true,
    iszhan2:false,
    iszhan3:false,
    iszhan4:false,
    loadinga:false
  },
  onLoad: function() {
    // 页面加载时的逻辑
    //this.getText1();
    app.fetchToken()
    // setTimeout(() => {
    //   this.getText();
    // }, 1000);
    
  },
  getText:function () {
    
    wx.showLoading({
      title: '数据加载中...',
    })
    let that = this
    const entityType = 'DEVICE';
    const entityId = '9755ce70-44e4-11ef-add2-fd19fcae8edb';

    let token = wx.getStorageSync('token');
    wx.request({
      url: `https://www.aiotcomm.com.cn:18888/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries`,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      },
      success(res) {
        console.log('成功3',res.data);
        that.setData({
          articleContent:res.data.decide[0].value,
          // articleContent1:res.data.land1[0].value,
          // articleContent2:res.data.land2[0].value,
          // articleContent3:res.data.land3[0].value,
          // articleContent4:res.data.land4[0].value
        })
        wx.hideLoading()
        
      },
      fail(err) {
        console.error('失败', err);
      }
    });

  },
  toggle:function () {
    this.setData({
      iszhan:!this.data.iszhan
    })
  },
  toggle1:function () {
    this.setData({
      iszhan1:!this.data.iszhan1
    })
  },
  toggle2:function () {
    this.setData({
      iszhan2:!this.data.iszhan2
    })
  },
  toggle3:function () {
    this.setData({
      iszhan3:!this.data.iszhan3
    })
  },
  toggle4:function () {
    this.setData({
      iszhan4:!this.data.iszhan4
    })
  },
  navigate: function (e) {
    wx.navigateTo({url: e.currentTarget.dataset.url});
  },
  getText1: function () {
    let that=this
    that.setData({
      loadinga:true
    })
    wx.request({
      url: 'http://111.230.53.161:8080/suggestion',//https://192.168.1.86:5000/suggestion
      method: 'GET',
      headers :{
       
        "Content-Type": "application/json"
        
    },

      success(res) {
        console.log('成功4',res.data);
        that.setData({
          articleContent:res.data,
          loadinga:false
        })
        // wx.hideLoading()
      },
      fail(err) {
        console.error('失败', err);
      }
      
      
    })
  },
  shuaxin: function () {
    this.getText1()
  }
});