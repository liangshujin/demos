var app = angular.module('userList', []);
app.controller('userListController', function($scope, $http) {

	$scope.dialogTitle = '';
	$scope.userData = {};

	$scope.addNewUser = function() {
		$scope.dialogTitle = '新增用户';
		$('#dialog').modal('show');
	};

	$scope.saveUser = function() {
		console.log($scope.userData)
	};

	//////////////////////////////////////////////////////////////

    $http.get("server/ajaxUserList.php")
    .success(function(response) {
    	if (response.success) {
    		$scope.users = response.data;

    	}
    	console.log(response)
    });
});