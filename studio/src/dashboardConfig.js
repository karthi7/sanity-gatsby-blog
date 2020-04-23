export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea0db70e0f86b1b2b9b832a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b9cyw3um',
                  apiId: 'e632cf25-a34c-4a18-b1f3-63c20f2478dc'
                },
                {
                  buildHookId: '5ea0db716f21563544e68227',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8aik5gxg',
                  apiId: '5ef7e2dd-09cd-4a80-b232-60106a5662fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karthi7/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8aik5gxg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
