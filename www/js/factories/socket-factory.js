angular
  .module('dictionaryGame')
  .factory('socketFactory', function(){
      return {
        connect: window.io('localhost:3000')
    }
  })
