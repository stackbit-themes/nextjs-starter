import { toFieldPath } from "@stackbit/annotations";

import { DynamicComponent } from "../components/DynamicComponent";
import { Footer } from "../components/Footer";

import { pageUrlPath } from "../utils/page-utils";
import { documentsByType, dataObjectByType } from "../utils/sourcebit-utils";

const allPages = documentsByType("Page");
const siteConfig = dataObjectByType("SiteConfig");

const FlexiblePage = ({ page, footer }) => {
  return (
    <div className="page-container">
      <div data-sb-object-id={page?.__metadata?.id}>
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

      <div className="page-footer">
        <Footer {...footer} />
      </div>
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
