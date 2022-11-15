module.exports = {
  name: 'Page',
  type: 'page',
  urlPath: '/{slug}',
  newFilePath: '{slug}.md',
  hideContent: true,
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
