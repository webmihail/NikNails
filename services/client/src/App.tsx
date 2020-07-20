import React from 'react';
import * as ReactDOM from 'react-dom';

import CalendarPage from './modules/calendar';

const App = () => {
  return (
    <CalendarPage />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
