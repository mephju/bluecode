const isEven = number => (number % 2) === 0
const isOdd = number => !isEven(number)
const sumUp = shouldAdd => numbers => (
  numbers.reduce((acc, num, i) => shouldAdd(i) ? acc + num : acc, 0)
)
const sumUpEvenPositionedNumbers = sumUp(isEven)
const sumUpOddPositionedNumbers = sumUp(isOdd)
const toInt = num => parseInt(num)

const toChecksum = code => {

  const numbers = code.split('').map(toInt)
  const evenPositionedSum = sumUpEvenPositionedNumbers(numbers) * 3
  const oddPositionedSum = sumUpOddPositionedNumbers(numbers)

  const remainder = (evenPositionedSum + oddPositionedSum) % 10

  return remainder === 0 ? 0 : 10 - remainder

}

export default toChecksum