const md5 = require('md5')

const { LASTFM_SHARED_SECRET } = process.env

module.exports = params => {
  const keys = Object.keys(params)
  const parts = keys.sort().map(key => `${key}${params[key]}`)

  parts.push(LASTFM_SHARED_SECRET)

  return md5(parts.join(''))
}
