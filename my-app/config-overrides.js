// 根目录创建
const {
  override,
  fixBabelImports,
  // addDecoratorsLegacy,
  addBabelPlugins
} = require('customize-cra') 

module.exports = override(
  // 按需加载 的配置选项
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'       
  }),
  addBabelPlugins([
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ]),
  // addDecoratorsLegacy() // 配置装饰器
)