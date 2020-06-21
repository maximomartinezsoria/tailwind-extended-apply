const postcss = require('postcss')

module.exports = postcss.plugin('extended-apply-tailwind', extendedApplyTailwind)

function extendedApplyTailwind(options) {
  return function(css) {
    css.walkRules(function (rule) {
      rule.nodes.forEach(node => {
        if(node.name === 'apply') {
          node.params.split(' ').reverse().forEach(param => {
            if(param.includes(':')) {
              const parts = param.split(':')
              const size = parts.shift()
              const className = parts.join(':')
              const root = postcss.parse(`@screen ${size} {\n  ${rule.selector}{\n  @apply ${className};  \n}\n}`)
              node.parent.after(root)
              node.params = node.params.split(param).join(' ')
            }
          })
        }
      })
    })
  }
}