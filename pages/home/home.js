const KEY="ac8e856f96a5f0c3cf8e043bc4d6b060"
Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_1280.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_640.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_640.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2020/09/16/13/54/raspberries-5576401_640.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2022/08/05/21/28/strawberries-7367633_640.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2016/10/31/18/14/dessert-1786311_640.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2012/06/21/00/48/fruits-50423_640.jpg'
    }],
    
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
    
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  navigate: function (e) {
    wx.navigateTo({url: e.currentTarget.dataset.url});
  },


})