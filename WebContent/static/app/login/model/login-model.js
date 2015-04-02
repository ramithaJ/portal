define(['backbone'], function (Backbone) {
  var LoginModel = Backbone.Model.extend({
	  urlRoot:'api/login',
	  defaults:{
		  userId : "",
		  password : "",
		 // userDisplayName : "",
		 // loggedIn : false,
		 // adminRole : false
	  }
  });
  return LoginModel;
});