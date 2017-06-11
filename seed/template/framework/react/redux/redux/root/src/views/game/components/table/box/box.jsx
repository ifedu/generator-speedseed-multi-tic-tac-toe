import React, { Component } from 'react'

export default class Box extends Component {
    clickBox = () => {
        this.props.actions.push(this.props)
    }

    render() {
        const img = (this.props.xo)
            ? <img src={`assets/${this.props.xo}.png`}/>
            : ''

        return <ss-box>
            <div
                className="box"
                onClick={this.clickBox}
            >
               {img}
            </div>
        </ss-box>
    }
}
