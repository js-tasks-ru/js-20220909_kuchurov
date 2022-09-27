/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size < 1) return ''
  if (!size) return string

  const result = []
  let count = 0

  for (const char of string) {
    if (result.at(-1) === char) {
      if (count < size) {
        result.push(char)
        count++
      }
    } else {
      count = 1
      result.push(char)
    }
  }

  return result.join('')

  // let regexp = new RegExp('(?=(.))\\1{' + size + ',}', 'g')
  // return string.replace(regexp, (m, a) => a.repeat(size))
}
