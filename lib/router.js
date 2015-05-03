Router.configure({
  layoutTemplate: 'template',
  loadingTemplate: 'loading',
  waitOn: function() {return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
