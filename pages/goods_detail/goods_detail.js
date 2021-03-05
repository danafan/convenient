// pages/goods_detail/goods_detail.js
Page({
  data: {
    banner_list: ['https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg', 'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg', 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg'],
    current_index:0,    //当前下标
    goods_type:'',     //商品类型（1:拼团；2:积分）
    comment_cate_list:[{
      id:'1',
      is_goods:true,
      name:'正品',
      number:"12"
    },{
      id:'2',
      is_goods:false,
      name:'质量很好',
      number:"435"
    },{
      id:'3',
      is_goods:false,
      name:'好用',
      number:"565"
    },{
      id:'4',
      is_goods:false,
      name:'哇哈哈哈',
      number:"565"
    }],                 //评论标签列表
    show_modal:false,   //是否显示弹框
  },
  onLoad: function (options) {
    let goods_type = options.goods_type;
    this.setData({
      goods_type:goods_type
    })
  },
  //监听banner切换
  changeBanner(v){
    this.setData({
      current_index:v.detail.current
    })
  },
  //评价列表
  goCommentList(){
    wx.navigateTo({
      url: '/pages/comment_list/comment_list',
    });
  },
  //点击购买
  openModal(){
    this.setData({
      show_modal:true
    })
  },
  //确认购买
  sureOrder(){
    wx.navigateTo({
      url: '/pages/sure_order/sure_order?goods_type=' + this.data.goods_type,
    });
  },
  //关闭弹框
  closeModal(){
    this.setData({
      show_modal:false
    })
  }
})