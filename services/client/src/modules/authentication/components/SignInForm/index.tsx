import React from 'react';
import { FormikProps, withFormik } from 'formik';
import * as yup from 'yup';
import { SignInProps } from '../../types';
import InputField from '../../../common/components/InputField';
import styles from './signInForm.module.scss';
import { Button } from 'antd';
import { login } from '../../../../api/authentication';

interface SignUpFormOwnProps {
  dispatch: (value: any) => void;
}

const SignInForm = ({
  handleSubmit,
  values,
  setFieldTouched,
  touched,
  errors,
  setFieldValue,
}: FormikProps<SignInProps>) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <InputField
          title="Email"
          value={values.email}
          errorMessage={touched.email && errors.email}
          onBlur={() => setFieldTouched('email')}
          onChange={(event: any) => setFieldValue('email', event.target.value)}
        />
        <InputField
          title="Пароль"
          value={values.password}
          errorMessage={touched.password && errors.password}
          onBlur={() => setFieldTouched('password')}
          onChange={(event: any) => setFieldValue('password', event.target.value)}
        />
      </div>
      <div className={styles.buttonGroup}>
        <Button type="primary" onClick={() => handleSubmit()}>
          Войти
        </Button>
      </div>
    </form>
  );
};

const SignUpFormWithFormik = withFormik<SignUpFormOwnProps, SignInProps>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  handleSubmit: (values, { props: { dispatch } }) => {
    dispatch(login(values));
  },
  validationSchema: yup.object().shape<SignInProps>({
    email: yup.string().email('Не похоже на Email!').required('Это поле не может быть пустым!'),
    password: yup.string().required('Это поле не может быть пустым!'),
  }),
  displayName: 'SignInForm',
})(SignInForm);

export default SignUpFormWithFormik;
