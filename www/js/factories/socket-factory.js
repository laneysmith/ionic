angular
  .module('dictionaryGame')
  .factory('socketFactory', function(){
      return {
        connect: function(url) {
          window.io(url)
      }
    }
  })
