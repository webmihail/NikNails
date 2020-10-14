import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import styles from './inputField.module.scss';
import InputFieldTitle from '../InputFieldTitle';
import Icon from '@ant-design/icons';

type InputFieldProps = {
  title?: string;
  iconType?: string;
  errorMessage?: string | boolean;
  titleStyle?: React.CSSProperties;
  wrapperClassName?: string;
  suffix?: React.ReactNode;
} & InputProps;

const InputField = ({
  title,
  required,
  iconType,
  wrapperClassName,
  errorMessage,
  suffix,
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
      <Input
        {...props}
        suffix={
          errorMessage ? (
            <Icon className={styles.suffixIco} type="warning" />
          ) : suffix ? (
            suffix
          ) : (
            <span />
          )
        }
      />
    </InputFieldTitle>
  );
};

export default InputField;
