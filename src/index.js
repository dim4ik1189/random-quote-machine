import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteMachine from './components/QuoteMachine';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

const App = () => (
    <div>
        <QuoteMachine />
    </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
