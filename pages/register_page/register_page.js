// pages/register_page/register_page.js
Page({
  data: {
    user_name:"",     //联系人
    phone:"",         //联系电话
    wechart:"",       //微信号
    store_name:"",    //店铺名称
    location_code:"", //位置经纬度
    address_text:"",   //位置文字
    address_detail:"",  //详细地址
    category_id:"",     //所售类目id
    service_phone:"",   //客服电话
    business_hours:"",  //选中的营业时间
    repeat_ids:"",      //选中的重复
    is_radio:false,     //是否选中
  },
  //切换阅读
  checkRadio(){
    this.setData({
      is_radio:!this.data.is_radio
    })
  },
  //监听输入框
  bindKeyInput(v) {
    let label = v.target.dataset.type;
    let value = v.detail.value;
    this.setData({
      [label]: value
    })
  },
  //去后台
  goAdmin(){
    wx.navigateTo({
      url: '/pages/admin/admin_page/admin_page'
    });
  },
  //去首页
  goHome(){
    wx.switchTab({
      url: '/pages/index/index'
    });
  },
})
