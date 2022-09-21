/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let regexp = new RegExp('(?=(.))\\1{' + size + ',}', 'g')
  return string.replace(regexp, (m, a) => a.repeat(size))
}
