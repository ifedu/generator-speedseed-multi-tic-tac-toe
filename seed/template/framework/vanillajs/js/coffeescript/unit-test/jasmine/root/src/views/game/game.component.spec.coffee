import 'jasmine'

describe('Component: game', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        expect(check).toBe(true)
    )
)
