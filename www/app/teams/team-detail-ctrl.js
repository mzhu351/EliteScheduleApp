(function () {
  'use strict';

  angular.module('eliteApp').controller('TeamDetailCtrl', ['$stateParams', 'eliteApi',  TeamDetailCtrl]);

  function TeamDetailCtrl($stateParams, eliteApi) {
    var vm = this;
    vm.teamId = Number($stateParams.id);
    var data = eliteApi.getLeagueData();
    console.log('data', data);
    var teams = _.chain(data.teams)
                .flattenDeep('divisionTeams')
        //        .find({"id": vm.teamId })
                .value();
console.log('teams',teams);//3222
////console.log('teamId', vm.teamId);
//var team = _.chain(teams).find('id': vm.teamId);
  // vm.teamName = team.name;
   //console.log('vm.teamName', vm.teamName);
    // vm.games = _.chain(data.games)
    //             .filter(isTeamInGame)
    //             .map(function(item) {
    //               var isTeam1 = (item.team1Id === vm.teamId ? true : false);
    //               //var opponentName = isTeam1 ? item
    //
    //             })
    //             .value();
  };
})();
