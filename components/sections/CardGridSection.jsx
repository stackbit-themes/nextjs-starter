import * as React from "react";
import { toFieldPath, pickDataAttrs } from "@stackbit/annotations";

export const CardGridSection = (props) => {
  return (
    <div {...pickDataAttrs(props)}>
      <span>Card Grid</span>
      <h2 {...toFieldPath(".title")}>{props.title}</h2>
    </div>
  );
};
