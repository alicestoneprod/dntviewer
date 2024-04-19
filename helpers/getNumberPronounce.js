var getNumberPronounce = (number, one, two, five) => {
  const splitterNumber = number.toString().split("")

  const lastDigit = splitterNumber[splitterNumber.length - 1]

  if (lastDigit === "1") return one
  else if (parseInt(lastDigit) > 1 && parseInt(lastDigit) < 5) return two
  else return five
}

// Pronounce helper for russian numbers
// Number - number for get pronounce
// One - Word which returns in case '1'
// Two - Word which returns in case between (2, 5)
// Five - Word which returns in other cases.
