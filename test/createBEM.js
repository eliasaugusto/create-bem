import assert from 'assert';
import createBEM from '../src/createBEM';

describe('createBEM()', () => {

  let bem = createBEM('Modal');

  describe('#toString()', () => {
    it('should return "Modal"', () => {
      assert.equal(bem.toString(), 'Modal');
    });
  });

  describe('#el()', () => {
    it('should return "Modal__header"', () => {
      assert.equal(bem.el('header').toString(), 'Modal__header');
    });
  });

  describe('#md()', () => {
    it('should return "Modal Modal--visible"', () => {
      assert.equal(bem.md('visible').toString(), 'Modal Modal--visible');
    });

    it('should return "Modal" when get "false"', () => {
      assert.equal(bem.md('visible', false).toString(), 'Modal');
    });
  });

});
