// components/IndexTab/index_tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    type_index: '1', //一级导航
    category_list: [{
      id: '1',
      name: '全部'
    }, {
      id: '2',
      name: '便民服务'
    }, {
      id: '3',
      name: '餐饮美食'
    }, {
      id: '4',
      name: '小区超市'
    }, {
      id: '5',
      name: '烘焙甜点'
    }, {
      id: '6',
      name: '川湘菜',
    }, {
      id: '7',
      name: '日韩料理'
    }], //分类列表
    active_index: 0, //二级导航
    active_id:"",    //选中的二级导航的id
    sort_id:'1',     //排序id
  },
  methods: {
    //切换一级导航
    changeType(v) {
      this.setData({
        type_index: v.target.dataset.type,
        active_index: 0
      })
      // 传递参数
      this.emit();
    },
    //切换二级导航
    changeCurrent(v) {
      this.setData({
        active_index: v.target.dataset.index,
        active_id:v.target.dataset.id
      })
      // 传递参数
      this.emit();
    },
    //切换排序
    changeSort(v){
      this.setData({
        sort_id: v.target.dataset.sort_id
      })
      // 传递参数
      this.emit();
    },
    // 传递参数
    emit() {
      let req = {
        type_index:this.data.type_index,
        active_id:this.data.active_id,
        sort_id:this.data.sort_id
      }
      this.triggerEvent('onEmit', req);
    }
  }
})
