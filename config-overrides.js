const {alias} = require('react-app-rewire-alias');


module.exports = function override(config){
  alias({
    '@global': 'src/assets/scss/global.scss',
    '@': 'src/'
  })

  return config
}