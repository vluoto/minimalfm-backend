const esc = encodeURIComponent

module.exports = query => {
  return Object.entries(query)
    .map(([key, value]) => esc(key) + '=' + esc(value))
    .join('&')
}
