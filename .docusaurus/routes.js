import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '598'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'be6'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'e2b'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '50b'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '7dd'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '158'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'ab7'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b0f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'acb'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '6ff'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'cf2'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1cf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6a8'),
    routes: [
      {
        path: '/docs/category/good',
        component: ComponentCreator('/docs/category/good', '437'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/solutions',
        component: ComponentCreator('/docs/category/solutions', '5ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Burn plan',
        component: ComponentCreator('/docs/Good/Burn plan', '6f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Distribution',
        component: ComponentCreator('/docs/Good/Distribution', 'c58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Governance',
        component: ComponentCreator('/docs/Good/Governance', 'c3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Token',
        component: ComponentCreator('/docs/Good/Token', '8a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Tokenomics',
        component: ComponentCreator('/docs/Good/Tokenomics', 'f0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Utilities',
        component: ComponentCreator('/docs/Good/Utilities', 'a68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/GoTrade',
        component: ComponentCreator('/docs/GoTrade', '214'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction',
        component: ComponentCreator('/docs/Introduction', 'de5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Consumer',
        component: ComponentCreator('/docs/Solutions/Consumer', 'fca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Crypto',
        component: ComponentCreator('/docs/Solutions/Crypto', '50a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '783'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
