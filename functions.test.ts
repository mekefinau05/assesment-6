const {shuffleArray} = require('./utils')

const testArr = [1, 2, 3, 4, 5]

describe('shuffleArray test', () => {
    test('make sure shuffleArray should return an array', () => {
        expect(typeof shuffleArray(testArr)).toEqual('array')  
    })

    test('should return the same length array', () => {
        expect(shuffleArray(testArr)).toHaveLength(5)
    })
    
})