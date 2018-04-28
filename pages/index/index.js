//index.js
//获取应用实例
const app = getApp()
const baseTpl = require("../../utils/baseTpl.js")
const api = require("../../utils/api.js").req
const demo = require("../../utils/api.js").demo

Page({
    data: {
        // motto: 'Hello World',
        // userInfo: {},
        // hasUserInfo: false,
        // canIUse: wx.canIUse('button.open-type.getUserInfo'),
        index: 0,
        gifTpl: "sorry",
        baseTpl: baseTpl["sorry"],
        rangeTplType: [{
            name: "Sorry 为所欲为",
            value: "sorry",
            src: demo.sorry,
            staticSrc: "../../res/demos/sorry.png"
        }, {
            name: "王境泽",
            value: "wangjingze",
            src: demo.wangjingze,
            staticSrc: "../../res/demos/wangjingze.png"
        }, {
            name: "金坷垃",
            value: "jinkela",
            src: demo.jinkela,
            staticSrc: "../../res/demos/jinkela.png"
        }, {
            name: "土拨鼠",
            value: "marmot",
            src: demo.marmot,
            staticSrc: "../../res/demos/marmot.png"
        }, {
            name: "切格瓦拉",
            value: "dagong",
            src: demo.dagong,
            staticSrc: "../../res/demos/dagong.png"
        }, {
            name: "切格瓦拉偷电动车",
            value: "diandongche",
            src: demo.diandongche,
            staticSrc: "../../res/demos/diandongche.png"
        }, {
            name: "诸葛孔明",
            value: "kongming",
            src: demo.kongming,
            staticSrc: "../../res/demos/kongming.png"
        }]
    },
    //事件处理函数
    onLoad: function () {
        // if (app.globalData.userInfo) {
        //   this.setData({
        //     userInfo: app.globalData.userInfo,
        //     hasUserInfo: true
        //   })
        // } else if (this.data.canIUse){
        //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //   // 所以此处加入 callback 以防止这种情况
        //   app.userInfoReadyCallback = res => {
        //     this.setData({
        //       userInfo: res.userInfo,
        //       hasUserInfo: true
        //     })
        //   }
        // } else {
        //   // 在没有 open-type=getUserInfo 版本的兼容处理
        //   wx.getUserInfo({
        //     success: res => {
        //       app.globalData.userInfo = res.userInfo
        //       this.setData({
        //         userInfo: res.userInfo,
        //         hasUserInfo: true
        //       })
        //     }
        //   })
        // }
    },
    bindTplType(e) {
        const idx = e.detail.value
        const val = this.data.rangeTplType[idx].value
        console.log(baseTpl[val])
        this.setData({
            index: idx,
            gifTpl: val,
            baseTpl: baseTpl[val]
        })
    },
    submitTpl(e) {
        const tpl = this.data.gifTpl
        // console.log(e)
        wx.request({
            url: api[tpl],
            method: "POST",
            data: e.detail.value,
            success(res) {
                const msg = res.data
                console.log(msg)
                wx.navigateTo({
                    url: `/pages/output/output?msg=${msg}`,
                })
            },
            fail(err) {
                console.log(err)
                wx.showToast({
                    title: err.errMsg,
                    icon: "none"
                })
            }
        })
    },
    resetTpl(e) {
        console.log(e)
    }
})
