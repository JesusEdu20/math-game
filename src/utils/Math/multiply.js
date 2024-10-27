import getRandomNumbers from "./getRandomNumber"
const getMultiplication = () => {
    const numbers = getRandomNumbers(2, 100)
    const result = numbers.reduce(
        (accumulator, currentValue) => accumulator * currentValue
    )
    const solution = {
        type: "multiply",
        numbers, 
        result
    }
    return solution
}

export default getMultiplication