// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---pages-feedback-alert-index-mdx": () => import("./../../../../pages/feedback/alert/index.mdx" /* webpackChunkName: "component---pages-feedback-alert-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

