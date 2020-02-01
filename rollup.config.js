import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2";
import alias from '@rollup/plugin-alias';
import replace from './rollup-plugins/replace';
import path from 'path';

const svelteOptions = require("./svelte.config");

const production = !process.env.ROLLUP_WATCH;
const projectRootDir = path.resolve(__dirname);

const moduleConfig = {
	'suspend-wiki': {
		alais: 'a',
		customElement: false
	},
	'qrcode': {
		alais: 'b',
		customElement: true
	},
	'login-register': {
		alais: 'c',
		customElement: true
	},
	'video': {
		alais: 'd',
		customElement: true
	},
}

const mod = process.argv.slice(-1)[0].slice(2);

console.info(mod, 'module')

const inputFile = production ? 'lib' : 'example';
const outputFile = production ?
	`packages/${mod}/dist/index.js`: 
	`public/build/bundle.js` ;


export default {
	input: `packages/${mod}/${inputFile}/index.js`,
	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		file: outputFile
	},
	plugins: [
		alias({
      resolve: ['.js'], //optional, by default this will just look for .js files or folders
      entries:[
				{ find: /^@xqui\/(.*)/, replacement: path.resolve(projectRootDir, 'packages/$1/lib/')},
				{ find: 'src', replacement: path.resolve(projectRootDir, 'src')},
      ]
    }),
		svelte({
			...svelteOptions,
			// enable run-time checks when not in production
			dev: !production,
			customElement: moduleConfig[mod] ? moduleConfig[mod].customElement : true,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			// css: css => {
			// 	css.write('public/build/bundle.css');
			// }
			
		}),
    postcss({
      extract: true,
      minimize: true,
      use: [
        ['sass', {
          includePaths: [
            './theme',
            './node_modules'
          ]
        }]
      ]
    }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		typescript(),
		replace(),  // replace __$$self => $$self

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
    !production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser({
			ie8: true
		})
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}