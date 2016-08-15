angular
  .module('dictionaryGame')
  .factory('socketFactory', function(){
      return {
        connect: window.io('localhost:5000')
    }
  })
