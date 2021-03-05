// pages/sure_order/sure_order.js
Page({
  data: {
    way_id:'1',   //配送方式id
    phone:"",     //手机号
    remark:"",    //留言
    goods_type:'',  //商品详情（1:团购；2:积分）
  },
  onLoad(options){
    let goods_type = options.goods_type;
    this.setData({
      goods_type:goods_type
    })
  },
  //切换配送方式
  checkWay(e){
    this.setData({
      way_id:e.target.dataset.way_id
    })
  },
  //监听手机号
  changePhone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  //监听留言
  changeRemark(e){
    this.setData({
      remark:e.detail.value
    })
  },
  //自提点
  goPoint(){
    wx.navigateTo({
      url: '/pages/point_list/point_list',
    });
  }
})