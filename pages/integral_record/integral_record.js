// pages/integral_record/integral_record.js
Page({
  data: {
    tab_list: [{
      id: '1',
      name: "赠送记录"
    }, {
      id: '2',
      name: "兑换记录"
    }],
    active_index: 0, //二级导航
    active_id: "", //选中的二级导航的id
  },
  //切换
  changeCurrent(v) {
    this.setData({
      active_index: v.target.dataset.index,
      active_id:v.target.dataset.id
    })
  },

})
