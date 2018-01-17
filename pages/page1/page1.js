Page({
  data: {
    location:{}
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
  }
})