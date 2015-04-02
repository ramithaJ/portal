define([
  'backbone',
  'text!app/home/template/home-welcome-template.html'
], function (Backbone, HomeWelcomeTemplate) {
  var HomeWelcomeView = Backbone.View.extend({
  
    el:'#authors-welcome-home',
    template:_.template(HomeWelcomeTemplate),
    
    events:{
    },
    
    initialize:function () {
    	this.render();
    },
    render:function () {
    	this.$el.html(this.template());
    }
  });
  return HomeWelcomeView;

});