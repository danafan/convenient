// pages/admin/admin_order_detail/admin_order_detail.js
Page({
  data: {

  },
  //售后详情
  goAfterSales() {
    wx.navigateTo({
      url: '/pages/admin/admin_after_sales/admin_after_sales',
    });
  },
})
