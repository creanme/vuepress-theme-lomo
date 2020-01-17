/**
 * 这个函数接受用户在 siteConfig.themeConfig 为第一个参数、包含编译期上下文的 ctx 对象作为第二个参数。
 * @param {*} themeConfig
 * @param {*} ctx
 */
module.exports = (themeConfig, ctx) => {
    return {
        plugins:[
            ['@vuepress/plugin-blog', {
                permalink: '/:regular',
                frontmatters: [
                    {
                        id: 'tags',
                        keys: ['tags'],
                        path: '/tag/',
                        layout: 'Tags',
                        scopeLayout: 'Tag'
                    },
                    {
                        id: 'categories',
                        keys: ['categories'],
                        path: '/categories/',
                        layout: 'Categories',
                        scopeLayout: 'Category'
                    },
                    {
                        id: 'timeline',
                        keys: ['timeline'],
                        path: '/timeline/',
                        layout: 'TimeLines',
                        scopeLayout: 'TimeLine'
                    }
                ]
            }],
        ]
    };
};
