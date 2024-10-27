import getRandomNumbers from "./getRandomNumber"
const getSubtraction = () => {
    const numbers = getRandomNumbers(2, 100)
    const result = numbers.reduce(
        (accumulator, currentValue) => accumulator - currentValue
    )
    const solution = {
        type: "subtraction",
        numbers, 
        result
    }
    return solution
}

export default getSubtraction