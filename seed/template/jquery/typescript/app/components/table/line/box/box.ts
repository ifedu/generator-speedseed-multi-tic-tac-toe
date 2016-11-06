/// <reference path="../../../../../typings/index.d.ts" />

(($component) => {
    let mark = 'X'

    $component.on('mousedown', function() {
        const $img = $(this).find('img')

        if ($img.hasClass('hide') === false) return

        mark = (mark === 'X') ? 'O' : 'X'

        $img
        .removeClass('hide')
        .attr('src', `assets/${mark}.png`)
    })
})($('ss-box'))