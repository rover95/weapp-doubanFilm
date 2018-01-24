Page({
  data: {
    filmData: {},
    info: {
      directors: '',
      aka: '',
      countries: '',
      genres: '',
      casts: ''
    },
  },
  onLoad: function(param){
    var _this = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      // url:'https://api.douban.com/v2/movie/subject/' + param.id,
      url:'http://localhost:8111/mock-id.json',
      methods: 'GET', 
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res){
        console.log(res);
        let dire = [];
        let casts = [];
        let aka = [];
        let genres = [];
        let countries = [];
        //循环导演
        for(let i in res.data.directors){
          dire.push(res.data.directors[i].name);
        }
        //循环主演
        for(let i in res.data.casts){
          casts.push(res.data.casts[i].name);
        }
        //循环国家
        for(let i in res.data.countries){
          countries.push(res.data.countries[i]);
        }
        //循环类型
        for(let i in res.data.genres){
          genres.push(res.data.genres[i]);
        }
        //循环别名
        for(let i in res.data.aka){
          aka.push(res.data.aka[i]);
        }
        _this.setData({
          filmData: res.data,
          info:{
            directors: dire.join(' / '),
            aka: aka.join(' / '),
            countries: countries.join(' / '),
            genres: genres.join(' / '),
            casts: casts.join(' / ')
          }
          
        });
        wx.hideLoading();
      }
    })
  }
})