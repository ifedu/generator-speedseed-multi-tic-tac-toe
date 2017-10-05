import 'mocha'
import { assert } from 'chai'

describe('Component: user', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        assert.equal(check, true)
    )
)
