import * as React from "react";
import Link from "next/link";
import { toFieldPath, pickDataAttrs } from "@stackbit/annotations";

export const Button = (props) => {
  return (
    <Link href={props.url ?? "/"}>
      <a {...pickDataAttrs(props)} className={`button theme-${props.theme}`}>
        <span {...toFieldPath(".label")}>{props.label}</span>
      </a>
    </Link>
  );
};
