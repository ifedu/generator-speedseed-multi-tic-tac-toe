export default (function(components: any) {
    let mark = 'X'

    for (let component of components) {
        component.addEventListener('mousedown', function (e) {
            const img = this.querySelector('img')

            if (img.classList.contains('hide') === false) return

            mark = (mark === 'X') ? 'O' : 'X'

            img.classList.remove('hide')
            img.setAttribute('src', `assets/${mark}.png`)
        })
    }
})(document.getElementsByTagName('ss-box'))
