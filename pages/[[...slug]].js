import { toFieldPath } from "@stackbit/annotations";

import { DynamicComponent } from "../components/DynamicComponent";
import { Footer } from "../components/layout/Footer";

import { mapProps as mapFooterProps } from "../components/layout/Footer/mapProps";

import { pageUrlPath } from "../utils/page-utils";
import { documentsByType, dataObjectByType } from "../utils/sourcebit-utils";

const allPages = documentsByType("Page");
const siteConfig = dataObjectByType("SiteConfig");

const FlexiblePage = ({ page, footer }) => {
  return (
    <div>
      <div data-sb-object-id={page?.__metadata?.id}>
        <h1 data-sb-field-path="title">{page.frontmatter.title}</h1>

        {page.frontmatter.sections?.length > 0 && (
          <div>
            {page.frontmatter.sections.map((section, index) => (
              <DynamicComponent
                key={index}
                {...section}
                {...toFieldPath(`sections.${index}`)}
              />
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
  const footer = await mapFooterProps(siteConfig.footer);
  return { props: { page, footer } };
};

export const getStaticPaths = async () => {
  return {
    paths: allPages.map((page) => pageUrlPath(page)),
    fallback: false,
  };
};
