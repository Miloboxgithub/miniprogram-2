// pages/monitor/monitor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      src1:'',
      src2:'',
      ziwidth:50,
      ziheight:50,
      op1:true,
      op2:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
this.refreshtu()
const genxin = () => {
  this.refreshtu()
}
setInterval(genxin,10000)
  },
  refreshtu:function () {
    wx.showLoading({
      title: '数据加载中...',
    })
    const timenow=new Date().getTime();

    this.setData({
      src1:'http://111.230.53.161:8080/picture_circle.jpg?v='+timenow,
      src2:'http://111.230.53.161:8080/picture_ill.jpg?v='+timenow
    })
    wx.hideLoading()
  },
  changeda1:function () {
    if(this.op1){
    this.setData({
      ziheight:150,
      ziwidth:150,
      op1:false
    })}
    else{
      this.setData({
        ziheight:50,
        ziwidth:50,
        op1:true
      })
    }
  },
  changeda2:function () {
    if(this.op2){
    this.setData({
      ziheight:150,
      ziwidth:150,
      op1:false
    })}
    else{
      this.setData({
        ziheight:50,
        ziwidth:50,
        op1:true
      })
    }
  }
  
})