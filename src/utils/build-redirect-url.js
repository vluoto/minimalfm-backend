const { URL } = require('url')

const { LASTFM_API_KEY, MINIMALFM_URL } = process.env

module.exports = () => {
  const redirectURL = new URL('https://last.fm/api/auth/')
  redirectURL.searchParams.append('api_key', LASTFM_API_KEY)
  redirectURL.searchParams.append('cb', `${MINIMALFM_URL}/auth`)
  return redirectURL
}
