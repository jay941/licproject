


var sudoApp=angular.module('sudoApp');
sudoApp.controller('loginCtrl',function($scope,$location)
{ 
/**
 * Login Athentication
 * @cunstructor
 * @param(string)-email
 * @param(pwd)-number
 * 
 */
$scope.submit=function(email,pwd)
{
$scope.email=email;
$scope.pwd=pwd;
var e="jay@jay.com";
var p="jay";
  if(email==e && pwd==p)
  {
	$location.path('/home');
	}//end of if
 else{
       $location.path('/signin');
        alert("Invalid Email and password");
     }//end of else
  }//end of submit function

});


