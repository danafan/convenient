// pages/admin/admin_cancel_after/admin_cancel_after.js
Page({
  data: {
    key_code:"",      //输入框内容
  },
  //输入框监听
  bindKeyInput(e){
    this.setData({
      key_code:e.detail.value
    })
    console.log(this.data.key_code)
  }
})