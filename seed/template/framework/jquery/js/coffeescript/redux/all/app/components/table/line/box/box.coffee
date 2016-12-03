(($component) =>
    mark = 'X'

    $component.on('mousedown', () ->
        $img = $(this).find('img')

        if $img.hasClass('hide') != false
            mark = if (mark == 'X') then 'O' else 'X'

            $img
            .removeClass('hide')
            .attr('src', "assets/#{mark}.png")
    )
)($('ss-box'))