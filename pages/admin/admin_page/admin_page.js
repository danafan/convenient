// pages/admin_page/admin_page.js
Page({
  data: {

  },
  //订单核销
  goCancelAfter(){
    wx.navigateTo({
      url: '/pages/admin/admin_cancel_after/admin_cancel_after'
    });
  },
  //申请提现
  goCash(){
    wx.navigateTo({
      url: '/pages/admin/admin_cash/admin_cash'
    });
  },
  //商家提现账户
  goAddBank(){
    wx.navigateTo({
      url: '/pages/admin/admin_add_bank/admin_add_bank'
    });
  },
  //订单管理
  goOrderList(){
    wx.navigateTo({
      url: '/pages/admin/admin_order_list/admin_order_list'
    });
  },
  //售后管理
  goAfterList(){
    wx.navigateTo({
      url: '/pages/admin/admin_after_list/admin_after_list'
    });
  },
  //商品管理
  goGoodsList(){
    wx.navigateTo({
      url: '/pages/admin/admin_goods_list/admin_goods_list'
    });
  }
})