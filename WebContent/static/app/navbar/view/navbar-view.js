define(['backbone',
  'text!app/navbar/template/navbar-template.html'
], function (Backbone, NavbarTemplate) {
  var NavbarView = Backbone.View.extend({
  
    el:'#authors-navbar',
    template:_.template(NavbarTemplate),
    
    events:{
    },
    
    initialize:function () {
    	this.render();
    },
    render:function () {
    	this.$el.html(this.template());
    }
  });
  return NavbarView;

});