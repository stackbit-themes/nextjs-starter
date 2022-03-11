import * as React from "react";
import Markdown from "markdown-to-jsx";

import { PostCard } from "./PostCard";

import { mapStyles } from "../utils/style-mapper";

export const PostFeed = (props) => {
  return (
    <div
      data-sb-field-path={props["data-sb-field-path"]}
      className={mapStyles(props.styles.self)}>
      <h2
        data-sb-field-path=".heading"
        className={mapStyles(props.styles.heading)}>
        {props.heading}
      </h2>
      {props.subheading && (
        <Markdown data-sb-field-path=".subheading">{props.subheading}</Markdown>
      )}
      <div>
        {(props.posts ?? []).map((post) => (
          <PostCard key={post.__metadata.id} post={post} />
        ))}
      </div>
    </div>
  );
};
