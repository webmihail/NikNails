import React from 'react';
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import 'moment/locale/ru';

import CalendarPage from './modules/calendar';

const App = () => {
  return (
    <CalendarPage />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
