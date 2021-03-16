// pages/my/my.js
Page({
  data: {

  },
  //vip
  goVip(){
    wx.navigateTo({
      url: '/pages/vip_page/vip_page'
    });
  },
  //积分
  goIntegral(){
    wx.navigateTo({
      url: '/pages/integral_record/integral_record',
    });
  },
  //余额
  goBalance(){
    wx.navigateTo({
      url: '/pages/balance_list/balance_list',
    });
  },
  //订单列表
  goOrder(){
    wx.navigateTo({
      url: '/pages/order_list/order_list',
    });
  },
  //我的收藏
  goCollection(){
    wx.navigateTo({
      url: '/pages/collection_list/collection_list'
    });
  }
})