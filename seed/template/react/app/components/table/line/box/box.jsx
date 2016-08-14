(() => {
    let mark = ''

    const Box = React.createClass({
        click() {
            mark = (mark === 'X') ? 'O' : 'X'

            this.setState({mark})
        },

        getInitialState() {
            return {mark}
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