Page({
  
  data: {
    messages: [
    ],
    scrollIntoView: '',
    loadings:false
  },
  onLoad(){
    const savedMessages = wx.getStorageSync('savedMessages');
    if (savedMessages.length) {
      // 可以将读取的数据设置到页面的 data 对象中
      this.setData({
        messages: savedMessages
      });
    }
    else{
      this.setData({
        messages:[
          { type: 'left', content: '你好！有什么可以帮助到你吗', time:  this.getCurrentTime()}]
      })
      }
    this.scrollToBottom();
  },
  // onShow() {
  //   const savedMessages = wx.getStorageSync('savedMessages');
  //   if (savedMessages.length) {
  //     // 可以将读取的数据设置到页面的 data 对象中
  //     this.setData({
  //       messages: savedMessages
  //     });
  //   }
  //   else{
  //     console.log(11111111)
  //     this.setData({
  //       messages:[
  //         { type: 'left', content: '你好！有什么可以帮助到你吗', time:  this.getCurrentTime()}]
  //     })
  //     wx.setStorageSync('savedMessages', this.data.messages);
  //   }
  //   // 页面重新显示时也可以执行滚动逻辑
  //   this.scrollToBottom();
  // },
  // sendNewMessage() {
  //   const mmm = this.data.inputVal;
  //   const newMessage = { type: 'right', content:mmm, time: this.getCurrentTime() };
  //   this.setData({
  //     messages: [...this.data.messages, newMessage]
  //   });
  //   this.setData({
  //     inputVal: '' // 清空 input 组件的值
  //   });
  //   wx.setStorageSync('savedMessages', this.data.messages);
  // },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height,
     
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  },
  navigate: function (e) {
    wx.navigateTo({url: e.currentTarget.dataset.url});
  },
  onInputChange: function(event) {
    // 更新页面数据，以便 `input` 的值能够实时更新
    this.setData({
      inputVal: event.detail.value

    });

  },
  getCurrentTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  },
  scrollToBottom: function() {
    const query = wx.createSelectorQuery();
    const chatList = query.select('#chatList'); // 确保选择器与您的聊天记录列表容器的ID匹配

    chatList.boundingClientRect(function(rect) {
      // 假设聊天记录列表渲染完成后，执行滚动操作
      wx.pageScrollTo({
        scrollTop: rect.bottom
      });
    }).exec();
  },
  onDelete: function(event) {
    // 获取要删除的聊天记录索引
    const index = event.currentTarget.dataset.index;
    // 确认删除
    wx.showModal({
      title: '确定删除这条消息',
      content: '你确定要删除这条消息吗？',
      success: (res) => {
        if (res.confirm) {
          // 从数组中删除对应项
          const newMessages = this.data.messages.filter((item, i) => i !== index);
          this.setData({
            messages: newMessages
          });
          wx.setStorageSync('savedMessages', this.data.messages);
        }
      }
    });
  },
  //___________---------------------------------------------
  async sendNewMessage() {
    const that = this
    const message = this.data.inputVal; 

    if (!message) {
      return;
    }
    this.setData({
      inputVal: '',
      messages: [...this.data.messages, 
      { type: 'right',  content: message,time: this.getCurrentTime()}],
      loadings:true
      
    });
    this.setData({
      scrollIntoView: 'msg-' + (this.data.messages.length - 1)
    })
     const response = await wx.request({
      url: 'http://milomio.online:8080/questioning',//https://api.chatanywhere.tech/v1/chat/completions-----http://111.230.53.161:8080/questioning
      method: 'POST',
      // data: {
      //   "model": "gpt-4o-mini",
      //   "messages": [{
      //     "role": "user",
      //     "content": message
      //   }]
      // },
      data: {
        "query":JSON.stringify(message)
      },
      header: {
        // 'Authorization': 'Bearer sk-BBABBQz4qnVtUBIHTh9HBd3bPO9rOKTjSfU19zzvJjcndBeu',
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log(res)
        //const reply = res.data.choices[0].message.content;
        const reply = res.data;
        this.setData({
          inputVal: '',
          loadings:false,
          messages: [...this.data.messages, 
          
          {  type: 'left',content: reply,  time: this.getCurrentTime()},],
          scrollIntoView: 'msg-' + (this.data.messages.length - 1)

        });
        wx.setStorageSync('savedMessages', this.data.messages);
        that.scrollToBottom();
      },
      fail: (error) => {
        console.error(error);
      }
    });
  }
})