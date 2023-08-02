/**
 * 深拷贝
 *
 * @param obj - 目标对象
 * @returns {*}
 */
const deepCopy = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if ('isActiveClone' in obj) {
    throw new Error('循环引用警告⚠️')
  }

  let temp
  if (obj instanceof Date) {
    temp = new obj.constructor()
  } else {
    temp = obj.constructor()
  }

  Object.keys(obj).forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    obj.isActiveClone = null
    temp[key] = deepCopy(obj[key])
    // eslint-disable-next-line no-param-reassign
    delete obj.isActiveClone
  })
  return temp
}

module.exports = {
  deepCopy
}
