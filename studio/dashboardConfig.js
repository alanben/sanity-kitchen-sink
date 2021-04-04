export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6069d3931c37ac3d82cc6db1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ry71ahvr',
                  apiId: '81a448ec-6370-45b3-9a88-5e0e7645c153'
                },
                {
                  buildHookId: '6069d3936b4ca27fb390f5ff',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8wdnsdb3',
                  apiId: '699116c9-0a4d-4e67-9b39-6c3d02cb6e0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alanben/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8wdnsdb3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
