Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {subitted: -1}});
  }
});
