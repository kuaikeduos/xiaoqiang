<script lang="ts">
  import Login from './Login.svelte';
  import Register from './Register.svelte';
  import { LoginProps, LoginAction } from './interface.ts';

  export let logo: LoginProps['logo'];
  export let useEmail: LoginProps['useEmail'];
  export let action: LoginProps['action'] = 'register';
  export let title: LoginProps['title'] = '';

  let _action: LoginAction = action;

  function toForgetPwd() {
    _action = 'forget-pwd'
  }

  function toRegister() {
    _action = 'register'
  }

  function toLogin() {
    _action = 'login'
  }
</script>

<main class="login-box">
  {#if logo}
    <section class="login-logo">
      <img src={logo} alt="logo" />
    </section>
  {/if}
  {#if _action === 'login'}
    <Login
      useEmail={useEmail}
      onForgetPwd={toForgetPwd}
      onRegister={toRegister}
    />
  {/if}
  {#if _action === 'register'}
    <div>
      <Register
        useEmail={useEmail}
        onLogin={toLogin}
      />
    </div>
  {/if}
  {#if _action === 'forget-pwd'}
    <div>forget pwd</div>
  {/if}
</main>

<style>
/* TODO */
:global(.mdc-text-field__input) {
  padding: 20px 16px 6px !important;
}

.login-box {
  width: 409px;
  padding: 45px 55px 34px;
  background-color: #fff;
  box-shadow: 0 0 15px 0 #85a9e7;
  box-sizing: border-box;
  font-size: 12px;
}

.login-logo {
  height: 30px;
  text-align: center;
  margin-bottom: 16px;
}

.login-logo img {
  height: 100%;
}
</style>