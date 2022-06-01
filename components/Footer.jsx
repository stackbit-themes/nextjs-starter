import * as React from "react";
import Markdown from "markdown-to-jsx";

export const Footer = ({ body }) => {
  return (
    <footer className="footer outer" data-sb-field-path="content/data/config.json:footer">
      <div className="footer-container inner">
        <Markdown className="footer-content" data-sb-field-path=".body">
          {body}
        </Markdown>
      </div>
    </footer>
  );
};
