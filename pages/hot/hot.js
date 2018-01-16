Page({
  data: {
    filmData: []
  },
  onLoad: function(){
    let _this = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/us_box',
      methods: 'GET', 
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res){
        console.log(res.data.subjects);
        _this.setData({
          filmData: res.data.subjects
        });
      }
    })
  }
})