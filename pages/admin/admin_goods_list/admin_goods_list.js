// pages/admin/admin_goods_list/admin_goods_list.js
Page({
  data: {
    tab_list: [{
      id: '1',
      name: "全部"
    }, {
      id: '2',
      name: "上架中"
    }, {
      id: '3',
      name: "下架中"
    }, {
      id: '4',
      name: "售罄"
    }],
    active_index: 0, //二级导航
    active_id: "", //选中的二级导航的id
    goods_list:[{
      id:'1',
    },{
      id:'2',
    }],
    select_goods_index:null,    //点击的商品下标
  },
  //切换导航
  changeCurrent(v) {
    this.setData({
      active_index: v.target.dataset.index,
      active_id: v.target.dataset.id
    })
  },
  //点击某一个商品的操作
  checkGoods(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      select_goods_index:index
    })
  },
  //关闭弹框
  closeModal(){
    this.setData({
      select_goods_index:null
    })
  }
})
