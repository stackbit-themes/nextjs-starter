import * as React from "react";
import Markdown from "markdown-to-jsx";
import { toFieldPath, pickDataAttrs } from "@stackbit/annotations";

import { Card } from "./Card";

export const CardGridSection = (props) => {
  return (
    <div className="card-grid outer" {...pickDataAttrs(props)}>
      <div className="card-grid-container inner">
        {props.heading && (
          <h2 className="card-grid-heading" {...toFieldPath(".heading")} >
            {props.heading}
          </h2>
        )}
        {props.subheading && (
          <Markdown className="card-grid-subheading" {...toFieldPath(".subheading")}>
            {props.subheading}
          </Markdown>
        )}
        {props.cards?.length > 0 && (
          <div className="card-grid-cards" {...toFieldPath(".cards")}>
            {props.cards.map((card, idx) => (
              <Card {...card} key={idx} {...toFieldPath(`.${idx}`)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
