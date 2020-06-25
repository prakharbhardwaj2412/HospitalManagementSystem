(function() {

	angular.module('RegisterFormApp', []);

	angular.module('RegisterFormApp')
	.controller('RegisterController', RegisterController);

	
	RegisterController.$inject = [ '$scope', '$http'];
	function RegisterController($scope, $http) {
		var reg = this;
		$scope.docName = "";
		$scope.docUsername= "";
		$scope.docEmail= "";
		$scope.docContact= "";
		$scope.docDob= "";
		$scope.docGender = "Male";
		$scope.docSpeciality = "";
		$scope.docPass1= "";
		$scope.docPass2 = "";


		$scope.UsernameCheck = function () {

		  	var userObj = JSON.stringify({ "username": $scope.docUsername });

		  	$http({
		      method: "POST",
		      url: "http://3f50481e0f7a.ngrok.io/registration/check_username/",
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
		        else if (Resp == "unique") {
		        	$scope.UsernameMessage = "";
		        }
		      }, 
		     function Error(response){
		        $scope.myWelcome = response.statusText;
		        console.log($scope.myWelcome);
		      });
	    };


		$scope.onSubmit = function () {

		var dob = document.getElementById("docDob").value;
		console.log(dob);

	  	var obj = { "name": $scope.docName,
	  			"username": $scope.docUsername,
                "email": $scope.docEmail,
                "phone_no": $scope.docContact,
                "department":$scope.docSpeciality,
                "dob": dob,
                "gender": $scope.docGender,
                "password": $scope.docPass1 };

	  	console.log(obj);
	  	var jsnObj = JSON.stringify(obj);
	  	console.log(jsnObj);

	    $http({
	      method: "POST",
	      url: "http://3f50481e0f7a.ngrok.io/registration/doctor/",
	      data: jsnObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var ptnUsername = {"username": $scope.PtnUsrnm}
	        sessionStorage.setItem("DoctorUsername", JSON.stringify(ptnUsername));
	        window.location.assign("DoctorDashboard.html");
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("unable to process request");
	        // console.log($scope.myWelcome);
	        // console.log(jsnObj);
	      });
	    
	  }





	}









})();