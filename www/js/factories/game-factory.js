angular
  .module('dictionaryGame')
  .factory('gameFactory', function(){
    return  {
      newGame: (name) => {
        return {
          username: name,
          gameRoom: 'Our Room'
        }
      }
    }
  })
