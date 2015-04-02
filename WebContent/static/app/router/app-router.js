define([ 'backbone',
  'react', 'app/login/view/login-view'
], function (Backbone, React, LoginView) {
  /**
   * Url router for the applications. Defines routes with url and handlers
   */
  var AppRouter = Backbone.Router.extend({
    // List all the routes possibles and bind them to a handler
    routes:{
    	'login': 'login'
    },
    // Constructor
    initialize:function () {
    	
    },
    login: function(){
    	// TODO need to do login stuff.
    	$("#authors-welcome-home").hide();
    	var loginView = new LoginView(); 
    }
  });

  return AppRouter;
});