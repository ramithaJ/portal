define(['backbone',
  'text!app/search/template/search-template.html'
], function (Backbone, SearchTemplate) {
  var SearchView = Backbone.View.extend({
  
    el:'#author-search',
    template:_.template(SearchTemplate),
    
    events:{
    },
    
    initialize:function () {
    	this.render();
    },
    render:function () {
    	this.$el.html(this.template());
    }
  });
  return SearchView;

});