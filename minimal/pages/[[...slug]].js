import { allPages } from "../content/pages";

export function Page({ page }) {
  return (
    <div data-sb-object-id={page?.__metadata?.id}>
      {!page && <p>No page here ...</p>}
      {page?.title && <h1 data-sb-field-path="title">{page?.title}</h1>}
      {page?.body && <p data-sb-field-path="body">{page?.body}</p>}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const pagePath = "/" + (params?.slug?.join("/") ?? "");
  const page = allPages.find((page) => page.__metadata.urlPath === pagePath);
  return { props: { page } };
}

export async function getStaticPaths() {
  return {
    paths: allPages.map((page) => page.__metadata.urlPath),
    fallback: true,
  };
}

export default Page;
