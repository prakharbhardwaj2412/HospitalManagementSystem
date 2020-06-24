(function() {

	angular.module('RegisterFormApp', []);

	angular.module('RegisterFormApp')
	.controller('RegisterController', RegisterController);

	
	RegisterController.$inject = [ '$scope', '$http'];
	function RegisterController($scope, $http) {
		var reg = this;
		$scope.docName = "";
		$scope.docEmail= "";
		$scope.docContact= "";
		$scope.docGender = "";
		$scope.docSpeciality = "";
		$scope.Pass1= "";
		$scope.Pass2 = "";


		$scope.onSubmit = function () {


	  	var obj = { "name": $scope.docName,
                "email": $scope.docEmail,
                "phone_no": $scope.docContact,
                "speciality":$scope.docSpeciality,
                "gender": $scope.docGender,
                "password": $scope.Pass1 };

	  	console.log(obj);
	  	var jsnObj = JSON.stringify(obj);
	  	console.log(jsnObj);

	    $http({
	      method: "POST",
	      url: "http://dac49860d95e.ngrok.io/registration/patient/",
	      data: jsnObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var ptnUsername = {"username": $scope.PtnUsrnm}
	        sessionStorage.setItem("username", JSON.stringify(ptnUsername));
	        window.location.assign("DoctorDashboard.html");
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("wrong credientials");
	        // console.log($scope.myWelcome);
	        // console.log(jsnObj);
	      });
	    
	  }





	}









})();