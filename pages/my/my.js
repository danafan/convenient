// pages/my/my.js
Page({
  data: {

  },
  //订单列表
  goOrder(){
    wx.navigateTo({
      url: '/pages/order_list/order_list',
    });
  }
})