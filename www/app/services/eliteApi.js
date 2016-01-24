(function () {
  'use strict';
  angular.module('eliteApp').factory('eliteApi', ['$http','$q', '$ionicLoading', eliteApi]);

  function eliteApi($http, $q, $ionicLoading) {

    var currentLeagueId;

    function getLeagues() {
      var deferred = $q.defer();
      $http.get("http://elite-schedule.net/api/leaguedata")
          .success(function(data) {
            deferred.resolve(data);
          })
          .error(function() {
            console.log("error while making HTTP leaguescall.");
            deferred.reject();
          });
      return deferred.promise;
    }

    function getLeagueData() {
        //  console.log('currentLeagueId', currentLeagueId);
      var deferred = $q.defer();
      $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
            .success(function(data, status){
              console.log('Received schedule data via HTTP.', data);
              deferred.resolve(data);
            })
            .error(function() {
              console.log("error while making HTTP leaguedata call.");
              deferred.reject();
            });
        return deferred.promise;
    }

    function setLeagueId(leagueId) {
      currentLeagueId = leagueId;
    }

    return {
      getLeagues: getLeagues,
      getLeagueData: getLeagueData,
      setLeagueId: setLeagueId
    };
  };
})();
