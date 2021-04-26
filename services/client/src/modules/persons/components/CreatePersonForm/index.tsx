import React from 'react';
import { withFormik, FormikProps } from 'formik';
import * as yup from 'yup';
import styles from './createPersonForm.module.scss';
import { Button } from 'antd';
import InputField from '../../../common/components/InputField';
import { Person } from '../../types';
import { phoneRegExp } from '../../../common/constants';
import { createPerson } from '../../../../api/persons';
import { setRecordsTab } from '../../../records/actions';

interface CreatePersonFormOwnProps {
  dispatch: (value: any) => void;
}

const CreatePersonForm = ({
  handleSubmit,
  values,
  setFieldTouched,
  touched,
  errors,
  setFieldValue,
  dispatch,
}: FormikProps<Person> & CreatePersonFormOwnProps) => {
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
          title="Телефон"
          value={values.phoneNumber}
          errorMessage={touched.phoneNumber && errors.phoneNumber}
          onBlur={() => setFieldTouched('phoneNumber')}
          onChange={(event: any) => setFieldValue('phoneNumber', event.target.value)}
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

const CreatePersonFormWithFormik = withFormik<CreatePersonFormOwnProps, Person>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phoneNumber: '+380',
    firstName: '',
    lastName: '',
  }),
  handleSubmit: (values, { props: { dispatch } }) => {
    dispatch(createPerson(values));
    dispatch(setRecordsTab());
  },
  validationSchema: yup.object().shape<Person>({
    phoneNumber: yup
      .string()
      .required('Это поле не может быть пустым!')
      .matches(phoneRegExp, 'Номер телефона не действительный! (+380..)'),
    firstName: yup.string().required('Это поле не может быть пустым!'),
    lastName: yup.string().required('Это поле не может быть пустым!'),
  }),
  displayName: 'CreatePersonForm',
})(CreatePersonForm);

export default CreatePersonFormWithFormik;
