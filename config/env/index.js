/**
 * 服务器配置信息
 */

var logger = require('../log').getLogger('env');
var extend = require('util')._extend;
var base = require('./base');

module.exports = {

  /**
   * 加载配置
   */
  load: function () {
    // 返回配置信息
    var config = extend(base, require('./release/' + base.pattern));
    logger.debug('当前环境：' + base.pattern);
    logger.debug('服务器配置信息：' + JSON.stringify(config));
    return config;
  }
};