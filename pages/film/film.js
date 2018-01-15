Page({
  data: {
    filmData: {}
  },
  onLoad: function(param){
    var _this = this;
    wx.request({
      url:'https://api.douban.com/v2/movie/subject/' + param.id,
      methods: 'GET', 
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res){
        console.log(res);
        _this.setData({
          filmData: res.data
        })
      }
    })
  }
})