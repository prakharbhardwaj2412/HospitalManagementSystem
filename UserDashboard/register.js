(function () {

angular.module('RegisterFormApp', []);

angular.module('RegisterFormApp')
.controller('RegisterController', RegisterController);

RegisterController.$inject = [ '$scope', '$http'];
function RegisterController($scope, $http) {


	  $scope.PtnName = "";
	  $scope.Email= "";
	  $scope.ContactNo= "";
	  $scope.Dob= "";
	  $scope.Height= "";
	  $scope.Weight= "";
	  $scope.BloodGp= "";
	  $scope.Pass1= "";
	  $scope.Pass2 = "";

	  $scope.onSubmit = function () {

	  	var obj = { "name": $scope.PtnName,
                "email": $scope.Email,
                "contact": $scope.ContactNo,
                "dob": $scope.Dob,
                "height": $scope.Height,
                "weight": $scope.Weight,
                "blood": $scope.BloodGp,
                "pass1": $scope.Pass1,
                "pass2": $scope.Pass2 };
	  	console.log(obj);
	  	var jsnObj = JSON.stringify(obj);
	  	console.log(jsnObj);

	    // $http({
	    //   method: "POST",
	    //   url: "#",
	    //   data: jsnObj
	    // })
	    // .then(
	    //   function Success(response){
	    //     $scope.myWelcome = response.data;
	    //     console.log($scope.myWelcome);
	    //     window.location.assign("dashboard.html");
	    //   }, 
	    //  function Error(response){
	    //     $scope.myWelcome = response.statusText;
	    //     window.alert("wrong credientials");
	    //     console.log($scope.myWelcome);
	    //     console.log(jsnObj);
	    //   });
	    
	  }
	}

})();