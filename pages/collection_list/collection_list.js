// pages/collection_list/collection_list.js
Page({
  data: {
    tab_list:[{
      id:'1',
      name:"全部"
    },{
      id:'2',
      name:"店铺"
    }],
    active_index: 0, //二级导航
    active_id:"",    //选中的二级导航的id
    collection_list:[{
      id:'1',
      item_type:'1',
      img_url:'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg',
      name:'这是一个商品的名称，点击进入商品详情，哈哈哈哈哈哈',
    },{
      id:'2',
      item_type:'2',
      img_url:'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg',
      name:'这是一个店铺的名称，点击进入店铺详情，哈哈哈哈哈哈',
    }]
  },
  //切换
  changeCurrent(v) {
    this.setData({
      active_index: v.target.dataset.index,
      active_id:v.target.dataset.id
    })
  },
  //进入详情
  goDetail(e){
    if(e.currentTarget.dataset.item_type == '1'){ //商品
      wx.navigateTo({
        url: '/pages/goods_detail/goods_detail?goods_type=' + '1'
      });
    }else{  //店铺
      wx.navigateTo({
        url: '/pages/store_detail/store_detail'
      });
    }
  },
  //点击删除
  deleteItem(e){
    let id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '确认删除?',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })    
  }

})