import { sourcebitDataClient } from "sourcebit-target-next";
import { withRemoteDataUpdates } from "sourcebit-target-next/with-remote-data-updates";
import sourcebitCache from "../.sourcebit-nextjs-cache.json";

function Page({ page }) {
  return (
    <div data-sb-object-id={page?.__metadata?.id}>
      <h1 data-sb-field-path="title">{page.frontmatter.title}</h1>
      {page.frontmatter.body && (
        <p data-sb-field-path="body">{page.frontmatter.body}</p>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const pagePath = "/" + (params?.slug?.join("/") ?? "");
  // const page = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
  const page = sourcebitCache.pages.find((page) => page.path === pagePath);
  return { props: { page } };
}

export async function getStaticPaths() {
  const paths = await sourcebitDataClient.getStaticPaths();
  return {
    paths,
    fallback: true,
  };
}

export default withRemoteDataUpdates(Page);
