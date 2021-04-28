import React from 'react';
import { FormikProps, withFormik } from 'formik';
import * as yup from 'yup';
import { User } from '../../types';
import InputField from '../../../common/components/InputField';
import styles from './signUpForm.module.scss';
import { Button } from 'antd';
import { registration } from '../../../../api/authentication';

interface SignUpFormOwnProps {
  dispatch: (value: any) => void;
}

const SignUpForm = ({
  handleSubmit,
  values,
  setFieldTouched,
  touched,
  errors,
  setFieldValue,
}: FormikProps<User>) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <InputField
          title="Фамилия"
          value={values.lastName}
          errorMessage={touched.lastName && errors.lastName}
          onBlur={() => setFieldTouched('lastName')}
          onChange={(event: any) => setFieldValue('lastName', event.target.value)}
        />
        <InputField
          title="Имя"
          value={values.firstName}
          errorMessage={touched.firstName && errors.firstName}
          onBlur={() => setFieldTouched('firstName')}
          onChange={(event: any) => setFieldValue('firstName', event.target.value)}
        />
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
          Создать
        </Button>
      </div>
    </form>
  );
};

const SignUpFormWithFormik = withFormik<SignUpFormOwnProps, User>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }),
  handleSubmit: (values, { props: { dispatch } }) => {
    dispatch(registration(values));
  },
  validationSchema: yup.object().shape<User>({
    firstName: yup.string().required('Это поле не может быть пустым!'),
    lastName: yup.string().required('Это поле не может быть пустым!'),
    email: yup.string().email('Не похоже на Email!').required('Это поле не может быть пустым!'),
    password: yup.string().required('Это поле не может быть пустым!'),
  }),
  displayName: 'SignUpForm',
})(SignUpForm);

export default SignUpFormWithFormik;
