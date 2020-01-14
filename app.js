
angular.module("App",['main']);

angular.module("main",[]);

angular.module("main").controller("mainController",['$scope', '$timeout', function($scope, $timeout) {
    var data = "roger";
    $scope.data = "that";
    $scope.todos = [];
    $scope.id = 0
    $scope.getToDo =(todo) => {
        $scope.todos.push({todo, status: false, id: $scope.id})
        $scope.temp ='';
        $scope.id ++
        
    }
    $scope.updateToDo = (todoId) => {
        $scope.todos = $scope.todos.map(item => {
            if(item.id === todoId) {
                return {...item, status: !item.status, id: todoId}
            }
            else return item
        })
        
    }
    $scope.selectAll = (status) => {
        if(status === 'empty') {
            $scope.todos = [];
        }
        else{
            $scope.todos = $scope.todos.map(item => {
                return {...item, status}
               
            })
        }
        
    }
    $scope.naomi = {
        name: 'ABC',
        address: '1600 Amphitheatre'
    };
    $scope.name = 'Tobias';
    $scope.message = '';
    $scope.hideDialog = function(message) {
        console.log('===========', message)
        $scope.message = message;
        $scope.dialogIsHidden = true;
        $timeout(function() {
        $scope.message = '';
        $scope.dialogIsHidden = false;
        }, 2000);
    };

}])
.directive('myCustomer', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        template:'Name: {{info.name}} Address: {{info.address}}'
      };
  })
  .directive('myDialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'close': '&onClose'
      },
      template:'<div class="alert"><a href class="close" ng-click="close({message: "closing for now"})">&times;</a><div ng-transclude></div></div>'
    };
  });