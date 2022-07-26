import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import { Card } from './Card';

export const CardGridSection = (props) => {
  return (
    <div
      className="p-12 relative z-10"
      data-sb-field-path={props['data-sb-field-path']}
    >
      <div className="mx-auto max-w-3xl">
        {props.heading && (
          <h2 className="text-4xl" data-sb-field-path=".heading">
            {props.heading}
          </h2>
        )}
        {props.subheading && (
          <Markdown className="text-lg" data-sb-field-path=".subheading">
            {props.subheading}
          </Markdown>
        )}
        {props.cards?.length > 0 && (
          <div
            className="grid md:grid-cols-2 gap-6 mt-12"
            data-sb-field-path=".cards"
          >
            {props.cards.map((card, idx) => (
              <Card {...card} key={idx} data-sb-field-path={`.${idx}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
