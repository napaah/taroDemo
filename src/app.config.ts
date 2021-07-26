export default {
  pages: [
    'pages/main/guidePage/index',
    'pages/main/homePage/index',
    'pages/main/classifyPage/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: '#8C9198',
    selectedColor: '#F63247',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/main/homePage/index',
        text: '首页',
        iconPath: './assets/icon/tabbar/home.png',
        selectedIconPath: './assets/icon/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/main/classifyPage/index',
        text: '分类',
        iconPath: './assets/icon/tabbar/classify.png',
        selectedIconPath: './assets/icon/tabbar/classify-active.png'
      }
    ]
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  }
}
