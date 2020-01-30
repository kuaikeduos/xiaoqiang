<svelte:options tag="xq-login-register" />
<script lang="ts">
  import Login from './Login.svelte';
  import Register from './Register.svelte';
  import { LoginProps, LoginAction } from './interface.ts';
  import { closeImageBase, titleMaps } from 'src/constants/constant';

  export let logo: LoginProps['logo'];
  export let useEmail: LoginProps['useEmail'];
  export let action: LoginProps['action'] = 'login';
  export let requestRegister = () => null;
  export let requestResetPwd = () => null;
  export let requestLogin = () => null;
  export let visible: LoginProps['visible'] = false;

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

  function closeBox() {
    visible = false
  }
</script>


<main class="login-box" style={visible ? '' : 'display: none;'}>
  <div class="login-box__mask" />
  <div class="login-box__wrapper">
    <section class="login-box__header">
      {titleMaps[_action]}
      <img alt='x' class='box-close-icon' src={closeImageBase} on:click={closeBox} />
    </section>
    <section class="login-box__content">
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
        requestLogin={requestLogin}
      />
    {/if}
    {#if _action === 'register'}
      <xq-register
        useEmail={useEmail}
        onLogin={toLogin}
        requestRegister={requestRegister}
      />
    {/if}
    {#if _action === 'forget-pwd'}
      <xq-register
        useEmail={useEmail}
        onLogin={toLogin}
        requestResetPwd={requestResetPwd}
        type='forget-pwd'
      />
    {/if}
    </section>
  </div>
</main>

<style>
/* TODO */
:global(.mdc-text-field__input) {
  padding: 20px 16px 6px !important;
}

:global(*) {
  box-sizing: border-box;
}
.login-box {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  z-index: 999;
}

.login-box__wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 409px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #EBECED;
  border-radius: 6px;
  font-size: 12px;
  z-index: 1000;
}
.login-box__header {
  text-align: center;
  padding: 16px 0;
  border-bottom: 1px solid #EBECED;
  height: 48px;
  line-height: 1;
  vertical-align: middle;
  font-size: 16px;
  width: 100%;
  z-index: inherit;
}

.login-box__mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #000;
  opacity: 0.4;
  z-index: 999;
}
.box-close-icon {
  width: 11px;
  height: auto;
  object-fit: cover;
  position: absolute;
  margin-top: 2px;
  right: 27px;
  cursor: pointer;
}

.login-box__content {
  padding: 15px 55px 34px;
  z-index: inherit;
}

.login-logo {
  height: 30px;
  text-align: center;
  margin-bottom: 16px;
}

.login-logo img {
  height: 100%;
}


@media screen and (max-width: 600px) {
  .login-box__wrapper {
    width: 298px;
  }

  .login-box__content {
    padding: 12px 25px 25px;
  }
}
</style>