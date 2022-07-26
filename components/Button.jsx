import * as React from 'react';
import Link from 'next/link';

const classMap = {
  primary: 'bg-secondary border-secondary text-black',
  secondary: 'bg-transparent border-white text-white',
};

export const Button = (props) => {
  return (
    <Link href={props.url ?? '/'}>
      <a
        className={`border rounded-md inline-block text-lg px-6 py-4 transition-all duration-300 hover:opacity-80 ${
          classMap[props.theme ?? 'primary']
        }`}
        data-sb-field-path={props['data-sb-field-path']}
      >
        <span data-sb-field-path=".label">{props.label}</span>
      </a>
    </Link>
  );
};
