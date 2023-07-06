# 蜂窝商城系统前端

#### 1、介绍：

根据 GitHub 上的 [newbee-mall](https://github.com/newbee-ltd/newbee-mall) 项目，这是一套前台商城系统，基于 Vue3 及相关技术栈开发，包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理、会员中心、帮助中心等模块。  

线上预览地址： [http://mall.newbee.ltd](http://mall.newbee.ltd/?from=github) ，账号可自行注册

#### 2、系统架构

基于 [vue.js](https://cn.vuejs.org/) 框架开发，使用 yarn 构建项目...细节太多了

#### 3、项目结构介绍

public：公共文件夹，存放ico图标和首页

src：主目录

- assets：资产文件夹，存放logo商标版权有关的
- common：存放脚本文件，js和css等等
-  components：主要存放可重复利用的组件
- router：路由管理，设置优先级等等
- service：服务端，配置动态路由、接口等等
- utils：存放可重复利用的方法，这里配置了拦截器
- views：视图层，具体显示的页面
- App.vue：全局配置，这里配置的是全局动画过渡效果
- main.js：主文件，配置组件渲染，全局引入，这里配置了过滤器

static-files：静态资源文件夹，主要存放图片

babel.config.js：代码规范检查配置文件

package.json：主要配置文件，启动项，依赖模块，组件设置等等

#### 4、使用说明

- 拉下项目后用适合的 IDE 编辑器打开，首先运行`yarn isntall`，接着运行`yarn serve`，不出意外的话应该如图所示：

  <img src="https://www.llhnp.com/usr/images/phone3_client/phone3_client_activate.png" alt="activate"  />

#### 5、前台商城页面

- 首页1


![index1](https://camo.githubusercontent.com/d2e10842237a61d3d9650ed81e22ed5d6d0fed093902d8866cd018166c71d697/68747470733a2f2f6e65776265652d6d616c6c2e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f706f737465722f70726f647563742f696e6465782d30312d323032332e676966)

- 首页2

![index2](https://camo.githubusercontent.com/5292b32ec87a927e7446d69dad4b50320e48c5d949592ba70b505a4f50ccccf6/68747470733a2f2f6e65776265652d6d616c6c2e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f706f737465722f70726f647563742f696e6465782d30322d323032332e706e67)

- 商品搜索

![search](https://camo.githubusercontent.com/62bbd1d8412b6a26c8ef8ff7ee5041ab2f7feee9367f66c6a29604039525f3ed/68747470733a2f2f6e65776265652d6d616c6c2e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f706f737465722f70726f647563742f7365617263682d323032332e706e67)

- 购物车

![cat](https://camo.githubusercontent.com/29a2aca436e6bc06a119562d180c1f98d337069de277d96f43fdd19b3623c973/68747470733a2f2f6e65776265652d6d616c6c2e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f706f737465722f70726f647563742f636172742d323032332e706e67)

- 订单结算

![jiesuan](https://camo.githubusercontent.com/66b5ccfea71c335f8d52ba8c89a73322b0c8f5377d5f7c7a5980676325fd8f08/68747470733a2f2f6e65776265652d6d616c6c2e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f706f737465722f70726f647563742f736574746c652d323032332e706e67)

- 支付页面

![pay](https://camo.githubusercontent.com/a1163de71279520d46502f4cb44eed94470b75def39a7e7a0ae90e48e97e29d7/68747470733a2f2f6e65776265652d6d616c6c2e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f706f737465722f70726f647563742f77782d7061792e706e67)

