// pages/group_detail/group_detail.js
Page({
  data: {
    goods_type:'4'
  },
  //分享
  sharing(){
    console.log('分享')
  },
  //进入店铺
  goStoreDetail(){
    wx.navigateTo({
      url: '/pages/store_detail/store_detail'
    });
  }
})