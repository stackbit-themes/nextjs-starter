import { PostCard } from "../../components/PostCard";
import { pagesByLayout } from "../../utils/sourcebit-utils";

const BlogPage = ({ page, posts }) => {
  return (
    <div data-sb-object-id={page?.__metadata?.id}>
      <h1 data-sb-field-path="title">{page.frontmatter.title}</h1>
      {(posts ?? []).map((post) => (
        <PostCard key={post.__metadata.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const page = pagesByLayout("Blog")[0];
  const posts = pagesByLayout("Post").sort((a, b) => new Date(b) - new Date(a));
  return { props: { page, posts } };
};
