/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let result = {}
  let differenceKeys = Object.keys(obj).filter(key => !fields.includes(key))
  differenceKeys.forEach(key => {
    result[key] = obj[key]
  })
  return result
};
