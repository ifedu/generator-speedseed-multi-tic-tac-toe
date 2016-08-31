(() => {
    let xo = ''

    const Box = React.createClass({
        click() {
            if (this.imgXO !== undefined) return

            xo = (xo === 'X') ? 'O' : 'X'

            this.imgXO = <img src={`assets/${xo}.png`}/>

            this.setState({imgXO : this.imgXO})
        },

        getInitialState() {
            return {xo}
        },

        render() {
            return ({%= include('box.render.html') %})
        }
    })

    setTimeout(() => {
        for (let i = 0, l = document.getElementsByTagName('ss-box').length; i < l; i++) {
            ReactDOM.render(
                ({%= include('box.dom.html') %}),
                document.getElementsByTagName('ss-box')[i]
            )
        }
    })
})()