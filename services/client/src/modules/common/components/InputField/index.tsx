import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import InputFieldTitle from '../InputFieldTitle';

type InputFieldProps = {
  title?: string;
  errorMessage?: string | boolean;
  titleStyle?: React.CSSProperties;
  wrapperClassName?: string;
} & InputProps;

const InputField = ({
  title,
  required,
  wrapperClassName,
  errorMessage,
  titleStyle,
  ...props
}: InputFieldProps) => {
  return (
    <InputFieldTitle
      required={required}
      title={title || ''}
      errorMessage={errorMessage}
      style={titleStyle}
      className={wrapperClassName}
    >
      <Input {...props} />
    </InputFieldTitle>
  );
};

export default InputField;
