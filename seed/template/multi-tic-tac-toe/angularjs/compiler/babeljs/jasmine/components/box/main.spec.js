describe('Component: box', () => {
    beforeEach(module('speedseed'))

    let ssBox
    let ssBoxCtrl
    let ssTable
    beforeEach(inject(($rootScope, $compile) => {
        const scope = $rootScope.$new()

        ssTable = angular.element('<ss-table></ss-table>')
        ssTable = $compile(ssTable)(scope)

        scope.$apply()
    }))

    beforeEach(inject(($rootScope, $compile) => {
        const scope = $rootScope.$new()
        ssBox = angular.element(ssTable.find('ss-box')[0])
        ssBox = $compile(ssBox)(scope)

        scope.$apply()

        ssBoxCtrl = ssBox.controller('ssBox')
    }))

    const pushed = (param) => {
        expect(ssBoxCtrl.xo)
        .toBe(param)

        ssBoxCtrl.push()
    }

    it('value of xo when pushed', () => {
        pushed()
        pushed('O')
        pushed('X')
        pushed('O')
        pushed('X')
    })
})