import * as React from 'react';
import Markdown from 'markdown-to-jsx';

export const Footer = ({ siteConfig }) => {
  const footerObjectId = siteConfig.__id + ':footer';
  return (
    <footer className="footer outer" data-sb-field-path={footerObjectId}>
      <div className="footer-container inner">
        <Markdown className="footer-content" data-sb-field-path=".body">
          {siteConfig.footer.body}
        </Markdown>
      </div>
    </footer>
  );
};
