Page({
  data: {
   pageTitle: "",
   pageNum: 0,  //当前页数
   No: 1,       //记录电影排名
   topData: []  //存储请求电影数据
  },
  onLoad: function(){
    var _this = this;
    getFilm(_this);
  },
  onReachBottom:function(){
    var _this = this;
    getFilm(_this);
  },
  onShareAppMessage: function(){
    return {
      title: "转发"
    };
  }
})
function getFilm(_this) {
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: 'https://api.douban.com/v2/movie/top250',
    data: {
      start: _this.data.pageNum,
      count: 20
    },
    methods: 'GET', 
    header: {
      'content-type': 'json' // 默认值
    },
    success: function(res) {
      console.log(res.data);
      for(var i in res.data.subjects){
        res.data.subjects[i].No = _this.data.No;
        _this.setData({
          No: res.data.subjects[i].No + 1
        })
      }
      var num = _this.data.pageNum + 20;
      var arr = _this.data.topData.concat(res.data.subjects);
      _this.setData({
        topData: arr,
        pageNum: num,
        pageTitle: res.data.title
      })
      wx.hideLoading()
    }
  }) 
}
function goInfoPage() {
  wx.navigateTo({
    url:'../film/film'
  })
}