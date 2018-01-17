Page({
  data: {
    location:{},
    t: [14,51,48]
  },
  onLoad: function(){
    let _this = this;
    wx.getLocation({
      success: function(e){
        console.log(e)
        _this.setData({
          location: e
        })
      }
    })
  },
  change: function(){
    var arr = this.data.t.push(15)
    this.setData({
      t:{
        subjects: arr
      }
    })
  }
})