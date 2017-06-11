import 'jasmine'

describe('Component: box', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        expect(check).toBe(true)
    )
)
