describe('Component: box', () ->
    beforeEach(module('<%= general.project %>'))

    scope = undefined
    ssBox = undefined
    ssBoxCtrl = undefined
    ssTable = undefined

    beforeEach(inject(($rootScope, $compile) ->
        scope = $rootScope.$new()

        ssTable = angular.element('<ss-table></ss-table>')
        ssTable = $compile(ssTable)(scope)
    ))

    beforeEach(inject(($rootScope, $compile) ->
        ssBox = angular.element(ssTable.find('ss-box')[0])
        ssBox = $compile(ssBox)(scope)

        ssBoxCtrl = ssBox.controller('ssBox')

        scope.$apply()
    ))

    pushed = (param) ->
        ssBoxCtrl.push()

        expect(ssBoxCtrl.xo).toBe(param)

    it('value of xo when pushed', () ->
        pushed('O')
        pushed('O')
    )
)