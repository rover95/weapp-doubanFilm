Page({
  data: {
    t:"val of data",
    num: [23,211,'asdad',432],
    arr: [{k:'a'}, {k:'b'}, {k:'c'}]
  },
  onLoad: function(o){
    console.log(o);
    var app = getApp();
    console.log(app)
  },
  onReachBottom: function(){
    console.log("bot");
  },
  onPageScroll: function(e){
    
  },
  onShareAppMessage: function(){
    return {
      title: "转发"
    };
  },
  click:function(e){
    this.setData({
      t:"clicked"
    })
  }
})