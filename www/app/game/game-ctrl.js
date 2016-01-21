(function () {
  'use strict';

  angular.module('eliteApp').controller('GameCtrl', ['$stateParams', 'eliteApi', GameCtrl]);

  function GameCtrl($stateParams, eliteApi) {
console.log('gameCtrl called'. $stateParams);
    var vm = this;

    var gameId = Number($stateParams.id);
    var data = eliteApi.getLeagueData();

    vm.game = _.find(data.games, {"id": gameId});
    console.log('game-ctrl game', vm.game);
    console.log('game-ctrl gameId', gameId);
  };
})();
