import { expect } from 'chai';

import Dojo from '../src/dojo';

describe('#Dojo', () => {
  describe('type', () => {
    it('should return the current type of dojo', () => {
      const dojo = new Dojo({ sensei: 'david' });

      expect(dojo.sensei).to.be.equal('david');
    });
  });
});