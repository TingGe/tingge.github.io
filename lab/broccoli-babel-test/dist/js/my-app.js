'use strict';

var fruits = [{ id: 100, name: '草莓' }, { id: 101, name: '柚子' }, { id: 102, name: '梨' }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fruits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var fruit = _step.value;

    var message = 'ID: ' + fruit.id + ' Name: ' + fruit.name;
    console.log(message);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log('List total: ' + fruits.length);
'use strict';

function printInfo() {
  $('#info').append('<p>用 Broccoli 和 Babel 构建的最小网站示例<p/>');
}
$(printInfo);//# sourceMappingURL=my-app.map