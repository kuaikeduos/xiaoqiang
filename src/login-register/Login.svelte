<script lang="ts">
  import Row from '../components/Row.svelte';
  import Col from '../components/Col.svelte';
  import TextField from '../components/TextField.svelte';
  import Button from '../components/Button.svelte';
  import { LoginProps } from './interface.ts';

  export let useEmail: LoginProps['useEmail'];
  export let onForgetPwd;
  export let onRegister;

  let account: string = '';
  let password: string = '';
  let isRemember: boolean = false;

  function handleLogin() {
    console.log(account, password, isRemember)
  }

  const accountLabel = useEmail ? '手机号/邮箱' : '手机号';
</script>

<div class="login-action">
  <TextField
    bind:value={account}
    label={accountLabel}
  />
  <br />
  <TextField
    bind:value={password}
    label="密码"
    type="password"
  />
  <Row>
    <Col span={12}>
      <span slot="label">记住我</span>
    </Col>
    <Col span={12}>
      <a on:click={onForgetPwd} href="javascript:void();" class="login__forget">忘记密码</a>
    </Col>
  </Row>
  <Button variant="raised" on:click={handleLogin}>
    立即登录
  </Button>
  <Button variant="outlined" on:click={onRegister}>
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
  cursor: pointer;
  text-decoration: none;
}
</style>