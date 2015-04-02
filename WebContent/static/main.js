define([], function() {
  var Main = {};

  // This is your main function. After configuration in config.js, it is called.
  Main.main = function() {
	  require(['backbone', 'app/home/view/home-view', 'app/router/app-router'], function (Backbone, HomeView, Router) {

		  // Initialize routing and start Backbone.history()
		  new Router();
		  Backbone.history.start();
	  
		  // Initialize the application navigation view
		  new HomeView();
	 
	  
		//   Mock.mock();

	  });
  };
	  return Main;
  });