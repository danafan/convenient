// pages/sure_order/sure_order.js
Page({
  data: {
    way_id:'1',   //配送方式id
  },
  //切换配送方式
  checkWay(e){
    this.setData({
      way_id:e.target.dataset.way_id
    })
  }
})