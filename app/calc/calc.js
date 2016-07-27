calcApp
  .component('calc', {
    controller: [function() {
      var vm = this;

      var PLUS = '+';
      var MINUS = '-';

      vm.a = 1;
      vm.b = 1;
      vm.result = undefined;
      
      vm.operations = [
        {title: PLUS},
        {title: MINUS}
      ];
      vm.selectedOperation = vm.operations[0];
      
      vm.selectOperation = function(operation) {
        vm.selectedOperation = operation;
      };
      
      vm.calc = function() {
        var aNum = Number(vm.a);
        var bNum = Number(vm.b);
        if (vm.selectedOperation.title === PLUS) {
          vm.result = aNum + bNum;
        } else if (vm.selectedOperation.title === MINUS) {
          vm.result = aNum - bNum;
        }

      }
    }],
    templateUrl: 'calc/calc.html'
  })