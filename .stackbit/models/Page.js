export const Page = {
    name: 'Page',
    type: 'page',
    urlPath: '/{slug}',
    filePath: 'content/pages/{slug}.md',
    hideContent: true,
    fields: [
        {
            type: 'string',
            name: 'title',
            default: 'This is a new page',
            required: true
        },
        {
            type: 'list',
            name: 'sections',
            items: { type: 'model', models: [], groups: ['SectionComponents'] }
        }
    ]
};
