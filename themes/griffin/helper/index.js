var _ = require('lodash');

module.exports = function (hexo) {
  return {
    recent_posts: function (count) {
        options = {};

      // default options
      options = _.extend({
        count: count,
        ulClass: 'recent_posts',
        liClass: 'recent_post'
      }, options);

      // get last posts
      var posts = this.site
        .posts.sort('date', -1)
        .limit(options.count);

      // build the list
      var result = '<ul class="' + options.ulClass + '">';
      var root = this.config.root;

      posts.each(function (post) {
        result += '<li class="' + options.liClass + '"><a href="' + root + post.path + '">' + post.title + '</a></li>';
      });

      result += '</ul>'
      return result;
    }
  };
};