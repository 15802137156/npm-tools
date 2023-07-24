/**
 * 日期格式化
 * @param {number} timestamp 时间戳 || '2019-12-06T12:04:38.788'
 * @param {string} timesType 格式
 * @return {string} 格式化后的字符串
 */
const dateFormat = (timestamp, timesType = 'YYYY-MM-DD HH:mm:ss') => {
  if (!timestamp) return ''
  const time = new Date(timestamp).getTime()
  let t = time > 10000000000 ? time : time * 1000
  t = new Date(t)
  const tf = function addZero(i) {
    return (i < 10 ? '0' : '') + i
  }
  return timesType.replace(/YYYY|MM|DD|HH|mm|ss/g, (a) => {
    switch (a) {
      case 'YYYY':
        return tf(t.getFullYear())
      case 'MM':
        return tf(t.getMonth() + 1)
      case 'DD':
        return tf(t.getDate())
      case 'HH':
        return tf(t.getHours())
      case 'mm':
        return tf(t.getMinutes())
      case 'ss':
        return tf(t.getSeconds())
      default:
        return ''
    }
  })
}

module.exports = {
  dateFormat
}
