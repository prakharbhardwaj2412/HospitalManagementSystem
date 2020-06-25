(function () {

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);

SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {


  sessionStorage.clear();

  $scope.username = "";
  $scope.password = "";

  $scope.onSubmit = function () {
  	var obj = { "username": $scope.username, "password": $scope.password};
  	console.log(obj);
  	var jsnObj = JSON.stringify(obj);
  	console.log(jsnObj);
    var storageObj = { "username": $scope.username };
    sessionStorage.setItem("doctorUsername", JSON.stringify(storageObj));
    console.log(sessionStorage.getItem("doctorUsername"));

    $http({
      method: "POST",
      url: "http://fd0c4ca9e6a0.ngrok.io/login/",
      data: jsnObj
    })
    .then(
      function Success(response){
        $scope.myWelcome = response.data;
        console.log($scope.myWelcome);
        var Resp = $scope.myWelcome;
        if (Resp == "doctor") {
          window.alert("Login Successful");
          window.location.assign("DoctorDashboard.html");  
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

}
})();
