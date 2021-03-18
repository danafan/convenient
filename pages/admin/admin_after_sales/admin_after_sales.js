// pages/admin/admin_after_sales/admin_after_sales.js
Page({
  data: {
    is_down:false,    //售后金额是否展开
  },
  //切换是否展开
  isDown(){
    this.setData({
      is_down:!this.data.is_down
    })
  },
  //订单详情
  goOrderDetail(){
    wx.navigateTo({
      url: '/pages/admin/admin_order_detail/admin_order_detail',
    });
  },
})