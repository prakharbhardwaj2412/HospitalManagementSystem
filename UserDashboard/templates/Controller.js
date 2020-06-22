(function () {


	angular.module('UserApp')
	.controller('homeController', homeController);
	angular.module('UserApp')
	.controller('appointmentController', appointmentController);
	angular.module('UserApp')
	.controller('historyController', historyController);
	angular.module('UserApp')
	.controller('listController', listController);
	angular.module('UserApp')
	.controller('profileController', profileController);

	// home controller
	homeController.$inject = [ '$scope', '$http'];
	function homeController($scope, $http){
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

	// appointment controller
	appointmentController.$inject = [ '$scope', '$http'];
	function appointmentController($scope, $http){
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







})();