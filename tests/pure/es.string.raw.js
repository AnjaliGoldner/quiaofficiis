import raw from 'core-js-pure/es/string/raw';

QUnit.test('String.raw', assert => {
  assert.isFunction(raw);
  assert.arity(raw, 1);
  if ('name' in raw) {
    assert.name(raw, 'raw');
  }
  assert.same(raw({ raw: ['Hi\\n', '!'] }, 'Bob'), 'Hi\\nBob!', 'raw is array');
  assert.same(raw({ raw: 'test' }, 0, 1, 2), 't0e1s2t', 'raw is string');
  assert.same(raw({ raw: 'test' }, 0), 't0est', 'lacks substituting');

  /* eslint-disable es-x/no-symbol -- safe */
  if (typeof Symbol == 'function') {
    assert.throws(() => raw({ raw: [Symbol()] }, 0), TypeError, 'throws on symbol #1');
    assert.throws(() => raw({ raw: 'test' }, Symbol()), TypeError, 'throws on symbol #2');
  }

  assert.throws(() => raw({}), TypeError);
  assert.throws(() => raw({ raw: null }), TypeError);
});
