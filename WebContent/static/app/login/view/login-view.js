define(['backbone', 'app/login/model/login-model',
  'text!app/login/template/login-template.html'
], function (Backbone, LoginModel, LoginTemplate) {

  var LoginView = Backbone.View.extend({
  
    el:'#authors-login',
    template:_.template(LoginTemplate),
    
    events:{
    	'click #login-button':'submitLogin',
    },
    
    initialize:function () {
    	this.render();
    },
    render:function () {
    	this.$el.html(this.template());
    },
    submitLogin:function(){
    	var emailId = $.trim($("#inputEmail").val());
    	var password = $("#inputPassword").val();
    	var loginModel = new LoginModel();
    	loginModel.set('userId', emailId);
    	loginModel.set('password', password);
    	
    	//Backbone.emulateJSON = true;
    	loginModel.save();
    	/*
    	$.postJSON = function(url, data) {
    	    return jQuery.ajax({
    	    headers: { 
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json' 
    	    },
    	    'type': 'POST',
    	    'url': url,
    	    'data': JSON.stringify(data.toJSON()),
    	    'dataType': 'json'
    	    });
    	};
    	
    	$.postJSON('login', loginModel);*/
    	
    }
  });
  return LoginView;

});