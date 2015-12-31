module.exports = {
  splash: function (ctx, next) {
    ctx.ractive.template = require('./templates/pages/splash.html')
    next()
  },
  about: function (ctx, next) {
    ctx.ractive.template = require('./templates/pages/about.html')
    next()
  },
  settings: function (ctx, next) {
    ctx.ractive = require('./controllers/settings.js')({
      user: ctx.state.user
    })
    next()
  },
  profile: function (ctx, next) {
    ctx.ractive = require('./controllers/profile.js')({
      nickname: ctx.params.nickname,
      user: ctx.state.user
    })
    next()
  },
  publish: function (ctx, next) {
    ctx.ractive = require('./controllers/publish.js')({
      user: ctx.state.user
    })
    next()
  },
  view: function (ctx, next) {
    ctx.ractive = require('./components/dat-view')({
      user: ctx.state.user,
      metadatId: ctx.params.id
    })
    next()
  },
  admin: function (ctx, next) {
    ctx.ractive = require('./components/admin')({
      user: ctx.state.user,
      metadatId: ctx.params.id,
    })
    next()
  },
  browse: function (ctx, next) {
    ctx.ractive = require('./controllers/browse.js')({
      user: ctx.state.user,
      query: ctx.params.query
    })
    next()
  }
}
