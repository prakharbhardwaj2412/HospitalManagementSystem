(function () {

angular.module('RegisterFormApp', []);

angular.module('RegisterFormApp')
.controller('RegisterController', RegisterController);

RegisterController.$inject = [ '$scope', '$http'];
function RegisterController($scope, $http) {

	  $scope.PtnName = "";
	  $scope.PtnUsrnm = "";
	  $scope.Email= "";
	  $scope.ContactNo= "";
	  $scope.Dob= "";
	  $scope.Height= "";
	  $scope.Weight= "";
	  $scope.BloodGp= "";
	  $scope.Gender = "";
	  $scope.Address = "";
	  $scope.Pass1= "";
	  $scope.Pass2 = "";

	  sessionStorage.clear();

	  $scope.UsernameCheck = function () {

	  	var userObj = JSON.stringify({ "username": $scope.PtnUsrnm });

	  	$http({
	      method: "POST",
	      url: "http://fd0c4ca9e6a0.ngrok.io/registration/check_username/",
	      data: userObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var Resp = $scope.myWelcome;
	        if (Resp == "This username is already taken") {
	        	$scope.UsernameMessage = "This username is taken";
	        }
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        console.log($scope.myWelcome);
	      });
	  };

	  $scope.onSubmit = function () {

	  	var dob = document.getElementById("Dob").value;
	  	console.log(dob);

	  	var obj = { "name": $scope.PtnName,
	  			"username": $scope.PtnUsrnm,
                "email": $scope.Email,
                "phone_no": $scope.ContactNo,
                "dob": dob,
                "height": $scope.Height,
                "weight": $scope.Weight,
                "blood": $scope.BloodGp,
                "gender": $scope.Gender,
                "password": $scope.Pass1 };

	  	console.log(obj);
	  	var jsnObj = JSON.stringify(obj);
	  	console.log(jsnObj);

	    $http({
	      method: "POST",
	      url: "http://fd0c4ca9e6a0.ngrok.io/registration/patient/",
	      data: jsnObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var ptnUsername = {"username": $scope.PtnUsrnm}
	        sessionStorage.setItem("PatientUsername", JSON.stringify(ptnUsername));
	        window.location.assign("UserDashboard.html");
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("wrong credientials");
	      });
	    
	  }
	}

})();