// pages/admin/admin_order_list/admin_order_list.js
Page({
  data: {
    tab_list:[{
      id:'1',
      name:"全部"
    },{
      id:'2',
      name:"待备货"
    },{
      id:'3',
      name:"待发货"
    },{
      id:'4',
      name:"待支付"
    },{
      id:'5',
      name:"已发货"
    }],
    active_index: 0, //二级导航
    active_id:"",    //选中的二级导航的id
    order_list:[{
      status:'待备货'
    },{
      status:'待发货'
    },{
      status:'待支付'
    },{
      status:'已发货'
    }]
  },
  //切换
  changeCurrent(v) {
    this.setData({
      active_index: v.target.dataset.index,
      active_id:v.target.dataset.id
    })
  },
  //详情
  goDetail(){
    wx.navigateTo({
      url: '/pages/admin/admin_order_detail/admin_order_detail',
    });
  },

})