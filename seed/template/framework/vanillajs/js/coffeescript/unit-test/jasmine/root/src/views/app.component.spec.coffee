import 'jasmine'

describe('Component: app', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        expect(check).toBe(true)
    )
)
