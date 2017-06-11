import React, { Component } from 'react'

class Box extends Component {
    constructor() {
        super()

        this.state = {
            imgXO: undefined
        }

        this.click = this.click.bind(this)
    }

    click() {
        if (this.state.imgXO !== undefined) return

        this.props.parentState.xo = (this.props.parentState.xo === 'X') ? 'O' : 'X'

        this.setState({
            imgXO: <img src={`assets/${this.props.parentState.xo}.png`}/>
        })
    }

    render() {
        return (
            <ss-box>
                <div
                    className="box"
                    onClick={this.click}
                >
                    {this.state.imgXO}
                </div>
            </ss-box>
        )
    }
}

export default Box
