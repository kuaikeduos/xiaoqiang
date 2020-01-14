import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2";

const svelteOptions = require("./svelte.config");

const production = !process.env.ROLLUP_WATCH;

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
		customElement: false
	}, 	
}

const mod = process.argv.slice(-1)[0].slice(2);
console.log(mod, 'module')

export default {
	input: `src/${mod}/main.ts`,
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: `public/build/${production ? mod : 'bundle'}.js`
	},
	plugins: [
		svelte({
			...svelteOptions,
			// enable run-time checks when not in production
			dev: !production,
			customElement: moduleConfig[mod].customElement,
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