const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Blue-Design',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/charles/develop/blued-docz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './pages/**/**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'doc-site',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Blue-Design',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/charles/develop/blued-docz',
          templates:
            '/Users/charles/develop/blued-docz/node_modules/docz-core/dist/templates',
          docz: '/Users/charles/develop/blued-docz/.docz',
          cache: '/Users/charles/develop/blued-docz/.docz/.cache',
          app: '/Users/charles/develop/blued-docz/.docz/app',
          appPackageJson: '/Users/charles/develop/blued-docz/package.json',
          appTsConfig: '/Users/charles/develop/blued-docz/tsconfig.json',
          gatsbyConfig: '/Users/charles/develop/blued-docz/gatsby-config.js',
          gatsbyBrowser: '/Users/charles/develop/blued-docz/gatsby-browser.js',
          gatsbyNode: '/Users/charles/develop/blued-docz/gatsby-node.js',
          gatsbySSR: '/Users/charles/develop/blued-docz/gatsby-ssr.js',
          importsJs: '/Users/charles/develop/blued-docz/.docz/app/imports.js',
          rootJs: '/Users/charles/develop/blued-docz/.docz/app/root.jsx',
          indexJs: '/Users/charles/develop/blued-docz/.docz/app/index.jsx',
          indexHtml: '/Users/charles/develop/blued-docz/.docz/app/index.html',
          db: '/Users/charles/develop/blued-docz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
