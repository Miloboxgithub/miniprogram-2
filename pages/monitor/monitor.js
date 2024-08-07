// pages/monitor/monitor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      src1:'',
      src2:''
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
    const timenow=new Date().getTime();

    this.setData({
      src1:'http://111.230.53.161:8080/picture_circle.jpg?v='+timenow,
      src2:'http://111.230.53.161:8080/picture_ill.jpg?v='+timenow
    })
  }
  
})