// pages/admin/admin_after_list/admin_after_list.js
Page({
  data: {
    tab_list:[{
      id:'1',
      name:"待处理"
    },{
      id:'2',
      name:"处理中"
    },{
      id:'3',
      name:"已完成"
    }],
    active_index: 0, //二级导航
    active_id:"",    //选中的二级导航的id
    order_list:[{
      id:'1',
      status:'用户发起退款'
    },{
      id:'2',
      status:'已收货，待退款'
    },{
      id:'3',
      status:'售后完成'
    }]
  },
  //切换
  changeCurrent(v) {
    this.setData({
      active_index: v.target.dataset.index,
      active_id:v.target.dataset.id
    })
  },
  //售后详情
  goAfterSales() {
    wx.navigateTo({
      url: '/pages/admin/admin_after_sales/admin_after_sales',
    });
  },

})