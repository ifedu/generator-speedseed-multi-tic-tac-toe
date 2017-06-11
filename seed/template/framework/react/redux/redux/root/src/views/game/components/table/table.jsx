import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as Actions from '../../../app.actions'
import Box from './box/box'

function createBox(table, xo, i) {
    const boxes = []

    for (let j = 0; j < 3; j++) {
        const pos = (i * 3) + j

        boxes.push(<Box actions={this.actions} xo={xo[pos]} pos={pos} key={pos}></Box>)
    }

    table.push(<div className='line' key={i}>{boxes}</div>)
}

function createTable(xo) {
    const table = []

    for (let i = 0; i < 3; i++) {
        createBox.call(this, table, this.props.appReducer.tableXO, i)
    }

    return table
}

@connect((state) => ({
    appReducer: state.appReducer
}))
export default class Table extends Component {
    componentWillMount() {
        this.actions = bindActionCreators(Actions, this.props.dispatch)
    }

    render() {
        const table = createTable.call(this)

        return <div className='table'>{table}</div>
    }
}
