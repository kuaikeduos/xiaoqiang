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
    if (localStorage.getItem('account')) {
      account = localStorage.getItem('account')
    }
    if (localStorage.getItem('pwd')) {
      password = localStorage.getItem('pwd')
    }
  })

  function handleLogin() {
    console.log(account, password, isRemember)
    requestLogin()
    if (isRemember) {
      localStorage.setItem('account', account);
      localStorage.setItem('pwd', password);
    }
    isRemember = false
  }

  const accountLabel = useEmail ? '手机号/邮箱' : '手机号';
</script>

<div class="login-action">
  <TextField
    value={account}
    label={accountLabel}
    onInput={(value) => { account = value }}
  />
  <br />
  <TextField
    value={password}
    label="密码"
    type="password"
    onInput={(value) => { password = value }}
  />
  <br />
  <Row style='margin-bottom: 7px;'>
    <Col span={12}>
      <Checkbox bind:checked={isRemember} label='记住我' />
    </Col>
    <Col span={12}>
      <a on:click={onForgetPwd} href="javascript:void();" class="login__forget">忘记密码?</a>
    </Col>
  </Row>
  <Button theme='primary' on:click={handleLogin}>
    立即登录
  </Button>
  <Button on:click={onRegister}>
    马上注册
  </Button>
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