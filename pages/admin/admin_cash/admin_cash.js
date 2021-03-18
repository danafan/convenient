// pages/admin/admin_cash/admin_cash.js
Page({
  data: {
    money:"",   //提现金额
  },
  //监听输入的金额
  bindKeyInput(e){
    let money = e.detail.value;
    this.setData({
      money:money
    })
  }
})