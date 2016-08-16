angular
  .module('dictionaryGame')
  .factory('gameFactory',['$http', function($http){
    return  {
      newGame: (name) => {
        return {
          username: name,
          gameRoom: 'Our Room'
        }
      }
    }
  }])
