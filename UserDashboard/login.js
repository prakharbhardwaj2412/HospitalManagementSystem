(function () {

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);

SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {

  $scope.UsrName = "";
  $scope.Pass = "";

  $scope.onSubmit = function () {
  	var obj = { "username": $scope.UsrName, "password": $scope.Pass};
  	console.log(obj);
  	var jsnObj = JSON.stringify(obj);
  	console.log(jsnObj);
    var storageObj = { "username": $scope.UsrName };
    sessionStorage.setItem("username", JSON.stringify(storageObj));

    $http({
      method: "POST",
      url: "http://33d706fa0680.ngrok.io/login/",
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
