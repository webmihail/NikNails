import React from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

import styles from './selectField.module.scss';
import InputFieldTitle from '../InputFieldTitle';

type SelectFieldProps = {
  title?: string;
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
  showValue?: boolean;
  options: Array<{ value: string | number; name: string; title?: string }>;
  errorMessage?: string | boolean;
  required?: boolean;
} & SelectProps<any>;

const SelectField = ({
  title,
  required,
  wrapperClassName,
  errorMessage,
  options,
  wrapperStyle,
  ...props
}: SelectFieldProps) => {
  return (
    <InputFieldTitle
      required={required}
      title={title || ''}
      errorMessage={errorMessage}
      style={wrapperStyle}
      className={wrapperClassName}
    >
      <Select {...props} className={styles.select}>
        {options.map((option:any) => (
          <Select.Option key={option.value} value={option.value} title={option.title}>
            {props.showValue ? option.value + ' ' + option.name : option.name}
          </Select.Option>
        ))}
      </Select>
    </InputFieldTitle>
  );
};

export default SelectField;
