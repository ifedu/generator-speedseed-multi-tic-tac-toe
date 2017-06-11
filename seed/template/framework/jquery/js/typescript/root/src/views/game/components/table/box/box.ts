import * as $ from 'jquery'

export default (function($component: any) {
    let mark: string = 'X'

    $component.on('mousedown', function() {
        const $img: any = $(this).find('img')

        if ($img.hasClass('hide') === false) return

        mark = (mark === 'X') ? 'O' : 'X'

        $img
        .removeClass('hide')
        .attr('src', `assets/${mark}.png`)
    })
})($('ss-box'))
