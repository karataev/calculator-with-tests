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

  it('should add two numbers correctly', function() {
    $ctrl.a = '10';
    $ctrl.b = '20';
    $ctrl.add();
    expect($ctrl.result).toBe(30);
  })
})