export const Page = {
  type: 'page',
  name: 'Page',
  label: 'Page',
  labelField: 'title',
  hideContent: true,
  urlPath: '/{slug}',
  filePath: 'content/pages/{slug}.md',
  fields: [
    {
      type: 'string',
      name: 'title',
      default: 'This is a new page',
      required: true,
    },
    {
      type: 'list',
      name: 'sections',
      items: { type: 'model', groups: ['SectionComponents'] },
    },
  ],
};
