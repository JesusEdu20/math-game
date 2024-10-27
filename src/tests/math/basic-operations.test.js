const getSum = require("../../utils/Math/sum.js");
const getSubtraction = require("../../utils/Math/subtraction.js");
const getMultiplication = require("../../utils/Math/multiply.js");
const getDivision = require("../../utils/Math/division.js");


describe('basic operations', () => {
    
    test("Should check an solution object with a numeric array(numbers of a sum) and a number(result)", () => {
        const results = getSum()
        expect(results).toEqual(
            expect.objectContaining(
                {
                    numbers: expect.arrayContaining([expect.any(Number)]),
                    result: expect.any(Number) 
                }
            )
        )
    })

    test("Should return a solution object with a numeric array that is the subtraction and a number that is the result of the subtraction", () => {
        const result = getSubtraction()
        expect(result).toEqual(
            expect.objectContaining(
                {
                    numbers: expect.arrayContaining([expect.any(Number)]),
                    result: expect.any(Number)
                }
            )
        )
    })

    test("Should check an solution object with a numeric array (numbers of the multiplication) and a number(result)", () => {
        const results = getMultiplication()
        expect(results).toEqual(
            expect.objectContaining(
                {
                    numbers: expect.arrayContaining([expect.any(Number)]),
                    result: expect.any(Number) 
                }
            )
        )
    })

    test("Should check an solution object with a numeric array (numbers of the division) and a number(result)", () => {
        const results = getDivision()
        expect(results).toEqual(
            expect.objectContaining(
                {
                    numbers: expect.arrayContaining([expect.any(Number)]),
                    result: expect.any(Number) 
                }
            )
        )
    })

})

