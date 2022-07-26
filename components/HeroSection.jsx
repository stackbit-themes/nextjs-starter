import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import { Button } from './Button';

export const HeroSection = (props) => {
  const paddingClasses = props.styles?.self?.padding ?? [
    'px-12',
    'pt-12',
    'pb-8',
  ];

  return (
    <div
      className={`bg-black text-gray-100 ${paddingClasses.join(' ')}`}
      style={{ backgroundImage: `url('/bg.svg')` }}
      data-sb-field-path={props['data-sb-field-path']}
    >
      <div className="mx-auto max-w-3xl">
        {props.heading && (
          <h1 className="text-5xl md:text-6xl" data-sb-field-path=".heading">
            {props.heading}
          </h1>
        )}
        {props.subheading && (
          <Markdown
            className="mb-12 text-2xl"
            data-sb-field-path=".subheading"
            options={{
              overrides: { a: { props: { className: 'underline' } } },
            }}
          >
            {props.subheading}
          </Markdown>
        )}
        {props.buttons?.length > 0 && (
          <div className="flex flex-wrap gap-4" data-sb-field-path=".buttons">
            {props.buttons.map((button, idx) => (
              <Button {...button} key={idx} data-sb-field-path={`.${idx}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
