import React from 'react'
import ReactDOM from 'react-dom'

class Box extends React.Component {
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
        return ({%= include('box.render.html') %})
    }
}

export default Box