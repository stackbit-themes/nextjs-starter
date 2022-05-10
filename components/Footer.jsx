import * as React from "react";
import { toFieldPath } from '@stackbit/annotations';
import Markdown from "markdown-to-jsx";

export const Footer = ({ body }) => {
  return (
    <footer className="footer outer" {...toFieldPath('content/data/config.json:footer')}>
      <div className="footer-container inner">
          <Markdown className="footer-content" {...toFieldPath('.body')}>{body}</Markdown>
      </div>
    </footer>
  );
};
