// pages/goods_detail/goods_detail.js
Page({
  data: {
    banner_list: ['https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg', 'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg', 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg'],
    current_index:0,    //当前下标
    goods_type:'1',     //商品类型（1:拼团；2:积分）
  },
  //监听banner切换
  changeBanner(v){
    this.setData({
      current_index:v.detail.current
    })
  }
})