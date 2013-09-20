module.exports = function prefix(str) {
  return function prefix(style) {
    var walk = require('rework-walk');
    walk(style, function(rule, node) {
      if (!rule.selectors) return rule;
      rule.selectors = rule.selectors.map(function(selector) {
        return str + ' ' + selector;
      });
    });
  }
};