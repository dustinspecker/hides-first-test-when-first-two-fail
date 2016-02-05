import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hello-world', 'Integration | Component | hello world', {
  integration: true
});

test('this will be hidden on refresh', function(assert) {
  assert.ok(false);
});

test('this fails and will still be shown on refresh', function (assert) {
  assert.ok(false);
});
