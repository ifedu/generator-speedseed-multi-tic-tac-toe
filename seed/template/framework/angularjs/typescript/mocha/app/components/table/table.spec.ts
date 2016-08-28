/// <reference path="../../../typings/index.d.ts" />

describe('Component: table', () => {
    beforeEach(module('<%= general.project %>'))

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
        ctrl.push()

        assert.equal(ssTableCtrl.xo, param)
    }

    it('value global of xo when pushed', () => {
        pushed(ssBoxCtrl, 'O')
        pushed(ssBoxCtrl2, 'X')
    })
})