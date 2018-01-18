Page({
  data: {
    filmData: []
  },
  onLoad: function(){
    let _this = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      // url: 'https://api.douban.com/v2/movie/us_box',
      url: 'http://localhost:8111',
      data: {
        url:'/v2/movie/us_box',
      },
      methods: 'GET', 
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res){
        console.log(res.data.subjects);
        let arr = [];
        for( let i = 0; i < 10; i++){
          arr.push(res.data.subjects[i]);
        }
        _this.setData({
          filmData: arr
        });
        wx.hideLoading();
      }
    })
  }
})