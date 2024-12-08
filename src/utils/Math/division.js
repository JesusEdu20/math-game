import getRandomNumbers from "./getRandomNumber";
// ojo con esto: solo funciona para divisiones de dos cifras
const getDivision = () => {
    const numbers = getRandomNumbers(2, 100);
    const result = numbers.reduce(
        (accumulator, currentValue) => accumulator / currentValue
    ) 
    const solution = {
        type: "/",
        numbers,
        result,
    }
    return solution
}

export default getDivision