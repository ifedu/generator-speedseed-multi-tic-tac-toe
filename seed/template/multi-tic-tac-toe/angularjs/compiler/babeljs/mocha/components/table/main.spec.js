describe('Component: table', () => {
    beforeEach(module('speedseed'))

    let scope
    let ssBox
    let ssBox2
    let ssBoxCtrl
    let ssBoxCtrl2
    let ssTable
    let ssTableCtrl

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new()

        ssTable = angular.element('<ss-table></ss-table>')
        ssTable = $compile(ssTable)(scope)

        ssTableCtrl = ssTable.controller('ssTable')
    }))

    beforeEach(inject(($rootScope, $compile) => {
        ssBox = angular.element(ssTable.find('ss-box')[0])
        ssBox2 = angular.element(ssTable.find('ss-box')[1])
        ssBox = $compile(ssBox)(scope)
        ssBox2 = $compile(ssBox2)(scope)

        ssBoxCtrl = ssBox.controller('ssBox')
        ssBoxCtrl2 = ssBox2.controller('ssBox')

        scope.$apply()
    }))

    const pushed = (ctrl, param) => {
        assert.equal(ssTableCtrl.xo, param)

        ctrl.push()
    }

    it('value global of xo when pushed', () => {
        pushed(ssBoxCtrl, '')
        pushed(ssBoxCtrl2, 'O')
        pushed(ssBoxCtrl2, 'X')
        pushed(ssBoxCtrl, 'O')
        pushed(ssBoxCtrl, 'X')
    })
})