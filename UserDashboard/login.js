(function () {

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);

SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {

  $scope.UsrName = "";
  $scope.Pass = "";

  $scope.onSubmit = function () {
  	var UsrNm = $scope.UsrName;
  	console.log(UsrNm);
  	var Ps = $scope.Pass
  	console.log(Ps);
  	var obj = { "email": UsrNm, "password": Ps};
  	console.log(obj);
  	var jsnObj = JSON.stringify(obj);
  	console.log(jsnObj);

    $http({
      method: "POST",
      url: "#",
      data: jsnObj
    })
    .then(
      function Success(response){
        $scope.myWelcome = response.data;
        console.log($scope.myWelcome);
        window.location.assign("dashboard.html");
      }, 
     function Error(response){
        $scope.myWelcome = response.statusText;
        window.alert("wrong credientials");
        console.log($scope.myWelcome);
      });
    
  }

}
})();
