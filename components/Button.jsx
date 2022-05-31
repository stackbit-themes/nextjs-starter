import * as React from "react";
import Link from "next/link";

export const Button = (props) => {
  return (
    <Link href={props.url ?? "/"}>
      <a
        data-sb-field-path={props["data-sb-field-path"]}
        className={`button theme-${props.theme}`}
      >
        <span data-sb-field-path=".label">{props.label}</span>
      </a>
    </Link>
  );
};
