export const SiteConfig = {
  type: 'data',
  name: 'SiteConfig',
  label: 'Site Config',
  readOnly: true,
  singleInstance: true,
  filePath: 'content/data/config.json',
  fields: [
    { type: 'string', name: 'title', label: 'Site Title' },
    {
      type: 'model',
      name: 'footer',
      label: 'Footer Config',
      models: ['FooterConfig'],
    },
  ],
};
