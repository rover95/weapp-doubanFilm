// components/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      vlaue: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemClasses: []
  },
  attached: function () {
    let res = [];
    let score = this.properties.score/2;
    console.log(score)
    for (let i = 1; i <= 5; i++) {
      if (i <= score) {
        res.push('img/on.png');
      } else if (i - 0.5 <= score) {
        res.push('img/half.png');
      } else {
        res.push('img/off.png');
      }
    }
    console.log(res);
    this.setData({
      itemClasses: res
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    itemClasses() {
      let res = [];
      let score = this.properties.score;
      for (let i = 1; i <= 5; i++) {
        if (i <= score) {
          res.push('img/on.png');
        } else if (i - 0.5 <= score) {
          res.push('img/half.png');
        } else {
          res.push('img/off.png');
        }
      }
      console.log(res);
      this.setData({
        itemClasses: res
      })
    }
  }
})
