const { assert } = require('chai')
const { it, describe } = require('mocha')

const sum = (a, b) => {
    return a + b
}

sum(5,8) //? -> 13
sum(50, 9) //? -> 59
sum(16, 24) //? -> 40

describe('Estos son los tests de suma', () => {
    it('Deberia retornar 13 al sumar 5 y 8', (done) => {
        const myFunc = sum(5, 8)
        assert.equal(myFunc, 13)
        done()
    })
    it('Deberia retornar 59 al sumar 50 y 9', (done) => {
        const myFunc = sum(50, 9)
        assert.equal(myFunc, 59)
        done()
    })
})
