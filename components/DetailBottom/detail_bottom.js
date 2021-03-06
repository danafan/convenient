// components/DetailBottom/detail_bottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods_type:{
      type:String,
      value:''
    }
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
    //跳转首页
    goIndex(){
      wx.switchTab({
        url: '/pages/index/index',
      });
    },
    //跳转我的
    goMy(){
      wx.switchTab({
        url: '/pages/my/my',
      });
    },
    //团购和积分购买
    buyGoods(){
      this.triggerEvent('onEmit');
    },
    // 商家入驻
    storeJoin(){
      this.triggerEvent('onEmit');
    },
    //邀请好友
    sharFun(){
      this.triggerEvent('onEmit');
    }
  }
})
