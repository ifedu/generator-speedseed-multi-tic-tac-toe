describe('Component: box', () => {
    beforeEach(module('speedseed'))

    let scope
    let ssBox
    let ssBoxCtrl
    let ssTable

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new()

        ssTable = angular.element('<ss-table></ss-table>')
        ssTable = $compile(ssTable)(scope)
    }))

    beforeEach(inject(($rootScope, $compile) => {
        ssBox = angular.element(ssTable.find('ss-box')[0])
        ssBox = $compile(ssBox)(scope)

        ssBoxCtrl = ssBox.controller('ssBox')

        scope.$apply()
    }))

    const pushed = (param) => {
        assert.equal(ssBoxCtrl.xo, param)

        ssBoxCtrl.push()
    }

    it('value global of xo when pushed', () => {
        pushed(undefined)
        pushed('O')
        pushed('X')
        pushed('O')
        pushed('X')
    })
})