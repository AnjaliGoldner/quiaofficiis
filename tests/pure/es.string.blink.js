import blink from 'core-js-pure/es/string/blink';

QUnit.test('String#blink', assert => {
  assert.isFunction(blink);
  assert.same(blink('a'), '<blink>a</blink>', 'lower case');

  /* eslint-disable es-x/no-symbol -- safe */
  if (typeof Symbol == 'function') {
    assert.throws(() => blink(Symbol()), 'throws on symbol context');
  }
});
