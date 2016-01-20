(function () {
  'use strict';

  angular.module('eliteApp').controller('TeamDetailCtrl', ['$stateParams', 'eliteApi',  TeamDetailCtrl]);

  function TeamDetailCtrl($stateParams, eliteApi) {
    var vm = this;
  //  console.log('$tateParams', $stateParams);
    vm.teamId = Number($stateParams.id);
    var data = eliteApi.getLeagueData();
    console.log('data', data.teams);

    var team = _.chain(data.teams)
                .flattenDeep('divisionTeams')
        //        .find({"id": vm.teamId })
                .value();
console.log('teamId', vm.teamId);
    //vm.teamName = team.name;
    vm.teamName = "Columbia Ravens 5th";

    vm.games = _.chain(data.games)
                .filter(isTeamInGame)
                .map(function(item) {
                  var isTeam1 = (item.team1Id === vm.teamId ? true : false);
                  var opponentName = isTeam1 ? item.team2 : item.team1;
                  var team2Score = 40;
                  var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, team2Score);

                  return {
                    game: item.id,
                    opponent: opponentName,
                    time: item.time,
                    location: item.location,
                    locationUrl: item.locationUrl,
                    scoreDisplay: scoreDisplay,
                    homeAway: (isTeam1 ? "vs." : "at")
                  };
                })
                .value();
    console.log('vm.games', vm.games);
    vm.teamStanding = _.chain(data.standings)
                       .flatten("divisionStandings")
                       .find({"teamId": vm.teamId})
                       .value();

    function isTeamInGame(item) {
      return item.teamId === vm.team1Id || item.team2Id === vm.teamId;
    }
    function getScoreDisplay(isTeam1, team1Score, team2Score) {
      if (team1Score && team2Score) {
        var teamScore = (isTeam1 ? team1Score : team2Score);
        var opponentScore = (isTeam1 ? team2Score : team1Score);
        var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
        console.log('scores', winIndicator + teamScore + "-" + opponentScore);
        return winIndicator + teamScore + "-" + opponentScore;
      }
      else {
        console.log('@@@@@@@@@@@@',team2Score);
        return "";
      }
    }
  };
})();
