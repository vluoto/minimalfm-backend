const lastfm = require('../services/lastfm')
const buildRedirectURL = require('../utils/build-redirect-url')

module.exports = router => {
  router.get('/authenticate', async ctx => {
    ctx.redirect(buildRedirectURL())
    ctx.status = 301
    ctx.body = 'Redirecting to Last.fm'
  })

  router.get('/session', async ctx => {
    ctx.body = await lastfm.getSession(ctx.query)
  })

  router.get('/recent-tracks', async ctx => {
    ctx.body = await lastfm.getRecentTracks(ctx.query)
  })

  router.get('/top-albums', async ctx => {
    ctx.body = await lastfm.getTopAlbums(ctx.query)
  })

  router.get('/top-artists', async ctx => {
    ctx.body = await lastfm.getTopArtists(ctx.query)
  })

  router.get('/top-tracks', async ctx => {
    ctx.body = await lastfm.getTopTracks(ctx.query)
  })

  router.get('/user-info', async ctx => {
    ctx.body = await lastfm.getUserInfo(ctx.query)
  })

  router.post('/love-track', async ctx => {
    ctx.body = await lastfm.loveTrack(ctx.request.body, ctx.get('session-id'))
  })

  router.post('/unlove-track', async ctx => {
    ctx.body = await lastfm.unloveTrack(ctx.request.body, ctx.get('session-id'))
  })
}
