(function () {
  'use strict';

  angular.module('eliteApp').controller('teamDetailCtrl', ['$stateParams', 'eliteApi',  teamDetailCtrl]);

  function teamDetailCtrl($stateParams) {
    var vm = this;
  console.log('$stateParams', $stateParams);
    vm.teamId = Number($stateParams.id);
  };
})();
