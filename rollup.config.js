import babel from 'rollup-plugin-babel'

export default {
  entry: 'lib/apisauce.js',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-0']
    })
  ],
  exports: 'named',
  dest: 'dist/apisauce.js',
  external: [
    'ramda',
    'axios',
    'ramdasauce'
  ]
}
