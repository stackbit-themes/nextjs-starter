import * as React from 'react';
import Link from 'next/link';

export const Button = (props) => {
  return (
    <Link href={props.url ?? '/'}>
      <a
        className={`button theme-${props.theme}`}
        data-sb-field-path={props['data-sb-field-path']}
      >
        <span data-sb-field-path=".label">{props.label}</span>
      </a>
    </Link>
  );
};
