import getRandomNumbers from "./getRandomNumber"
const getMultiplication = () => {
    const numbers = getRandomNumbers(2, 10)
    const result = numbers.reduce(
        (accumulator, currentValue) => accumulator * currentValue
    )
    const solution = {
        type: "x",
        numbers, 
        result
    }
    return solution
}

export default getMultiplication