module.exports = {
  verbose: true, // 显示详细过程
  testEnvironment: "jsdom", // 测试环境类型
  setupFiles: ["./tests/setup.js"], // setup文件路径
  testMatch: ["**/unit/**/*.(spec|test).(js|ts|jsx|tsx)"], // 匹配的测试用例文件
  collectCoverage: true, // 是否统计覆盖率
  collectCoverageFrom: [
    "components/**/*.(js|ts|jsx|tsx)", // 匹配的文件
    "!components/**/*.stories.(js|ts|jsx|tsx)", // 忽略的文件
    "!components/**/*.(spec|test).(js|ts|jsx|tsx)", // 忽略的文件
  ],
};
