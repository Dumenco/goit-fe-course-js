const checkForSpam = function (message) {
  let wordS = message.toLowerCase()
  if (wordS.includes('spam') || wordS.includes('sale')) return true
  return false
}

console.log(checkForSpam('Latest technology news'))

console.log(checkForSpam('JavaScript weekly newsletter'))

console.log(checkForSpam('Get best sale offers now!'))

console.log(checkForSpam('[SPAM] How to earn fast money?'))
