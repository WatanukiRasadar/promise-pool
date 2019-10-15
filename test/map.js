'use strict'

const { map } = require('..')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const { describe, it } = (exports.lab = Lab.script())

describe('Promise Pool { map } export', () => {
  it('exports a map shortcut', async () => {
    const ids = [1, 2, 3, 4]
    const { results, errors } = await map(ids, id => {
      if (id === 3) throw new Error('Oh no, not a 3.')

      return id
    })

    const error = new Error('Oh no, not a 3.')
    error.item = 3

    expect(errors).to.equal([error])
    expect(results).to.equal([1, 2, 4])
  })
})
