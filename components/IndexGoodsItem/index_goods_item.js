// components/IndexGoodsItem/index_goods_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods_item: { 
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //商品详情
    goodsDetail(){
      let goods_item = this.data.goods_item;
      wx.navigateTo({
        url: '/pages/goods_detail/goods_detail?goods_type=' + goods_item.goods_type,
      });
    }
  }
})
