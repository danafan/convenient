// components/TabBar/tab_bar.js
Component({
  properties: {
    page_type:{
      type:String,
      value:'1'
    }                       //页面类型（1:我的拼团；2:我的订单）
  },
  data: {
    tab_list_01:[{
      id:'1',
      name:"全部"
    },{
      id:'2',
      name:"待支付"
    },{
      id:'3',
      name:"待分享"
    },{
      id:'4',
      name:"待发货"
    },{
      id:'5',
      name:"待收货"
    }],
    tab_list_02:[{
      id:'1',
      name:"全部"
    },{
      id:'2',
      name:"待支付"
    },{
      id:'3',
      name:"待发货"
    },{
      id:'4',
      name:"待收货"
    },{
      id:'5',
      name:"待评价"
    }],
    active_index: 0, //二级导航
    active_id:"",    //选中的二级导航的id
  },
  methods: {
    //切换
    changeCurrent(v) {
      this.setData({
        active_index: v.target.dataset.index,
        active_id:v.target.dataset.id
      })
    },
  }
})
