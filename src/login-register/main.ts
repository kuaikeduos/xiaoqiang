import App from './App.svelte';
import { LoginProps } from './interface'

let app: any;
function create(props: LoginProps) {

	if (app) {
		// TODO destory
		console.log('rendered')
		return
	}

	app = new App({
		target: document.body,
		props
	});
}

// @ts-ignore
window.xqui = {
	login: create
}