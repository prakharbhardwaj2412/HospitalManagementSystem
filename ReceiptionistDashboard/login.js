(function () {

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);

SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {

  $scope.username = "";
  $scope.password = "";

  $scope.onSubmit = function () {
  	var obj = { "username": $scope.username, "password": $scope.password};
  	console.log(obj);
  	var jsnObj = JSON.stringify(obj);
  	console.log(jsnObj);
    var storageObj = { "username": $scope.UsrName };
    sessionStorage.setItem("username", JSON.stringify(storageObj));

    $http({
      method: "POST",
      url: "http://990fd1c56ace.ngrok.io/login/",
      data: jsnObj
    })
    .then(
      function Success(response){
        $scope.myWelcome = response.data;
        console.log($scope.myWelcome);
        var Resp = $scope.myWelcome;
        if (Resp == "receptionist") {
          window.alert("Login Successful");
          window.location.assign("ReceiptionistDashboard.html");  
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
