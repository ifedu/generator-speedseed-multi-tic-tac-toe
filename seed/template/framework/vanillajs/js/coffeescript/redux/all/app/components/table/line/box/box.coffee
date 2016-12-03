((components) ->
    mark = 'X'

    for component in components
        component.addEventListener 'mousedown', (e) ->
            img = this.querySelector('img')

            if img.classList.contains('hide') != false
                mark = if (mark == 'X') then 'O' else 'X'

                img.classList.remove('hide')
                img.setAttribute('src', "assets/#{mark}.png")
)(document.getElementsByTagName('ss-box'))