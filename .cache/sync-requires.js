const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-theme-mdx-deck-src-templates-deck-js": hot(preferDefault(require("/Users/andrewboorde/GithubRepos/react-testing-talk/node_modules/gatsby-theme-mdx-deck/src/templates/deck.js")))
}

