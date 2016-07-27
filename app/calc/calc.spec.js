'use strict';
describe('Calc component', function() {

  var controller;
  var scope;
  beforeEach(module('calcApp'));
  beforeEach(inject(function($rootScope, $componentController){
    scope = $rootScope.$new();
    controller = $componentController('calc', {$scope: scope});
  }));

  it('should be attached to the scope', function() {
    expect(scope.$ctrl).toBe(controller);
  });

  /*
    it('should be the first test', function() {
      var a = 1;
      var b = 1;
      expect(a).toEqual(b);
    })
  */
})