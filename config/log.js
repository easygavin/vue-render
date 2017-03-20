/**
 * log4j日志配置
 * @type {*}
 */

var log4js = require('log4js');

/**
 * 初始化配置
 */
var initConfig = function () {

  //配置日志格式
  log4js.configure({
    appenders: [
      {
        type: 'console'  // 控制台输出
      },
      {
        type: 'dateFile',  // 日志文件输出
        filename: '/log/vue/render.log',
        pattern: '_yyyy-MM-dd',  // 日期文件格式
        alwaysIncludePattern: true  // 当天的日志文件名是否加上日期
      }
    ],
    replaceConsole: true  // 替换console.log
  });
};

// 封装日志输出
exports.getLogger = function (loggerName) {
  var logger = log4js.getLogger(loggerName);
  logger.setLevel(log4js.levels.DEBUG);
  return logger;
};

// 封装框架日志输出
exports.use = function (app) {
  initConfig();
  app.use(log4js.connectLogger(this.getLogger('app'), {level: log4js.levels.INFO}));
};
