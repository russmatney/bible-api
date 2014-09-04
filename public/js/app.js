window.App = Ember.Application.create();

//Model
App.Book = Em.Object.extend();

App.Book.reopenClass({
  find: function(id) {
    if (id) {
      return App.FIXTURES.findBy('id', id);
    } else {
      return App.FIXTURES;
    }
  }
});


//Routes
App.Router.map(function(){
  this.resource('book', { path: '/:book_id' }, function() {
    this.resource('chapter', { path: '/:chapter_id' });
  });
});

App.ApplicationRoute = Em.Route.extend({
  model: function() {
    return App.Book.find();
  }
});

App.ChapterRoute = Em.Route.extend({
  model: function(params) {
    var obj = this.modelFor('book').chapters.findBy('id', params.message_id);
    return obj;
  }
});

