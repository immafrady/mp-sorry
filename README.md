# mp-sorry
基于 [xtyxtyx/sorry](link1) 的小程序版本

主要目的：上手微信小程序，练手用。

### 前端
---

主页：  
- [x] 选择模板
- [ ] 根据模板发送生成Gif的请求  
- [ ] 由于小程序有安装包大小的限制，所以打算把动态图demo存放在服务器里，等加载好再替换掉静态demo图（根据这篇文章《[在微信小程序里实现图片预加载组件](link3)》的原理，自己动手试着实现一下）

展示页： 
- [ ] 展示生成的Gif图
- [ ] 提供下载及分享  

列表页：  
- [ ] 以列表的形式展示过去24小时生成的Gif图
- [ ] 提供下载及分享


### 后台
---
由于xtyxtyx大神提供的api地址不符合微信小程序的要求（未备案）  
所以只能使用自己的服务器了。
- [x] 用自己的服务器接受请求
- [ ] 重定向静态图片


[link1]:https://sorry.xuty.tk/sorry/
[link2]:https://github.com/q809198545/node-sorry
[link3]:https://aotu.io/notes/2017/01/06/wxapp-img-loader/index.html
