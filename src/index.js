module.exports = function toReadable (number) {
  const arrayWordNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const arrayDozensWordNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const arrayUnderTwentyNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const arrayNumbers = number.toString().split('')
  let result = ''
  if (arrayNumbers.length === 1){
    if(Number(arrayNumbers[0])===0){
    result = 'zero'
    }else{
      result = arrayWordNumbers[Number(arrayNumbers[0]) - 1]
    }
  }else if (arrayNumbers.length === 2){
    if(Number(arrayNumbers[0]) === 1){
      result = arrayUnderTwentyNumbers[Number(arrayNumbers[1])]
    }else if (Number(arrayNumbers[1]) === 0) {
      result = `${arrayDozensWordNumbers[Number(arrayNumbers[0]) - 2]}`
    }else {
      result = `${arrayDozensWordNumbers[Number(arrayNumbers[0]) - 2]} ${arrayWordNumbers[Number(arrayNumbers[1]) - 1]}`
    }
  }else if (arrayNumbers.length === 3){
    if (Number(arrayNumbers[1]) === 0&&Number(arrayNumbers[2]) === 0){
      result = `${arrayWordNumbers[Number(arrayNumbers[0]) - 1]} hundred`
    }else if (Number(arrayNumbers[1]) === 0){
      result = `${arrayWordNumbers[Number(arrayNumbers[0]) - 1]} hundred ${arrayWordNumbers[Number(arrayNumbers[2]) - 1]}`
    }else if (Number(arrayNumbers[1]) === 1){
      result = `${arrayWordNumbers[Number(arrayNumbers[0]) - 1]} hundred ${arrayUnderTwentyNumbers[Number(arrayNumbers[2])]}`
    }else if (Number(arrayNumbers[2]) === 0){
      result = `${arrayWordNumbers[Number(arrayNumbers[0]) - 1]} hundred ${arrayDozensWordNumbers[Number(arrayNumbers[1]) - 2]}`
    }else {
      result = `${arrayWordNumbers[Number(arrayNumbers[0]) - 1]} hundred ${arrayDozensWordNumbers[Number(arrayNumbers[1]) - 2]} ${arrayWordNumbers[Number(arrayNumbers[2]) - 1]}`
    }
  }
  return result
}