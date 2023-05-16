import { GitContentSource } from '@stackbit/cms-git';

import { Button } from './.stackbit/models/Button';
import { Card } from './.stackbit/models/Card';
import { Page } from './.stackbit/models/Page';
import { CardGridSection } from './.stackbit/models/CardGridSection';
import { FooterConfig } from './.stackbit/models/FooterConfig';
import { HeroSection } from './.stackbit/models/HeroSection';
import { SiteConfig } from './.stackbit/models/SiteConfig';

export default sbConfig = {
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '16',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [Button, Card, Page, CardGridSection, FooterConfig, HeroSection, SiteConfig],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ]
};