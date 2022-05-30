
import {primeFactorization} from '../../src/Dummy'

describe("Dummy Test", () => {

    it("check for prime factorization of 315, we should get output as [3, 3, 5, 7]", () => {
        const gettingValue = primeFactorization(315)
        expect(gettingValue).toEqual([3, 3, 5, 7])
    })

    it("check for prime factorization of 0, we should get output as 0", () => {
        const gettingValue = primeFactorization(0)
        expect(gettingValue).toEqual([])
    })
    it("check for prime factorization of 99, we should get output as [3,3,11]", () => {
        const gettingValue = primeFactorization(99)
        expect(gettingValue).toEqual([3,3,11])
    })
    it("check for prime factorization of 343, we should get output as [7]", () => {
            const gettingValue = primeFactorization(343)
            expect(gettingValue).toEqual([7,7,7])
        })

})



