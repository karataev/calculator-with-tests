'use strict';
describe('Calc component', function() {

  var controller;
  var scope;
  var $ctrl;
  beforeEach(module('calcApp'));
  beforeEach(inject(function($rootScope, $componentController){
    scope = $rootScope.$new();
    controller = $componentController('calc', {$scope: scope});
    $ctrl = scope.$ctrl;
  }));

  it('should be attached to the scope', function() {
    expect(scope.$ctrl).toBe(controller);
  });

  it('variables should have defaults', function() {
    expect($ctrl.a).toEqual(1);
    expect($ctrl.b).toEqual(1);
    expect($ctrl.result).toBeUndefined();
  })
})