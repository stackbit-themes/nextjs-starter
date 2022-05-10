import { toObjectId, toFieldPath } from "@stackbit/annotations";
import Head from "next/head";

import { DynamicComponent } from "../components/DynamicComponent";
import { Footer } from "../components/Footer";

import { pageUrlPath } from "../utils/page-utils";
import { pagesByLayout, dataByType } from "../utils/sourcebit-utils";

const allPages = pagesByLayout("Page");
const siteConfig = dataByType("SiteConfig");

const FlexiblePage = ({ page, footer }) => {
  return (
    <div className="page">
      <Head>
        <title>{page.frontmatter.title}</title>
      </Head>
      <div {...toObjectId(page?.__metadata?.id)}>
        {page.frontmatter.sections?.length > 0 && (
          <div {...toFieldPath('sections')}>
            {page.frontmatter.sections.map((section, index) => (
              <DynamicComponent key={index} {...section} {...toFieldPath(`.${index}`)} />
            ))}
          </div>
        )}
      </div>
      <Footer {...footer} />
    </div>
  );
};

export default FlexiblePage;

export const getStaticProps = async ({ params }) => {
  const pagePath = "/" + (params?.slug || []).join("/");
  const page = allPages.find((page) => pageUrlPath(page) === pagePath);
  return { props: { page, footer: siteConfig.footer } };
};

export const getStaticPaths = async () => {
  return {
    paths: allPages.map((page) => pageUrlPath(page)),
    fallback: false,
  };
};
