<script lang="ts">
  import Button, { Label } from '@smui/button';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Row from '../components/Row.svelte';
  import Col from '../components/Col.svelte';
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
  <Textfield
    bind:value={account}
    label={accountLabel}
    variant="outlined"
  />
  <br />
  <Textfield
    bind:value={password}
    label="密码"
    variant="outlined"
    type="password"
  />
  <Row>
    <Col span={12}>
      <FormField>
        <Checkbox bind:checked={isRemember} />
        <span slot="label">记住我</span>
      </FormField>
    </Col>
    <Col span={12}>
      <a on:click={onForgetPwd} href="javascript:void();" class="login__forget">忘记密码</a>
    </Col>
  </Row>
  <Button variant="raised" on:click={handleLogin}>
    <Label>立即登录</Label>
  </Button>
  <Button variant="outlined" on:click={onRegister}>
    <Label>马上注册</Label>
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