import React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import 'moment/locale/ru';
import CalendarPage from './modules/calendar';
import { rootReducer } from './rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const App = () => {
  return (
    <Provider store={store}>
      <CalendarPage />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
