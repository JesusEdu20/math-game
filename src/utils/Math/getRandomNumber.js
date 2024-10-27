const getRandomNumbers = (amount, scale) => {
    const numbers = [];
    for (let i = 0; i < amount; i++) {
      numbers.push(Math.floor(Math.random() * scale));
    }
    return numbers;
  };
  
  export default getRandomNumbers
  