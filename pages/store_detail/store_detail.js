// pages/store_detail/store_detail.js
Page({
  data: {
    banner_list: ['https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg', 'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg', 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg'],
  },
  //商家入驻
  goJoin() {
    wx.navigateTo({
      url: '/pages/register_page/register_page'
    });
  }

})
