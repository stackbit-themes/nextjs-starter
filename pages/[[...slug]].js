import Head from 'next/head';

import { DynamicComponent } from '../components/DynamicComponent';
import { Footer } from '../components/Footer';
import { pagesByType, siteConfig, urlToContent } from '../utils/content';

const FlexiblePage = ({ page, siteConfig }) => {
  return (
    <div className="page">
      <Head>
        <title>{page.title}</title>
      </Head>
      <div data-sb-object-id={page.__id}>
        {page.sections?.length > 0 && (
          <div data-sb-field-path="sections">
            {page.sections.map((section, index) => (
              <DynamicComponent
                key={index}
                {...section}
                data-sb-field-path={`.${index}`}
              />
            ))}
          </div>
        )}
      </div>
      <Footer siteConfig={siteConfig} />
    </div>
  );
};

export default FlexiblePage;

export function getStaticProps({ params }) {
  const url = '/' + (params.slug || []).join('/');
  return { props: { page: urlToContent(url), siteConfig: siteConfig() } };
}

export function getStaticPaths() {
  const pages = pagesByType('Page');
  return {
    paths: Object.keys(pages),
    fallback: false,
  };
}
