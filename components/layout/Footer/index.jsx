import * as React from "react";

export const Footer = ({ body }) => {
  return (
    <div
      data-sb-field-path="content/data/config.json:footer.body"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};
