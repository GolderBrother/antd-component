/* eslint-disable import/no-extraneous-dependencies */
// const React = require("react");
const Enzyme = require("enzyme");
// 添加适配器
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

Enzyme.configure({
  adapter: Adapter,
});
