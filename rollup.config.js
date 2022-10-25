import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve'

export default [{
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'theSingleSpa',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.SERVE ? serve({
      open: true,
      contentBase: '',
      openPage: '/index.html',
      host: 'localhost',
      port: 3001
    }) : null
  ]
}, {
  input: './example/app1/singlespa-config.js',
  output: {
    file: './example/app1/dist/singlespa-config.js',
    format: 'umd',
    name: 'theSingleSpa',
    sourcemap: true
  },
},
{
  input: './example/app2/singlespa-config.js',
  output: {
    file: './example/app2/dist/singlespa-config.js',
    format: 'umd',
    name: 'theSingleSpa',
    sourcemap: true
  },
}]