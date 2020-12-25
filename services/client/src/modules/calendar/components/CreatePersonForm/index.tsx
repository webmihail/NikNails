import React from 'react';
import { withFormik, FormikProps } from 'formik';
import * as yup from 'yup';

import styles from './createPersonForm.module.scss';
import { Button } from 'antd';
import { changeModal, setActiveTab } from '../../actions';
import InputField from '../../../common/components/InputField';
import { Person } from '../../types';
import { phoneRegExp } from '../../../common/constants/regExps';
import { createPerson } from '../../../../api/persons';
import { TABS } from '../../constants';

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
          title="Прізвіще"
          value={values.lastName}
          errorMessage={touched.lastName && errors.lastName}
          onBlur={() => setFieldTouched('lastName')}
          onChange={(event: any) => setFieldValue('lastName', event.target.value)}
        />
        <InputField
          title="Iм’я"
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
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              changeModal({
                type: 'CHANGE_FORM_MODAL',
                payload: {
                  isOpen: false,
                  data: '',
                },
              }),
            )
          }
        >
          Закрыть
        </Button>
        <Button type="primary" onClick={() => handleSubmit()}>
          Создать
        </Button>
      </div>
    </form>
  );
};

const CreatePersonFormWithFormik = withFormik<CreatePersonFormOwnProps, any>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    phoneNumber: '+380',
    firstName: '',
    lastName: '',
  }),
  handleSubmit: (values, { props: { dispatch } }) => {
    dispatch(createPerson(values));
    dispatch(
      setActiveTab({
        type: 'CREATE_RECORD_FORM',
        payload: TABS.CREATE_RECORD_FORM,
      }),
    );
  },
  validationSchema: yup.object().shape<any>({
    phoneNumber: yup
      .string()
      .required('Це поле не може бути порожнім!')
      .matches(phoneRegExp, 'Номер телефону недійсний! (+380..)'),
    firstName: yup.string().required('Це поле не може бути порожнім!'),
    lastName: yup.string().required('Це поле не може бути порожнім!'),
  }),
  displayName: 'CreatePersonForm',
})(CreatePersonForm);

export default CreatePersonFormWithFormik;
