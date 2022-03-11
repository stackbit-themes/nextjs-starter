import Markdown from "markdown-to-jsx";

import { pageUrlPath } from "../../utils/page-utils";
import { pagesByLayout } from "../../utils/sourcebit-utils";

const allPosts = pagesByLayout("Post");

const FlexiblePage = ({ post }) => {
  return (
    <div data-sb-object-id={post?.__metadata?.id}>
      <h1 data-sb-field-path="title">{post.frontmatter.title}</h1>
      <Markdown data-sb-field-path="markdown_content">{post.markdown}</Markdown>
    </div>
  );
};

export default FlexiblePage;

export const getStaticProps = async ({ params }) => {
  const currentPath = `/blog/${params.slug}`;
  const post = allPosts.find((page) => pageUrlPath(page) === currentPath);
  return { props: { post } };
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((page) => pageUrlPath(page)),
    fallback: false,
  };
};
