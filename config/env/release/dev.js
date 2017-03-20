module.exports = {
  // sockets 配置
  sockets: {
    // 行情socket配置
    quote: {
      url: 'http://220.241.167.67:7035',
      code: 16
    },
    // 交易socket配置
    trade: {
      url: 'http://220.241.167.67:7081',//192.168.75.87
      code: 9
    },
    // 配置中心socket配置
    center: {
      url: 'http://113.28.105.93:3002'
    },
    // 直播间
    chat: {
      url: 'http://192.168.35.91:3006/hxstudio'
    }
  }
};