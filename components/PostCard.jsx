import * as React from "react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

import { pageUrlPath } from "../utils/page-utils";

export const PostCard = ({ post }) => {
  return (
    <Link href={pageUrlPath(post)}>
      <a data-sb-object-id={post.__metadata.id}>
        <h3 data-sb-field-path=".title">{post.frontmatter.title}</h3>
        {post.frontmatter.excerpt && (
          <Markdown data-sb-field-path=".excerpt">
            {post.frontmatter.excerpt}
          </Markdown>
        )}
      </a>
    </Link>
  );
};
