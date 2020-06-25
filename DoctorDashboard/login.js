(function () {

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);

SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {

  $scope.username = "";
  $scope.password = "";

  $scope.onSubmit = function () {
    sessionStorage.removeItem("doctor");
  	var obj = { "username": $scope.username, "password": $scope.password};
  	console.log(obj);
  	var jsnObj = JSON.stringify(obj);
  	console.log(jsnObj);
    var storageObj = { "username": $scope.username };
    sessionStorage.setItem("doctor", JSON.stringify(storageObj));

    $http({
      method: "POST",
      url: "http://3f50481e0f7a.ngrok.io/login/",
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
