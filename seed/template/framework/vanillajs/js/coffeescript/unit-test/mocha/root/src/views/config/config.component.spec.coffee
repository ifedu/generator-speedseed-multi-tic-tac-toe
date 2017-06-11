import { assert } from 'chai'

describe('Component: config', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        assert.equal(check, true)
    )
)
