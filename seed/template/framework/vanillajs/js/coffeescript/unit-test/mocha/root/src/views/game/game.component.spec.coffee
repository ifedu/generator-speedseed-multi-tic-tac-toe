import { assert } from 'chai'

describe('Component: game', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        assert.equal(check, true)
    )
)
