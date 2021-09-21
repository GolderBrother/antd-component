import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
// 为了使用 jestPuppeteer 相关的一些自动化测试方法
import 'jest-environment-puppeteer';
import Button from '..';

const toMatchSnapshot = configureToMatchImageSnapshot({
	customSnapshotsDir: `${process.cwd()}/snapshots`,
	customDiffDir: `${process.cwd()}/snapshots`,
});
expect.extend({
	toMatchSnapshot
});

describe('Button snapshot', () => {
	it('screenshot should correct', async () => {
		// 刷新重置页面
		await jestPuppeteer.resetPage();
		// 打开页面
		await page.goto(`file:///Users/zhangyaohuang/${process.cwd()}/tests/index.html`);
		// 渲染成html字符串
		const html = ReactDOMServer.renderToString(<Button>按钮</Button>);
		// html字符串注入根节点
		await page.evaluate((innerHTML: string) => {
			document.querySelector('#root')!.innerHTML = innerHTML;
		}, html);
		// 生成屏幕快照
		const screenshot = await page.screenshot();
		expect(screenshot).toMatchSnapshot();
	})
});