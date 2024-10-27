import getRandomNumbers from "./getRandomNumber";


const getSum = () => {
    const numbers = getRandomNumbers(2, 100);
    const result = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    ) 
    const solution = {
        type: "sum",
        numbers,
        result,
    }
    return solution
}

export default getSum