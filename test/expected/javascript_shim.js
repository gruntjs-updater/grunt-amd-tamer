(function(window) {
  window.a = window.a || {};
  window.a.test = function() {
    return 'test';
  };
})(this);


(function(root) {
	define('a', function() { return root.a.test; });
})(this);
function b() {
  return {
    message: 'Wow, evil, no IIFE',
    b: 5,
    c: {
      d: null,
      e: {}
    }
  };
}


(function(root) {
	define('b', ['a'], function() { return root.b; });
})(this);
var c = {
  d: function() {
    return 4;
  },
  e: function(b) {
    return b;
  }
};


(function(root) {
	define('c', ['b'], function (b) {
                return b + '&*';
              });
})(this);