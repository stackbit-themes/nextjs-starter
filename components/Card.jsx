import * as React from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

export const Card = (props) => {
  return (
    <Link href={props.url ?? '/'}>
      <a
        className="sb-card border border-primary py-6 px-8 relative transition-all hover:border-primary hover:text-primary"
        data-sb-field-path={props['data-sb-field-path']}
      >
        {props.heading && (
          <h3 className="text-2xl" data-sb-field-path=".heading">
            {props.heading}
          </h3>
        )}
        {props.subheading && (
          <Markdown
            className="card-subheading"
            data-sb-field-path=".subheading"
          >
            {props.subheading}
          </Markdown>
        )}
      </a>
    </Link>
  );
};
