module.exports = {
  verbose: true, // 显示详细过程
  testEnvironment: "jest-environment-puppeteer",
  setupFiles: ["./tests/setup.js"], // setup文件路径
  preset: "jest-puppeteer", // 预设
  testMatch: ["**/e2e/*.(spec|test).(j|t)sx"], // 匹配的测试用例文件路径
};
