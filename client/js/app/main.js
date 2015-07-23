angular.module('loginApp', []);
angular
  .module('loginApp')
  .controller('SignUpController', SignUpController);
SignUpController.$inject = ['$http'];

function SignUpController($http) {
  this.signup = false;
  this.signin = false;

  this.create = function(){
	this.signup = true;
	this.signin = false;  	
  }

  this.login = function(){
  	this.signup = false;
	this.signin = true;
  }

  this.username = "";
  this.password = "";

  this.newUsername = "";
  this.newPassword = "";

  this.register = function(){
  	$http.post('/users', {
  		username: this.newUsername, 
  		password: this.newPassword
  	}).success(function(data){
  			console.log(data);
  		});
  }

  this.getin = function(){
  	$http.post('/login', {username: this.username, password: this.password}).
  		success(function(data){
  			console.log(data);
  		});
  }
}
