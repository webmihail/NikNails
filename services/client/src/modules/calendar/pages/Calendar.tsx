import React from 'react';
import CreateRecordModal from '../../records/components/CreateRecordModal';
import InfoRecordModal from '../../records/components/InfoRecordModal';

import Calendar from '../components/Calendar';

const CalendarPage = () => {
  return (
    <div>
      <Calendar />
      <CreateRecordModal />
      <InfoRecordModal />
    </div>
  );
};

export default CalendarPage;
