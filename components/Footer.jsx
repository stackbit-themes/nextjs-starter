import * as React from 'react';
import Markdown from 'markdown-to-jsx';

export const Footer = ({ siteConfig }) => {
  const footerObjectId = siteConfig.__id + ':footer';
  return (
    <footer className="mt-12 px-12" data-sb-field-path={footerObjectId}>
      <div className="border-t border-t-gray-500 py-4 mx-auto max-w-3xl">
        <Markdown
          data-sb-field-path=".body"
          options={{
            overrides: { a: { props: { className: 'text-blue underline' } } },
          }}
        >
          {siteConfig.footer.body}
        </Markdown>
      </div>
    </footer>
  );
};
