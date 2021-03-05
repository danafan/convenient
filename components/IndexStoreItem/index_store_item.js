// components/IndexStoreItem/index_store_item.js
Component({
  properties: {
    store_item: {
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
    //店铺详情
    goStoreDetail() {
      wx.navigateTo({
        url: '/pages/store_detail/store_detail',
      });
    },
  }
})
