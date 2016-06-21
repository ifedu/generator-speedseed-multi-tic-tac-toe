(() => {
    const Table = React.createClass({
        render() {
            return ({%= include('render.html') %})
        }
    })

    ReactDOM.render(
        ({%= include('dom.html') %}),
        document.getElementsByTagName('ss-table')[0]
    )
})()