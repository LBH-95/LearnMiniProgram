// pages/detail/detai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabarHeight: '100rpx',
    viewHeight: '500rpx',
    data: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var data = JSON.parse(options.data);
    this.setData({
      data: data
    })
    var that = this;

    wx.getSystemInfo({
      success: function(res) {

        let height = 750 / res.windowWidth * res.windowHeight;

        that.setData({

          tabarHeight: height / 12 + 'rpx',
          viewHeight: height / 12 * 11 + 'rpx'
        });
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})