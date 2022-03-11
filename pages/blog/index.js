import { pagesByLayout } from "../../utils/sourcebit-utils";

const BlogPage = ({ page }) => {
  return (
    <div data-sb-object-id={page?.__metadata?.id}>
      <h1 data-sb-field-path="title">{page.frontmatter.title}</h1>
    </div>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const page = pagesByLayout("Blog")[0];
  return { props: { page } };
};
