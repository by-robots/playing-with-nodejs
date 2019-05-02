'use strict'

const greet = require('../src/greet')

describe('greet', () => {
  it('should greet the given name', () => {
    expect(greet('Dan')).toEqual('Hello Dan!')
  })

  it('should greet everyone if no name given', () => {
    expect(greet()).toEqual('Hello world!')
  })
})
