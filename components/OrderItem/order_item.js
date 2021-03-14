// components/OrderItem/order_item.js
Component({
  properties: {
    order_item: {
      type: Object,
      value: {}
    }
  },
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //拼团详情
    goDetail(e) {
      console.log(e)
      let page_type = e.currentTarget.dataset.page_type;
      if (page_type == '1') { //拼团
        wx.navigateTo({
          url: '/pages/group_detail/group_detail'
        });
      } else { //订单详情
        wx.navigateTo({
          url: '/pages/order_detail/order_detail'
        });
      }
    }
  }
})
