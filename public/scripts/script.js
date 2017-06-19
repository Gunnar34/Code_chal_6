//angular module
var app = angular.module('myApp', ['ui.materialize', 'ngRoute']);

//main controller
app.controller('mainController', mainController);

function mainController(commentService){
    console.log('ng');
    var vm = this;
    vm.data = [];

    vm.init = function(){
      getComments();
    };

    function getComments(){
      commentService.checkComments().then(function(res){
        console.log(res);
        vm.data = [];
        for (var i = 0; i < res.data.length; i++) {
          vm.data.push(res.data[i]);
        }
        console.log(vm.data);
      });
    }

    vm.submitComment = function(){
      var comment = vm.comment;
      var user = vm.user;
      var objToSend = {
        user: user,
        comment: comment
      };
      commentService.postComment(objToSend).then(function(res){
        console.log(res);
        getComments();
        vm.user = '';
        vm.comment = '';
      });
    };
}
