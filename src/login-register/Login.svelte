<svelte:options tag="xq-login" />
<script lang="ts">
  import { onMount } from 'svelte';
  import Row from '../components/Row.svelte';
  import Col from '../components/Col.svelte';
  import TextField from '../components/TextField.svelte';
  import Button from '../components/Button.svelte';
  import Checkbox from '../components/Checkbox.svelte';
  import { LoginProps } from './interface.ts';

  export let useEmail: LoginProps['useEmail'];
  export let onForgetPwd;
  export let onRegister;
  export let requestLogin = () => null;

  let account: string = '';
  let password: string = '';
  let isRemember: boolean = false;

  onMount(() => {
    if (localStorage.getItem('xq-account')) {
      account = localStorage.getItem('xq-account')
      isRemember = true
    }
    if (localStorage.getItem('xq-pwd')) {
      password = localStorage.getItem('xq-pwd')
      isRemember = true
    }
  })

  function handleLogin() {
    requestLogin({
      phone: account,
      password,
    })
    if (isRemember) {
      localStorage.setItem('xq-account', account);
      localStorage.setItem('xq-pwd', password);
    } else {
      localStorage.setItem('xq-account', account);
      localStorage.setItem('xq-pwd', password);
    }

  }

  const accountLabel = useEmail ? '手机号/邮箱' : '手机号';
</script>

<div class="login-action">
  <xq-textfield
    value={account}
    label={accountLabel}
    on_input={value => account = value}
  ></xq-textfield>
  <br />
  <xq-textfield
    value={password}
    label="密码"
    type="password"
  ></xq-textfield>
  <br />
  <xq-row styles='margin-bottom: 7px;'>
    <xq-col span={12}>
      <xq-checkbox checked={isRemember} label='记住我' />
    </xq-col>
    <xq-col span={12}>
      <a on:click={onForgetPwd} href="javascript:void();" class="login__forget">忘记密码?</a>
    </xq-col>
  </xq-row>
  <xq-button theme='primary' on:click={handleLogin}>
    立即登录
  </xq-button>
  <xq-button on:click={onRegister}>
    马上注册
  </xq-button>
</div>

<style>
.login-action {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login__forget {
  text-align:right;
  text-decoration: underline;
  color: #A3A3A3;
}

</style>