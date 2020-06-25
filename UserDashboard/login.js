(function () {

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);

SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {

  $scope.UsrName = "";
  $scope.Pass = "";

  sessionStorage.clear();

  $scope.onSubmit = function () {
  	var obj = { "username": $scope.UsrName, "password": $scope.Pass};
  	var jsnObj = JSON.stringify(obj);
    var storageObj = { "username": $scope.UsrName };
    sessionStorage.setItem("PatientUsername", JSON.stringify(storageObj));

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

}
})();
