app.service('commentService', function($http) {
  var sv = this;

  sv.checkComments = function(){
    console.log('in comments');
    return $http.get('/comments').then(function(response){
      return (response);
    });
  };

  sv.postComment = function(data){

    return $http.post('/comments', data).then(function(response){
      return (response);
      });
    };
  });
