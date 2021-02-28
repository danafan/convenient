// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    banner_list: ['https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg', 'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg', 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg'],
    goods_list: [{
      goods_id: '1', // 商品id
      goods_type: '1', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "推荐", //标签内容
      has_time: false, //是否已到时间
      take_up: false, //是否已抢完
      goods_name: "四小邻同小吃站四小邻同小吃站四小邻同小吃站四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }, {
      goods_id: '2', // 商品id
      goods_type: '1', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "新品", //标签内容
      has_time: false, //是否已到时间
      take_up: false, //是否已抢完
      goods_name: "四小邻同小吃站四小邻同小吃站四小邻同小吃站四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }, {
      goods_id: '3', // 商品id
      goods_type: '1', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "", //标签内容
      has_time: false, //是否已到时间
      take_up: false, //是否已抢完
      goods_name: "四小邻同小吃站四小邻同小吃站四小邻同小吃站四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }, {
      goods_id: '4', // 商品id
      goods_type: '1', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "", //标签内容
      has_time: true, //是否已到时间
      take_up: false, //是否已抢完
      goods_name: "四小邻同小吃站四小邻同小吃站四小邻同小吃站四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }, {
      goods_id: '5', // 商品id
      goods_type: '1', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "", //标签内容
      has_time: false, //是否已到时间
      take_up: true, //是否已抢完
      goods_name: "四小邻同小吃站四小邻同小吃站四小邻同小吃站四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }, {
      goods_id: '6', // 商品id
      goods_type: '2', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "推荐", //标签内容
      has_time: false, //是否已到时间
      take_up: false, //是否已抢完
      goods_name: "四小邻同小吃站四小邻同小吃站四小邻同小吃站四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }, {
      goods_id: '7', // 商品id
      goods_type: '2', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "新品", //标签内容
      has_time: false, //是否已到时间
      take_up: false, //是否已抢完
      goods_name: "四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }, {
      goods_id: '8', // 商品id
      goods_type: '2', //商品类型（1:拼团；2:积分）
      goods_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg", //商品主图
      tag_text: "", //标签内容
      has_time: false, //是否已到时间
      take_up: false, //是否已抢完
      goods_name: "四小邻同小吃站",
      group_num: '2', //团购人数
      old_price: "258.00", //原价
      group_price: "188", //团购价
    }], //商品列表
    store_list: [{
      id: '1',
      store_state: '1'
    }, {
      id: '2',
      store_state: '2'
    }], //商家列表
    list_req: {}, //列表筛选条件
  },
  onLoad() {

  },
  //切换中间筛选条件
  checkQuery(e) {
    this.setData({
      list_req: e.detail
    })
    console.log(e)
  },

})
