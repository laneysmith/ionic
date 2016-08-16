angular
  .module('dictionaryGame')
  .factory('gameFactory',['$http', function($http){
    return  {
      newGame: (name) => {
        return {
          username: name,
          gameRoom: 'Our Room'
        }
      },
      getPlayers: (id) => {
        $http.get('http://localhost:3000/gameroom/' + id)
        .then(function(data){
          return data
        })
      }
    }
  }])
