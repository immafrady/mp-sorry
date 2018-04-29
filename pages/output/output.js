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
        const that = this
        const webSrc = `${baseSrc}${options.msg}`
        wx.getImageInfo({
            src: webSrc,
            success (res) {
                // 储存一下获取到的图片本地路径
                const tempPath = res.path
                // 判断储存的文件总大小
                wx.getSavedFileList({
                    success (res) {
                        let totalFileSize = 0;
                        totalFileSize = res.fileList.reduce((prev, curr)=>prev + curr.size,totalFileSize)
                        console.log(totalFileSize)
                        if (totalFileSize > 8000000){
                            wx.removeSavedFile({
                                filePath: res.fileList[0].filePath,
                            })
                        }
                        wx.saveFile({
                            tempFilePath: tempPath,
                            success(res) {
                                console.log(res.savedFilePath)
                                that.setData({
                                    src: res.savedFilePath
                                })
                                wx.getSavedFileList({
                                    success(res) {
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
            
            }
        })
        // this.setData({
        //     src: `${baseSrc}${options.msg}`
        // })
        
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
        const src = this.data.src
        wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success(res) {
                wx.saveImageToPhotosAlbum({
                    filePath: src,
                    success(res) {
                        wx.showToast({
                            title: '保存成功！',
                        })
                    },
                    fail(res) {
                        wx.showToast({
                            title: '保存失败，请重新再试',
                            icon: 'none'
                        })
                    }
                })
                // wx.getImageInfo({
                //     src: src,
                //     success(res) {
                //         const path = res.path
                //         console.dir(path)
                        
                //     },
                //     fail(res) {
                //         wx.showToast({
                //             title: '获取图片信息失败，请重新再试',
                //             icon: 'none'
                //         })
                //     }
                // })
            },
            fail(res) {
                wx.showModal({
                    title: '授权失败',
                    content: '请赐予我保存照片的力量~！',
                    confirmColor: "#0099BC",
                    confirmText: "立即授权",
                    cancelColor: "#e0e0e0",
                    cancelText: "狠心拒绝",
                    success: function (res) {
                        if (res.confirm) {
                            wx.openSetting({
                                success(res) {
                                    wx.showToast({
                                        title: '请给我“保存到相册”的权限后，再试一次保存吧！',
                                        icon: "none"
                                    })
                                }
                            })
                            console.log('用户点击确定')
                        } else if (res.cancel) {
                            wx.showToast({
                                title: '需要“保存到相册”权限才能完成操作',
                                icon: "none"
                            })
                        }
                    }
                })
            }
        })
        // const auth = app.authorize.writePhotosAlbum
        // if (!auth) {
        //     wx.getSetting({
        //         success(res) {
        //             const wpa = res.authSetting["scope.writePhotosAlbum"]
        //             // if (!wpa) {
        //             wx.authorize({
        //                 scope: 'scope.writePhotosAlbum',
        //                 success(res) {
        //                     console.log(res)
        //                     app.authorize.writePhotosAlbum = true
        //                     wx.saveImageToPhotosAlbum({
        //                         filePath: '/',
        //                         success(res) {
        //                             console.log(`保存`)
        //                             console.log(res)
        //                         },
        //                         fail (res) {
        //                             console.log(`失败`)
        //                             console.log(res)
        //                         }
        //                     })
        //                 },
        //                 fail(res) {
        //                     console.log(res)
        //                 }
        //             })
        //         }
        //     })
        // } else {
        //     wx.saveImageToPhotosAlbum({
        //         filePath: '/',
        //         success(res) {
        //             console.log(`保存`)
        //             console.log(res)
        //         }
        //     })
        // }
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