import * as React from "react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { toFieldPath, pickDataAttrs } from "@stackbit/annotations";

export const Card = (props) => {
  return (
    <Link href={props.url ?? "/"}>
      <a {...pickDataAttrs(props)} className="card-container">
        <h3 {...toFieldPath(".heading")} className="card-heading">
          {props.heading}
        </h3>
        {props.subheading && (
          <Markdown {...toFieldPath(".subheading")} className="card-subheading">
            {props.subheading}
          </Markdown>
        )}
      </a>
    </Link>
  );
};
