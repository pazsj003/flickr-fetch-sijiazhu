import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'

import {createStore} from "redux";

import {Reducer} from "./reducer";
import ReduxVersion from "./reduxVersion"
import ReactVersion from "./reactVersion"

const Store = createStore(Reducer);


ReactDOM.render(
       // {/*<ReactVersion/>,*/},
       <Provider store={Store}>
        <ReduxVersion/>
       </Provider>,

    document.getElementById("root"),
);
