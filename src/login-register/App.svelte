<script lang="ts">
  import Login from './Login.svelte';
  import { LoginProps, LoginAction } from './interface.ts';

  export let logo: LoginProps['logo'];
  export let useEmail: LoginProps['useEmail'];
  export let action: LoginProps['action'] = 'login';

  let _action: LoginAction = action;

  function handleForgetPwd() {
    _action = 'forget-pwd'
  }

  function handleRegister() {
    _action = 'register'
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
      logo={logo}
      useEmail={useEmail}
      onForgetPwd={handleForgetPwd}
      onRegister={handleRegister}
    />
  {/if}
  {#if _action === 'register'}
    <div>register</div>
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
  width: 384px;
  padding: 45px 30px 86px;
  background-color: #fff;
  box-shadow: 0 0 15px 0 #85a9e7;
}

.login-logo {
  height: 30px;
  text-align: center;
  margin-bottom: 10px;
}

.login-logo img {
  height: 100%;
}
</style>