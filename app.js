var app = angular.module('app', ['ui.grid', 'ui.grid.cellNav', 'ui.grid.edit']);

app.controller('main',
    ['$scope', '$http',
        function ($scope, $http) {

            $scope.gridOptions = {};

            $scope.gridOptions.columnDefs = [
                { name: 'director', width: '250'},
                { name: 'title', width: '250'},
                { name: 'rating', width: '250'}
            ];

            $http.get('data.json').success(function(data){
                $scope.gridOptions.data = data;
            });


        }]);