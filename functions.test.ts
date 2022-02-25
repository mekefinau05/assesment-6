const {shuffleArray} = require('./utils')

describe('shuffleArray test', () => {
    test('shuffleArray should return an array', () => {
        let shuffledArray = shuffleArray(shuffleArray.array)
        expect(typeof shuffledArray).toBe('array')  
    })
    
})