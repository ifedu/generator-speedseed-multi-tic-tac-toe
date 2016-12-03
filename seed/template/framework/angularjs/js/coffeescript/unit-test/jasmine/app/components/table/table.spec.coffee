describe('Component: table', () ->
    beforeEach(module('<%= general.project %>'))

    scope = undefined
    ssBox = undefined
    ssBox2 = undefined
    ssBoxCtrl = undefined
    ssBoxCtrl2 = undefined
    ssTable = undefined
    ssTableCtrl = undefined

    beforeEach(inject(($rootScope, $compile) ->
        scope = $rootScope.$new()

        ssTable = angular.element('<ss-table></ss-table>')
        ssTable = $compile(ssTable)(scope)

        ssTableCtrl = ssTable.controller('ssTable')
    ))

    beforeEach(inject(($rootScope, $compile) ->
        ssBox = angular.element(ssTable.find('ss-box')[0])
        ssBox2 = angular.element(ssTable.find('ss-box')[1])
        ssBox = $compile(ssBox)(scope)
        ssBox2 = $compile(ssBox2)(scope)

        ssBoxCtrl = ssBox.controller('ssBox')
        ssBoxCtrl2 = ssBox2.controller('ssBox')

        scope.$apply()
    ))

    pushed = (ctrl, param) ->
        ctrl.push()

        expect(ssTableCtrl.xo).toBe(param)

    it('value of xo when pushed', () ->
        pushed(ssBoxCtrl, 'O')
        pushed(ssBoxCtrl2, 'X')
    )
)