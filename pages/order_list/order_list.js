// pages/order_list/order_list.js
Page({
  data: {
    order_list:[{
      id:'1',
      status:'1',   //1:待支付;2:待发货；3:待收货；4:待评价
      page_type:'2',  //1:我的拼团；2:我的订单
    },{
      id:'2',
      status:'2',   //1:待支付;2:待发货；3:待收货；4:待评价
      page_type:'2',  //1:我的拼团；2:我的订单
    },{
      id:'3',
      status:'3',   //1:待支付;2:待发货；3:待收货；4:待评价
      page_type:'2',  //1:我的拼团；2:我的订单
    },{
      id:'4',
      status:'4',   //1:待支付;2:待发货；3:待收货；4:待评价
      page_type:'2',  //1:我的拼团；2:我的订单
    }],             //订单列表
    select_list:[{
      id:'1',
      name:'拼团订单'
    },{
      id:'2',
      name:'积分兑换订单'
    },{
      id:'3',
      name:'订单编号'
    },{
      id:'4',
      name:'收货人姓名'
    },{
      id:'5',
      name:'收货人手机'
    },{
      id:'6',
      name:'全部'
    }],               //下拉框列表
    show_modal:false,   //下拉框是否显示
    active_select_id:'1',
    active_select_text:"全部"
  },
  //监听输入框
  checkSearch(e){
    console.log(e)
  },
  //点击下拉框
  selectFun(){
    this.setData({
      show_modal:!this.data.show_modal
    })
  },
  //点击下拉框某一个内容
  changeSelect(e){
    console.log(e)
    this.setData({
      active_select_id:e.currentTarget.dataset.item.id,
      active_select_text:e.currentTarget.dataset.item.name,
      show_modal:false
    })
  }
})