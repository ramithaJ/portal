define(['backbone', 'text!app/home/template/home-template.html',
  'app/navbar/view/navbar-view', 
  'app/search/view/search-view', 
  'app/home/view/home-welcome-view',
], function (Backbone, HomeTemplate, NavbarView, SearchView, HomeWelcomeView) {
  var HomeView = Backbone.View.extend({
  
    el:'#authors-home',
    template:_.template(HomeTemplate),
    
    events:{
    },
    
    initialize:function () {
    	this.render();
    },
    render:function () {
    	this.$el.html(this.template());
    	  new NavbarView();
		  new HomeWelcomeView();
		  new SearchView();
    }
  });
  return HomeView;

});