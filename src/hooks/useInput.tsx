import React, { ReactNode, useState } from 'react';

type UseInputProps = {
  initialValue: any;
  type: string;
  name: string;
  [key: string]: any;
};

export const useInput = ({ initialValue, type, name, ...props}: UseInputProps): [any, ReactNode] => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const input = <input
    onChange={handleChange}
    name={name}
    value={value}
    type={type}
    {...props}
  />;

  return [value, input];
};
