(function () {
  'use strict';

  angular.module('eliteApp').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

  function TeamsCtrl(eliteApi) {
    var vm = this;

    eliteApi.getLeagueData(function(data) {
      vm.teams = data.teams;
    });
    vm.teams = data.teams;
  };
})();
