(function () {


	angular.module('DoctorApp')
    .controller('mainController', mainController);
	angular.module('DoctorApp')
	.controller('homeController', homeController);
	angular.module('DoctorApp')
	.controller('appointmentController', appointmentController);
	angular.module('DoctorApp')
	.controller('historyController', historyController);
	angular.module('DoctorApp')
	.controller('listController', listController);
	angular.module('DoctorApp')
	.controller('profileController', profileController);
	angular.module('DoctorApp')
	.controller('appointmentRequestController', appointmentRequestController);

     // main controller
	mainController.$inject = [ '$scope', '$http'];
	function mainController($scope, $http){
		$http({
	      method: "GET",
	      url: "http://3f50481e0f7a.ngrok.io/appointment/receptionist/requests/"
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
	    	console.log(sessionStorage.getItem("id"));
	    }
	}



	// home controller
	homeController.$inject = [ '$scope', '$http'];
	function homeController($scope, $http){
		var usernameObj = sessionStorage.getItem("username");

		$http({
	      method: "POST",
	      url: "http://dac49860d95e.ngrok.io/patient/",
	      data: usernameObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var Resp = $scope.myWelcome;
	        console.log(Resp[0].name);
	        $scope.PatientName = Resp[0].name;
	        // if (Resp == "patient") {
	        //   window.alert("Login Successful");
	        //   window.location.assign("UserDashboard.html");  
	        // }
	        // else{
	        //   window.alert("wrong credientials");
	        // }
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	// appointment controller
	appointmentController.$inject = [ '$scope', '$http'];
	function appointmentController($scope, $http){
		var usernameObj = sessionStorage.getItem("username");

		$http({
	      method: "POST",
	      url: "http://dac49860d95e.ngrok.io/patient/",
	      data: usernameObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var Resp = $scope.myWelcome;
	        $scope.PatientName = Resp[0].name ;
	        $scope.PatientUsername = Resp[0].username;
	        $scope.PatientContact = Resp[0].phone_no;
	        $scope.PatientEmail = Resp[0].email;
	        $scope.PatientId = Resp[0].id;
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });

	    $scope.inputDep = "";
	    $scope.inputName = "";
	    $scope.inputDid = "";
	    $scope.inputProblem = "";
	    $scope.inputPayment = "";

	    $scope.appointment = function() {
	    	var appointmentObj = { "patient_id": $scope.PatientId,
	    						"doctor_id": $scope.inputDid,
	    						"problem": $scope.inputProblem,
	    						"payment_status": $scope.inputPaymentpaid 	};
	    	var appointmentJsn = JSON.stringify(appointmentObj);


	    	$http({
		      method: "POST",
		      url: "http://dac49860d95e.ngrok.io/appointment/patient/",
		      data: appointmentJsn
		    })
		    .then(
		      function Success(response){
		        $scope.myWelcome = response.data;
		        console.log($scope.myWelcome);
		        var Resp = $scope.myWelcome;
		      }, 
		     function Error(response){
		        $scope.myWelcome = response.statusText;
		        window.alert("cannot process request");
		        console.log($scope.myWelcome);
		      });
	    };


	}

	// medical-history controller
	historyController.$inject = [ '$scope', '$http'];
	function historyController($scope, $http){
		var usernameObj = sessionStorage.getItem("username");

		$http({
	      method: "POST",
	      url: "http://33d706fa0680.ngrok.io/login/",
	      data: usernameObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var Resp = $scope.myWelcome;
	        if (Resp == "patient") {
	          window.alert("Login Successful");
	          window.location.assign("UserDashboard.html");  
	        }
	        else{
	          window.alert("wrong credientials");
	        }
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	// doctors list controller
	listController.$inject = [ '$scope', '$http'];
	function listController($scope, $http){
		var usernameObj = sessionStorage.getItem("username");

		$http({
	      method: "POST",
	      url: "http://33d706fa0680.ngrok.io/login/",
	      data: usernameObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var Resp = $scope.myWelcome;
	        if (Resp == "patient") {
	          window.alert("Login Successful");
	          window.location.assign("UserDashboard.html");  
	        }
	        else{
	          window.alert("wrong credientials");
	        }
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	// profile controller
	profileController.$inject = [ '$scope', '$http'];
	function profileController($scope, $http){
		var usernameObj = sessionStorage.getItem("username");

		$http({
	      method: "POST",
	      url: "http://dac49860d95e.ngrok.io/patient/",
	      data: usernameObj
	    })
	    .then(
	      function Success(response){
	        $scope.myWelcome = response.data;
	        console.log($scope.myWelcome);
	        var Resp = $scope.myWelcome;
	        $scope.PatientName = Resp[0].name ;
	        $scope.PatientUsername = Resp[0].username;
	        $scope.PatientContact = Resp[0].phone_no;
	        $scope.PatientEmail = Resp[0].email;
	        $scope.PatientDob = Resp[0].dob;
	        $scope.PatientWeight = Resp[0].weight;
	        $scope.PatientHeight = Resp[0].height;
	        $scope.PatientBlood = Resp[0].blood;
	        $scope.PatientAddress = Resp[0].address;
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	appointmentRequestController.$inject = [ '$scope', '$http'];
	function appointmentRequestController($scope, $http){
	}







})();