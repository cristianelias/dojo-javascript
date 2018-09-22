import { describe, it } from 'mocha'
import { expect } from 'chai'

import Dojo from '../src/dojo'

describe('Dojo', () => {
  describe('getSensei', () => {
    it('should return the current Sensei of the dojo', () => {
      const dojo = new Dojo('Nelsito')

      expect(dojo.getSensei()).to.be.equal('Nelsito')
    })

    it('should return the default Sensei of the dojo', () => {
      const dojo = new Dojo()

      expect(dojo.getSensei()).to.be.equal('Diego Sanchez')
    })
  })
})
