import 'mocha'
import { assert } from 'chai'

describe('Component: score', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        assert.equal(check, true)
    )
)
