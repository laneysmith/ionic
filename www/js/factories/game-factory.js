angular
  .module('dictionaryGame')
  .factory('gameFactory', function(){
    return  {
      test: function () {
        console.log('test')
      }
    }
  })
