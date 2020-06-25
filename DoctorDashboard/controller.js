(function () {


	angular.module('DoctorApp')
    .controller('mainController', mainController);
	angular.module('DoctorApp')
	.controller('homeController', homeController);
	angular.module('DoctorApp')
	.controller('patientListController', patientListController);
	angular.module('DoctorApp')
	.controller('patientEditController', patientEditController);
	// angular.module('DoctorApp')
	// .controller('historyController', historyController);
	// angular.module('DoctorApp')
	// .controller('listController', listController);
	// angular.module('DoctorApp')
	// .controller('profileController', profileController);
	angular.module('DoctorApp')
	.controller('appointmentRequestController', appointmentRequestController);

     // main controller
	mainController.$inject = [ '$scope', '$http'];
	function mainController($scope, $http){
		var idObj = sessionStorage.getItem("doctorId");
		// console.log(idObj);


		$http({
	      method: "POST",
	      url: "http://990fd1c56ace.ngrok.io/appointment/doctor/requests/",
	      data: idObj
	    })
	    .then(
	      function Success(response){
	        $scope.appList = response.data;
	        console.log($scope.appList);
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	    $scope.view = function(id) {
	    	sessionStorage.setItem("id", JSON.stringify({"id": id}))
	    	// console.log(sessionStorage.getItem("id"));
	    }
	}

	// home controller
	homeController.$inject = [ '$scope', '$http'];
	function homeController($scope, $http){
		var usernameObj = sessionStorage.getItem("doctorUsername");
		// console.log(usernameObj);


		$http({
	      method: "POST",
	      url: "http://990fd1c56ace.ngrok.io/doctor/dashboard/",
	      data: usernameObj
	    })
	    .then(
	      function Success(response){
	        $scope.docDetails = response.data;
	        // console.log($scope.docDetails);
	        var id = JSON.stringify({"id": $scope.docDetails[0].id});
	        // console.log(id);
	        sessionStorage.setItem("doctorId", id);
	        // console.log(sessionStorage.getItem("doctorId"));
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	// patientListController
	patientListController.$inject = [ '$scope', '$http'];
	function patientListController($scope, $http){
		var idObj = sessionStorage.getItem("doctorId");
		console.log(idObj);


		$http({
	      method: "POST",
	      url: "http://990fd1c56ace.ngrok.io/doctor/patient_list/",
	      data: idObj
	    })
	    .then(
	      function Success(response){
	        $scope.patientList = response.data;
	        console.log($scope.patientList);
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	// patientEditController
	patientEditController.$inject = [ '$scope', '$http'];
	function patientEditController($scope, $http){
		
	}


	appointmentRequestController.$inject = [ '$scope', '$http'];
	function appointmentRequestController($scope, $http) {
		var id = sessionStorage.getItem("id");
		// console.log(id);
		// sessionStorage.removeItem("id");
		$http({
	      method: "POST",
	      url: "http://990fd1c56ace.ngrok.io/appointment/doctor/appointment_details/",
	      data: id
	    })
	    .then(
	      function Success(response){
	        $scope.appDetail = response.data;
	        console.log($scope.appDetail);

	        
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });

	    $scope.regMsg = "";

	    $scope.reject = function() {
	    	var id = JSON.parse(sessionStorage.getItem("id"));
	    	// console.log(id.id);
	    	var reg = {"id": id.id,
	    				"doctor_response": "rejected",
	    				"doctor_reason": $scope.regMsg,
	    				"status": "reject" };

	    	$http({
		      method: "POST",
		      url: "http://990fd1c56ace.ngrok.io/appointment/update_response/",
		      data: reg
		    })
		    .then(
		      function Success(response){
		        $scope.appDetail = response.data;
		        console.log($scope.appDetail);

		        
		        
		    }, 
		     function Error(response){
		        $scope.myWelcome = response.statusText;
		        window.alert("cannot process request");
		        console.log($scope.myWelcome);
		    });




	    }

	    $scope.forward = function() {
	    	var id = JSON.parse(sessionStorage.getItem("id"));
	    	// console.log(id.id);
	    	var reg = {"id": id.id,
	    				"status": "Active" ,
	    				"doctor_response": "approved"	};

	    	$http({
		      method: "POST",
		      url: "http://990fd1c56ace.ngrok.io/appointment/update_response/",
		      data: reg
		    })
		    .then(
		      function Success(response){
		        $scope.appDetail = response.data;
		        console.log($scope.appDetail);

		        
		        
		    }, 
		     function Error(response){
		        $scope.myWelcome = response.statusText;
		        window.alert("cannot process request");
		        console.log($scope.myWelcome);
		    });

	    }

	}






})();