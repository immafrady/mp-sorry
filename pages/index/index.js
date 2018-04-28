//index.js
//获取应用实例
const app = getApp()
const baseTpl = require("../../utils/baseTpl.js")
const api = require("../../utils/api.js")

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
            src: "../../res/demos/sorry.gif"
        }, {
            name: "王境泽",
            value: "wangjingze",
            src: "../../res/demos/wangjingze.gif"
        }, {
            name: "金坷垃",
            value: "jinkela",
            src: "../../res/demos/jinkela.gif"
        }, {
            name: "土拨鼠",
            value: "marmot",
            src: "../../res/demos/marmot.gif"
        }, {
            name: "切格瓦拉",
            value: "dagong",
            src: "../../res/demos/dagong.gif"
        }, {
            name: "切格瓦拉偷电动车",
            value: "diandongche",
            src: "../../res/demos/diandongche.gif"
        }, {
            name: "厚颜无耻！",
            value: "kongming",
            src: "../../res/demos/kongming.gif"
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
        console.log(e)
        wx.request({
            url: api[tpl],
            method: "POST",
            data: e.detail.value,
            success(res) {
                console.log(res)
            },
            fail (err) {
                console.log(err)
            }
        })
    },
    resetTpl(e) {
        console.log(e)
    }
})
