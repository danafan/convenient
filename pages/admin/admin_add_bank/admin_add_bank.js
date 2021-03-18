// pages/admin/admin_add_bank/admin_add_bank.js
Page({
  data: {
    is_radio:false,     //是否同意
    user_name:"",
    card_num:"",
    phone:""
  },
  //切换阅读
  checkRadio(){
    this.setData({
      is_radio:!this.data.is_radio
    })
  },
  //监听输入框
  bindKeyInput(v){
    let label = v.target.dataset.type;
    let value = v.detail.value;
    this.setData({
      [label]:value
    })
  }
})