Page({
  data: {
    searchResource: [],
    searchInfo:''
  },
  inputChange: function(e){
    this.setData({
      searchInfo:e.detail.value
    })
  },
  goSearch: function(){
    wx.showLoading({
      title: '加载中...',
    })
    let _this = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/search?q='+_this.data.searchInfo,
      methods: 'GET', 
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res){
        console.log(res);
        let arr = res.data.subjects;
        for(let i in arr){
          arr[i].rating.average = (arr[i].rating.average == 0)? '无': arr[i].rating.average; 
        }
        _this.setData({
          searchResource: arr
        });
        wx.hideLoading();
      }
    })
  }
})