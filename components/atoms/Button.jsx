import * as React from "react";
import { toFieldPath, pickDataAttrs } from "@stackbit/annotations";

export const Button = (props) => {
  return (
    <p {...pickDataAttrs(props)}>
      Label: {props.label} // URL: {props.url} // Theme: {props.theme}
    </p>
  );
};
