import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from './.stackbit/models';

const sbConfig = {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: Object.values(allModels),
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/',
      },
    }),
  ],
};

export default sbConfig;
