import React, { Component } from 'react'

import Box from './box/box'

class Table extends Component {
    constructor() {
        super()

        this.state = {
            xo: undefined
        }
    }

    render() {
        return (
            <div className='table'>
                <div className="line">
                    <Box parentState={this.state}></Box>
                    <Box parentState={this.state}></Box>
                    <Box parentState={this.state}></Box>
                </div>

                <div className="line">
                    <Box parentState={this.state}></Box>
                    <Box parentState={this.state}></Box>
                    <Box parentState={this.state}></Box>
                </div>

                <div className="line">
                    <Box parentState={this.state}></Box>
                    <Box parentState={this.state}></Box>
                    <Box parentState={this.state}></Box>
                </div>
            </div>
        )
    }
}

export default Table
