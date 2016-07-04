describe('Component: table', () => {
    beforeEach(module('speedseed'))

    let ssTable
    let ssTableCtrl
    beforeEach(inject(($rootScope, $compile) => {
        const scope = $rootScope.$new()

        ssTable = angular.element('<ss-table></ss-table>')
        ssTable = $compile(ssTable)(scope)

        scope.$apply()
    }))

    beforeEach(() => {
        ssTableCtrl = ssTable.controller('ssTable')
    })

    it('global value of xo', () => {
        expect(ssTableCtrl.xo)
        .toBe('')
    })
})