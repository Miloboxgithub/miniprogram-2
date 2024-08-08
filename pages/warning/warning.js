// pages/operation/operation.js

Page({
  data: {
    switchState: true,
  },

  handleSwitchChange: function(e) {
    const isChecked = e.detail.value;
    this.setData({
      switchState: isChecked,
    });

    if (isChecked) {
      console.log('开关已开启');
      // 这里可以添加更多的逻辑，例如开启服务
    } else {
      console.log('开关已关闭');
      // 这里可以添加更多的逻辑，例如关闭服务
    }
  },
});