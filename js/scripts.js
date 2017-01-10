var app = angular.module('myApp', [])

app.controller('myCtrl', function($scope) {
    
    $scope.todos = [{
        name: "A new task!"
    }]
    
    $scope.addTodo = function() {
        var todo = {name: 'My new task'}
        $scope.todos.push(todo)
    }
    
    $scope.removeTodo = function($index) {
        $scope.todos.splice($index, 1)
    }
    
});