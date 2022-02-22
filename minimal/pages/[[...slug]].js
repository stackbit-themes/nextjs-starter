import { sourcebitDataClient } from "sourcebit-target-next";
import { withRemoteDataUpdates } from "sourcebit-target-next/with-remote-data-updates";

function Page({ page }) {
  return (
    <div>
      <h1>{page.frontmatter.title}</h1>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const pagePath = "/" + (params?.slug?.join("/") ?? "");
  const page = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
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
