import fontsize from 'core-js-pure/es/string/fontsize';

QUnit.test('String#fontsize', assert => {
  assert.isFunction(fontsize);
  assert.same(fontsize('a', 'b'), '<font size="b">a</font>', 'lower case');
  assert.same(fontsize('a', '"'), '<font size="&quot;">a</font>', 'escape quotes');

  /* eslint-disable es-x/no-symbol -- safe */
  if (typeof Symbol == 'function') {
    assert.throws(() => fontsize(Symbol(), 'b'), 'throws on symbol context');
    assert.throws(() => fontsize('a', Symbol()), 'throws on symbol argument');
  }
});
