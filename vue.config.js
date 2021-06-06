// vue.config.js
module.exports = {
  runtimeCompiler: true,
  
  publicPath: process.env.NODE_ENV === 'production'
    ? '/29Digit-Studio-Website/'
    : '/'
};
