Template.newPosts.helpers({
	options: function() {
		return {
			sort: {submitted: -1},
			handle: newPostsHandle
		}
	}
});

Template.bestPosts.helpers({
	options: function() {
		return {
			sort: {votes: -1, submitted: -1},
			handle: topPostsHandle
		}
	}
});

Template.postsList.helpers({
	posts: function() {
		return Posts.find({}, {sort: {submitted: -1}, limit: postsHandle.limit()});
	},
	postsReady: function() {
		return ! postsHandle.ready();
	},
	allPostsLoaded: function() {
		return ! postsHandle.ready() && Posts.find().count() < postsHandle.loaded();
	}
});

Template.postsList.events({
	'click .load-more': function(event) {
		event.preventDefault();
		postsHandle.loadNextPage();
	}
});