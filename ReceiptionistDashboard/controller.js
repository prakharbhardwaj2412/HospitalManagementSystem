(function () {

    angular.module('ReceiptionistApp')
    .controller('mainController', mainController);
	angular.module('ReceiptionistApp')
	.controller('homeController', homeController);
	angular.module('ReceiptionistApp')
	.controller('doctorListController', doctorListController);
	angular.module('ReceiptionistApp')
	.controller('patientListController', patientListController);
	angular.module('ReceiptionistApp')
	.controller('appointmentRequestController', appointmentRequestController);
	
	// main controller
	mainController.$inject = [ '$scope', '$http'];
	function mainController($scope, $http){
		$http({
	      method: "GET",
	      url: "http://fd0c4ca9e6a0.ngrok.io/appointment/receptionist/requests/"
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
	function homeController($scope, $http){}

	// appointment controller
	doctorListController.$inject = [ '$scope', '$http'];
	function doctorListController($scope, $http){
		// var usernameObj = sessionStorage.getItem("username");

		$http({
	      method: "GET",
	      url: "http://fd0c4ca9e6a0.ngrok.io/doctor/list/",
	    })
	    .then(
	      function Success(response){
	        $scope.dList = response.data;
	        console.log($scope.dList);
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	// medical-history controller
	patientListController.$inject = [ '$scope', '$http'];
	function patientListController($scope, $http){
		// var usernameObj = sessionStorage.getItem("username");

		$http({
	      method: "GET",
	      url: "http://fd0c4ca9e6a0.ngrok.io/patient/list/",
	    })
	    .then(
	      function Success(response){
	        $scope.pList = response.data;
	        console.log($scope.pList);
	        
	        
	      }, 
	     function Error(response){
	        $scope.myWelcome = response.statusText;
	        window.alert("cannot process request");
	        console.log($scope.myWelcome);
	      });
	}

	// appointment request controller
	appointmentRequestController.$inject = [ '$scope', '$http'];
	function appointmentRequestController($scope, $http) {
		var id = sessionStorage.getItem("id");
		// sessionStorage.removeItem("id");
		$http({
	      method: "POST",
	      url: "http://fd0c4ca9e6a0.ngrok.io/appointment/receptionist/request_details/",
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
	    				"receptionist_response": "rejected",
	    				"receptionist_reason": $scope.regMsg,
	    				"status": "rejected" };

	    	$http({
		      method: "POST",
		      url: "http://fd0c4ca9e6a0.ngrok.io/appointment/update_response/",
		      data: reg
		    })
		    .then(
		      function Success(response){
		        $scope.appDetail = response.data;
		        console.log($scope.appDetail);
		        if ($scope.appDetail="Your response is recieved") {
		        	window.alert("Rejected");
		        }
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
	    				"receptionist_response": "approved",
	    				"receptionist_reason": $scope.regMsg};

	    	$http({
		      method: "POST",
		      url: "http://fd0c4ca9e6a0.ngrok.io/appointment/update_response/",
		      data: reg
		    })
		    .then(
		      function Success(response){
		        $scope.appDetail = response.data;
		        console.log($scope.appDetail);
		        if ($scope.appDetail="Your response is recieved") {
		        	window.alert("Forwarded to Doctor");
		        }
		    }, 
		     function Error(response){
		        $scope.myWelcome = response.statusText;
		        window.alert("cannot process request");
		        console.log($scope.myWelcome);
		    });
	    }
	}

})();