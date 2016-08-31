(() => {
    const Table = React.createClass({
        render() {
            return ({%= include('table.render.html') %})
        }
    })

    ReactDOM.render(
        ({%= include('table.dom.html') %}),
        document.getElementsByTagName('ss-table')[0]
    )
})()