// components/say/say.js
Component({
  // 在组件定义时的选项中启用多slot支持
  options: {
    multipleSlots: true 
  },
  /**
   * 组件的属性列表
   */
  properties: {
    myFloat: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    float: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
