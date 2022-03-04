import * as React from "react";
import Markdown from "markdown-to-jsx";

export const Footer = ({ body }) => {
  return (
    <div
      className="footer-container"
      data-sb-field-path="content/data/config.json:footer">
      <div data-sb-field-path=".body" className="footer-content">
        <Markdown>{body}</Markdown>
      </div>
    </div>
  );
};
