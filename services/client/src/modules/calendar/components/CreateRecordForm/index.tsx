import React, { useEffect } from 'react';
import { withFormik, FormikProps } from 'formik';
import * as yup from 'yup';

import styles from './createRecordForm.module.scss';
import { Button } from 'antd';
import { changeModal } from '../../actions';
import { useSelector } from 'react-redux';
import { Person, Record, RootState } from '../../types';
import SelectField from '../../../common/components/SelectField';
import { getAllPersons } from '../../../../api/persons/actions';

interface CreateRecordFormOwnProps {
  dispatch: (value: any) => void
}

const CreateRecordForm = ({
  handleSubmit,
  values,
  setFieldTouched,
  touched,
  errors,
  setFieldValue,
  dispatch
}: FormikProps<Record> & CreateRecordFormOwnProps) => {
  const recordFormModal = useSelector((state: RootState) => state.recordFormModal);

  useEffect(() => {
    setFieldValue('time', recordFormModal.data)
    dispatch(getAllPersons());
  }, [dispatch, setFieldValue, recordFormModal.data])

  const persons = useSelector((state: RootState) => state.persons);
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <SelectField 
          title="Клиент"
          value={values.personId ? values.personId : undefined} 
          allowClear={true}
          options={persons ? persons.map((person: Person) => {
            return { value: person.id, name: `${person.firstName} ${person.lastName}`}
          }) : null}
          errorMessage={touched.personId && errors.personId}
          onBlur={() => setFieldTouched('personId')}
          onChange={(value: string) => {setFieldValue('personId', value ? value : '')}}
        />

        <SelectField 
          title="Тип услуги"
          value={values.type ? values.type : undefined} 
          allowClear={true}
          options={[
            {value: 'MANICURE', name: 'Маникюр'},
            {value: 'PEDICURE', name: 'Педикюр'}
          ]}
          errorMessage={touched.type && errors.type}
          onBlur={() => setFieldTouched('type')}
          onChange={(value: string) => {setFieldValue('type', value ? value : '')}}
        />
      </div>

      <div className={styles.buttonGroup}>
        <Button type="primary" onClick={() => dispatch(changeModal(
          {type: 'CHANGE_FORM_MODAL', payload: {
            isOpen: false,
            data: ''
          }}))}>Закрыть</Button>
        <Button
          type="primary"
          onClick={() => handleSubmit()}
        >
          Создать
        </Button>
      </div>
    </form>
  );
};

const CreateRecordFormWithFormik = withFormik<CreateRecordFormOwnProps, any>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    personId: null,
    type: 'MANICURE',
    status: 'FREE',
    time: ''
  }),
  handleSubmit: (values, { props:{ dispatch } }) => {
    console.log({...values, status: 'BUSY'})
    dispatch(changeModal(
      {type: 'CHANGE_FORM_MODAL', payload: {
        isOpen: false,
        data: ''
      }})
    );
  },
  validationSchema: yup.object().shape<any>({
    personId: yup.number().nullable().required('Це поле не може бути порожнім!'),
    type: yup.string().required('Це поле не може бути порожнім!')
  }),
  displayName: 'CreateRecordForm'
})(CreateRecordForm);

export default CreateRecordFormWithFormik;
