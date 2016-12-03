import React from 'react'
import ReactDOM from 'react-dom'

import Box from './line/box/_box'

class Table extends React.Component {
    constructor() {
        super()

        this.state = {
            xo: undefined
        }
    }

    render() {
        return ({%= include('table.render.html') %})
    }
}

ReactDOM.render(
    {%= include('table.dom.html') %},
    document.getElementsByTagName('ss-table')[0]
)