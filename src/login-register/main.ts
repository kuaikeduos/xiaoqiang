import App from './App.svelte';
import { LoginProps } from './interface'

let app: any;
function create(props: LoginProps) {

	if (app) {
    // destroy
    console.log('rendered')
    const loginRegister = document.querySelector('.login-box');
    if (loginRegister) {
      document.body.removeChild(loginRegister)
    }
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