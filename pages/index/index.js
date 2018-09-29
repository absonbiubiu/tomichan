//index.js
//获取应用实例
const app = getApp()

import HomeData from '../../mockData/homeData.js'

Page({
  data: {
    homeData: HomeData,
    bannerList: [
      '../../assets/images/banner_01.png',
      '../../assets/images/banner_02.png',
      '../../assets/images/banner_03.png',
      '../../assets/images/banner_04.png'
    ],
    indicatorDots: true, //  是否显示面板指示点
    autoplay: true, // 是否自动切换
    circular: true, // 是否采用衔接滑动
    interval: 5000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    indicatorColor: "#fff",
    indicatorActiveColor: "#ffdbed"
  },
  onLoad: function () {

  }
})
