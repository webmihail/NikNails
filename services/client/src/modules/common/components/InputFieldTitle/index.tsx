import React, { PropsWithChildren } from 'react';
import { Form } from 'antd';
import classnames from 'classnames';

import styles from './inputFieldTitle.module.scss';

interface InputFieldProps {
  title: string;
  errorMessage?: string | boolean;
  required?: boolean;
  style?: any;
  className?: any;
}

const InputFieldTitle = ({
  title,
  required = true,
  errorMessage,
  className,
  children,
  style,
}: PropsWithChildren<InputFieldProps>) => {
  return (
    <div className={classnames([styles.inputWrapper, className])} style={style}>
      <div className={styles.inputInfo}>
        {required && <span className={styles.asterisk}>*</span>} <span>{title}</span>
      </div>
      <Form.Item
        className={errorMessage ? styles.errorMassage : ''}
        validateStatus={errorMessage ? 'error' : undefined}
        help={errorMessage}
      >
        {children}
      </Form.Item>
    </div>
  );
};

export default InputFieldTitle;
