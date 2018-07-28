const request = require('superagent')

const prepareQuery = require('../utils/prepare-query')
const sign = require('../utils/sign')

const { LASTFM_API_KEY, LASTFM_API_URL } = process.env

const defaultParams = {
  api_key: LASTFM_API_KEY,
  format: 'json'
}

const getSession = async ({ token }) => {
  const params = {
    api_key: defaultParams.api_key,
    method: 'auth.getSession',
    token
  }

  const query = prepareQuery({
    ...defaultParams,
    ...params,
    api_sig: sign(params)
  })

  const { body } = await request.get(LASTFM_API_URL).query(query)

  return body
}

const getRecentTracks = async ({ limit, user } = {}) => {
  const query = prepareQuery({
    ...defaultParams,
    limit,
    user,
    extended: 1,
    method: 'user.getRecentTracks'
  })

  const { body } = await request.get(LASTFM_API_URL).query(query)

  return body
}

const getTopAlbums = async ({ limit, period, user }) => {
  const query = prepareQuery({
    ...defaultParams,
    limit,
    period,
    user,
    method: 'user.getTopAlbums'
  })

  const { body } = await request.get(LASTFM_API_URL).query(query)

  return body
}

const getTopArtists = async ({ limit, period, user }) => {
  const query = prepareQuery({
    ...defaultParams,
    limit,
    period,
    user,
    method: 'user.getTopArtists'
  })

  const { body } = await request.get(LASTFM_API_URL).query(query)

  return body
}

const getTopTracks = async ({ limit, period, user }) => {
  const query = prepareQuery({
    ...defaultParams,
    limit,
    period,
    user,
    method: 'user.getTopTracks'
  })

  const { body } = await request.get(LASTFM_API_URL).query(query)

  return body
}

const getUserInfo = async ({ user }) => {
  const query = prepareQuery({
    ...defaultParams,
    method: 'user.getInfo',
    user
  })

  const { body } = await request.get(LASTFM_API_URL).query(query)

  return body
}

const loveTrack = async (track, session) => {
  const params = {
    api_key: defaultParams.api_key,
    artist: track.artist.name,
    method: 'track.love',
    sk: session,
    track: track.name
  }

  const query = prepareQuery({
    ...defaultParams,
    ...params,
    api_sig: sign(params)
  })

  const { body } = await request.post(LASTFM_API_URL).query(query)

  return body
}

const unloveTrack = async (track, session) => {
  const params = {
    api_key: defaultParams.api_key,
    artist: track.artist.name,
    method: 'track.unlove',
    sk: session,
    track: track.name
  }

  const query = prepareQuery({
    ...defaultParams,
    ...params,
    api_sig: sign(params)
  })

  const { body } = await request.post(LASTFM_API_URL).query(query)

  return body
}

module.exports = {
  getRecentTracks,
  getSession,
  getTopAlbums,
  getTopArtists,
  getTopTracks,
  getUserInfo,
  loveTrack,
  unloveTrack
}
