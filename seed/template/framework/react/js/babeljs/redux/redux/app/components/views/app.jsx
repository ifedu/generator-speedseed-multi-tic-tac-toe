import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import appReducer from './_app.reducer'

import Table from '../table/_table'

const reducer = combineReducers({ appReducer })
const store = createStore(reducer)

render(
    <div>
        <Provider store={store}>
            <Table/>
        </Provider>
    </div>,
    document.getElementsByTagName('ss-table')[0]
)