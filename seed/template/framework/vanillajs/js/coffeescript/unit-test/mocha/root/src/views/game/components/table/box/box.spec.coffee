import { assert } from 'chai'

describe('Component: box', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        assert.equal(check, true)
    )
)
