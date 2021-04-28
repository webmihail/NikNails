import React, { useEffect } from 'react';
import { withFormik, FormikProps } from 'formik';
import * as yup from 'yup';
import { Record } from '../../types';
import styles from './createRecordForm.module.scss';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import SelectField from '../../../common/components/SelectField';
import { getAllPersons } from '../../../../api/persons';
import { createRecords } from '../../../../api/records';
import { InputDelay } from '../../../common/utils';
import { AppStore } from '../../../common/types';
import { Person } from '../../../persons/types';
import { RECORD_STATUS, RECORD_TYPES, RECORD_TYPES_VALUES } from '../../constants';

const inputDelay = new InputDelay();

interface CreateRecordFormOwnProps {
  dispatch: (value: any) => void;
}

const CreateRecordForm = ({
  handleSubmit,
  values,
  setFieldTouched,
  touched,
  errors,
  setFieldValue,
  dispatch,
}: FormikProps<Record> & CreateRecordFormOwnProps) => {
  const recordFormModal = useSelector((state: AppStore) => state.recordFormModal);

  useEffect(() => {
    setFieldValue('time', recordFormModal.data);
  }, [setFieldValue, recordFormModal.data]);

  const persons = useSelector((state: AppStore) => state.persons);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <SelectField
          filterOption={false}
          title="Клиент"
          value={values.personId ? values.personId : undefined}
          allowClear={true}
          showSearch={true}
          dropdownRender={(menu: any) => {
            return (
              <div>
                {menu}
                <div className={styles.selectDropdown}>
                  Всего найдено: {persons && persons.count}
                </div>
              </div>
            );
          }}
          options={
            persons && persons.data
              ? persons.data.map((person: Person) => {
                  return { value: person.id, name: `${person.firstName} ${person.lastName}` };
                })
              : null
          }
          onSearch={(value: any) => {
            inputDelay.onSearch(value, () => {
              dispatch(
                getAllPersons({
                  search: value || null,
                  skip: 0,
                  take: 8,
                }),
              );
            });
          }}
          errorMessage={touched.personId && errors.personId}
          onBlur={() => setFieldTouched('personId')}
          onChange={(value: string) => {
            if (!value) {
              dispatch(
                getAllPersons({
                  search: null,
                  skip: 0,
                  take: 8,
                }),
              );
            }
            setFieldValue('personId', value ? value : '');
          }}
        />

        <SelectField
          title="Тип услуги"
          value={values.type ? values.type : undefined}
          allowClear={true}
          options={[
            { value: RECORD_TYPES.MANICURE, name: RECORD_TYPES_VALUES.MANICURE },
            { value: RECORD_TYPES.PEDICURE, name: RECORD_TYPES_VALUES.PEDICURE },
          ]}
          errorMessage={touched.type && errors.type}
          onBlur={() => setFieldTouched('type')}
          onChange={(value: string) => {
            setFieldValue('type', value ? value : '');
          }}
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

const CreateRecordFormWithFormik = withFormik<CreateRecordFormOwnProps, any>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    personId: null,
    type: RECORD_TYPES.MANICURE,
    status: RECORD_STATUS.FREE,
    time: '',
  }),
  handleSubmit: (values, { props: { dispatch } }) => {
    dispatch(createRecords({ ...values, status: RECORD_STATUS.BUSY }));
  },
  validationSchema: yup.object().shape<any>({
    personId: yup.number().nullable().required('Это поле не может быть пустым!'),
    type: yup.string().required('Это поле не может быть пустым!'),
  }),
  displayName: 'CreateRecordForm',
})(CreateRecordForm);

export default CreateRecordFormWithFormik;
