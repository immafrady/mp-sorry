// pages/output/output.js
const baseSrc = require("../../utils/api.js").res
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            src: `${baseSrc}${options.msg}`
        })
        console.log(this.data.src)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    /**
     * 保存图片
     */
    saveToDevice() {
        const auth = app.authorize.writePhotosAlbum
        if (!auth) {
            wx.getSetting({
                success(res) {
                    const wpa = res.authSetting["scope.writePhotosAlbum"]
                    // if (!wpa) {
                    wx.authorize({
                        scope: 'scope.writePhotosAlbum',
                        success(res) {
                            console.log(res)
                            app.authorize.writePhotosAlbum = true
                            wx.saveImageToPhotosAlbum({
                                filePath: '/',
                                success(res) {
                                    console.log(`保存`)
                                    console.log(res)
                                },
                                fail (res) {
                                    console.log(`失败`)
                                    console.log(res)
                                }
                            })
                        },
                        fail(res) {
                            console.log(res)
                        }
                    })
                }
            })
        } else {
            wx.saveImageToPhotosAlbum({
                filePath: '/',
                success(res) {
                    console.log(`保存`)
                    console.log(res)
                }
            })
        }
    },
    /**
     * 展开全图
     */
    displayFullScreen(e) {
        wx.previewImage({
            urls: [this.data.src],
            success(res) {

            }
        })
    }
})