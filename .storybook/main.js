module.exports = {
    // 故事书
    stories: [
        "../components/Introduction.stories.mdx",
        "../components/Install.stories.mdx",
        "../components/Components.stories.mdx",
        "../components/**/*.stories.mdx",
        "../components/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: ['@storybook/addon-essentials'],
};