module.exports = function(hexo) {
  return {
    json: function(obj) {
        console.log("-----");
        console.log(obj);
        console.log("#-----");
      return "post";
    }
  };
};