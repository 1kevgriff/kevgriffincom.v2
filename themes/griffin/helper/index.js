var _ = require('lodash');

module.exports = function (hexo) {
  return {
    out: function (obj) {
      console.log(JSON.stringify(obj));
      return;
    },
    ifequals: function (conditional, value, options) {

      console.log("Comparing");

      if (conditional === value) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }

    },
    sortByKey: function (array, key) {
 		/**
		* Sorts array by a given key
		* @function sort_by_key
		* @memberof Handlebars.helpers
		* @param {array} array - The data to sort.
		* @param {string} key - The key to sort by.
		* @see {@link http://stackoverflow.com/questions/8175093/simple-function-to-sort-an-array-of-objects}
		* @returns {array}
		*/
      return _.sortBy(array, [key]);
    },
    filterCategories: function (array, name) {
      var results = _.filter(array, function (el) {
        var res = el.categories.find({ name: name });

        if (res.length > 0) {
          return el;
        }
      });

      return _.sortBy(results, ["date"]).reverse();
    },
    showCategory: function (categories) {
      var cats = [];
      if (categories) {
        categories.data.forEach(function (element) {
          cats.push(element.name);
        }, this);
      }

      if (cats.length === 0) {
        result = "Uncategorized";
      } else {
        result = cats.join(", ");
      }

      return result;
    }
  };
};