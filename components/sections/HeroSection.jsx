import * as React from "react";
import { toFieldPath, pickDataAttrs } from "@stackbit/annotations";

export const HeroSection = (props) => {
  return (
    <div {...pickDataAttrs(props)}>
      <span>Hero Section</span>
      <h2 {...toFieldPath(".title")}>{props.title}</h2>
    </div>
  );
};
