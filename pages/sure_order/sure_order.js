// pages/sure_order/sure_order.js
Page({
  data: {
    way_id:'1',   //配送方式id
    phone:"",     //手机号
    remark:"",    //留言
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
  }
})