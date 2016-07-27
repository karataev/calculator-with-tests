calcApp
  .component('calc', {
    controller: [function() {
      var vm = this;
      
      vm.a = 1;
      vm.b = 1;
      vm.result = undefined;
      
      vm.add = function() {
        vm.result = Number(vm.a) + Number(vm.b);
      }
    }],
    templateUrl: 'calc/calc.html'
  })