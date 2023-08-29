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
    component: ComponentCreator('/docs', '072'),
    routes: [
      {
        path: '/docs/Blueprint',
        component: ComponentCreator('/docs/Blueprint', '89b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/consumer',
        component: ComponentCreator('/docs/category/consumer', 'ff8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/crypto',
        component: ComponentCreator('/docs/category/crypto', '4bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/good',
        component: ComponentCreator('/docs/category/good', '437'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/introduction',
        component: ComponentCreator('/docs/category/introduction', 'd40'),
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
        path: '/docs/category/utilities',
        component: ComponentCreator('/docs/category/utilities', '9d3'),
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
        path: '/docs/Good/Tokenomics',
        component: ComponentCreator('/docs/Good/Tokenomics', 'f0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Utilities/AMM',
        component: ComponentCreator('/docs/Good/Utilities/AMM', '7d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Utilities/Community/Contribution Program',
        component: ComponentCreator('/docs/Good/Utilities/Community/Contribution Program', '3b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Utilities/Community/Grants',
        component: ComponentCreator('/docs/Good/Utilities/Community/Grants', 'fb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Utilities/Community/Liquidity Mining',
        component: ComponentCreator('/docs/Good/Utilities/Community/Liquidity Mining', 'd2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Good/Utilities/Community/Staking',
        component: ComponentCreator('/docs/Good/Utilities/Community/Staking', '863'),
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
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/Goals',
        component: ComponentCreator('/docs/Introduction/Goals', 'e47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/GoSwap',
        component: ComponentCreator('/docs/Introduction/GoSwap', '2a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/Vision',
        component: ComponentCreator('/docs/Introduction/Vision', '077'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/about',
        component: ComponentCreator('/docs/Solutions/about', '151'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Consumer/On & Offramp Solutions',
        component: ComponentCreator('/docs/Solutions/Consumer/On & Offramp Solutions', 'f0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Consumer/Trading & Market Making',
        component: ComponentCreator('/docs/Solutions/Consumer/Trading & Market Making', '883'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Crypto/Chain dApps',
        component: ComponentCreator('/docs/Solutions/Crypto/Chain dApps', '0cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/Crypto/Onboarding',
        component: ComponentCreator('/docs/Solutions/Crypto/Onboarding', '14b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/goals',
        component: ComponentCreator('/docs/Solutions/goals', '7f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Solutions/vision',
        component: ComponentCreator('/docs/Solutions/vision', '4b8'),
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
