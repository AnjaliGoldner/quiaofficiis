import bold from 'core-js-pure/es/string/bold';

QUnit.test('String#bold', assert => {
  assert.isFunction(bold);
  assert.same(bold('a'), '<b>a</b>', 'lower case');

  /* eslint-disable es-x/no-symbol -- safe */
  if (typeof Symbol == 'function') {
    assert.throws(() => bold(Symbol()), 'throws on symbol context');
  }
});
