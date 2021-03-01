

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---pages-feedback-alert-index-mdx": (preferDefault(require("/Users/charles/develop/blued-docz/pages/feedback/alert/index.mdx"))),
  "component---src-pages-404-js": (preferDefault(require("/Users/charles/develop/blued-docz/.docz/src/pages/404.js")))
}

