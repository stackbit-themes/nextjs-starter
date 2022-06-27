import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import { Card } from './Card';

export const CardGridSection = (props) => {
  return (
    <div
      className="card-grid outer"
      data-sb-field-path={props['data-sb-field-path']}
    >
      <div className="card-grid-container inner">
        {props.heading && (
          <h2 className="card-grid-heading" data-sb-field-path=".heading">
            {props.heading}
          </h2>
        )}
        {props.subheading && (
          <Markdown
            className="card-grid-subheading"
            data-sb-field-path=".subheading"
          >
            {props.subheading}
          </Markdown>
        )}
        {props.cards?.length > 0 && (
          <div className="card-grid-cards" data-sb-field-path=".cards">
            {props.cards.map((card, idx) => (
              <Card {...card} key={idx} data-sb-field-path={`.${idx}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
