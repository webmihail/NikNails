import React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import 'moment/locale/ru';
import CalendarPage from './modules/calendar';
import { rootReducer } from './rootReducer';
import Authentication from './modules/authentication';

//react devtools create error for safari
const storeForBrowser = () => {
  if (window.navigator.userAgent.includes('Chrome')) {
    return createStore(
      rootReducer,
      compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
      ),
    );
  } else {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
  }
};

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={storeForBrowser()}>
      <Authentication />
      <CalendarPage />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
