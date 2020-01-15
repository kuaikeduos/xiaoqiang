<script lang="ts">
  import Row from '../components/Row.svelte';
  import Col from '../components/Col.svelte';
  import TextField from '../components/TextField.svelte';
  import Button from '../components/Button.svelte';
  import Checkbox from '../components/Checkbox.svelte';
  import Radio from '../components/Radio.svelte';
  import { LoginProps } from './interface.ts';

  export let useEmail: LoginProps['useEmail'];
  export let type: 'register' | 'forget-pwd' = 'register'
  export let onLogin = () => {};

  let account: string = '';
  let verificationCode: string = '';
  let creatPassword: string = '';
  let confirmPassword: string = ''; 
  let selected = 'phone';

  function handleRadioChange(value) {
    selected = value
  }

  function handleRegister() {
    console.log(account, verificationCode, creatPassword, confirmPassword)

  }

</script>

<div class="register-action">
  {#if useEmail}
    <Row style='margin-bottom: 14px;'>
      <Radio value='phone' checked={selected === 'phone'} label='通过手机' onChange={() => handleRadioChange('phone')} />
      <Radio value='email'  checked={selected === 'email'} label='通过邮箱' onChange={() => handleRadioChange('email')} />
    </Row>
  {/if}
    <TextField
      value={account}
      onInput={(value) => { account = value }}
      label={selected === 'phone' ? '手机号' : '邮箱'}
      placeholder={`请输入${selected === 'phone' ? '手机号' : '邮箱'}`}
    />
  {#if selected === 'phone'}
    <TextField
      value={verificationCode}
      onInput={(value) => { verificationCode = value }}
      label="验证码"
      span="16"
    >
      <div slot="opt" style="padding-left: 6px;"><Button theme="default-bordered">获取验证码</Button></div>
    </TextField>
  {/if}
  <TextField
    value={creatPassword}
    onInput={(value) => { creatPassword = value }}
    label='创建密码'
    type="password"
    placeholder='请输入密码'
  />
  <TextField
    value={confirmPassword}
    onInput={(value) => { confirmPassword = value }}
    label='确认密码'
    type="password"
    placeholder='请输入密码'
  />
  <Row style='margin-bottom: 7px;'>
    <Checkbox>
      <span class="agree-contract" slot='label'>我同意<a href="/">《畅盈服务协议》</a></span>
    </Checkbox>
  </Row>
  <Button theme='primary' on:click={handleRegister}>
    马上注册
  </Button>
  <Button on:click={onLogin}>
    回到登录
  </Button>
</div>

<style>
.register-action {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.agree-contract {
  color: #A3A3A3;
}

.agree-contract a {
  color: #115BE8;
}
</style>