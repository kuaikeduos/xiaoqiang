<script lang="ts">
  import Row from '../components/Row.svelte';
  import Col from '../components/Col.svelte';
  import TextField from '../components/TextField.svelte';
  import Button from '../components/Button.svelte';
  import Checkbox from '../components/Checkbox.svelte';
  import Radio from '../components/Radio.svelte';
  import { LoginProps } from './interface.ts';
  import slideCaptcha from '../utils/slideCaptcha';
  import request from '../utils/request';
  import { SEND_CAPTCHA_MESSAGE } from '../constants/constant';
  import { joinParamsToUrl} from '../utils/tools'

  export let useEmail: LoginProps['useEmail'];
  export let type: 'register' | 'forget-pwd' = 'register'
  export let onLogin = () => {};
  export let requestRegister = () => {};
  export let requestResetPwd = () => {};

  let selected: 'phone' | 'email' = 'phone';
  
  let account: string = '';
  let verificationCode: string = '';
  let createPassword: string = '';
  let confirmPassword: string = ''; 
  let isAgreeContract: boolean = true;
  let signKey:string = ''

  let buttonText = '获取验证码'
  let buttonDisabled = false
  let count = -1

  // 选择手机或邮箱
  function handleRadioChange(value) {
    selected = value
  }
  
  // 注册前校验
  function checkAll() {
    if (!account) {
      alert('请输入手机号')
      return false;
    }
    if (selected === 'phone' && !verificationCode) {
      alert('请输入验证码')
      return false;
    }
    if (!createPassword) {
      alert('请创建密码')
      return false;
    }
    if (!confirmPassword) {
      alert('请确认密码')
      return false;
    }
    if (!checkPasswords) {
      return false;
    }

    return true;
  }

  // 校验手机号
  function checkphone(value) {
    if (value.length !== 11) {
      alert('请输入11位手机号')
    }
  }

  // 校验两次密码是否一致
  function checkPasswords() {
    if (!confirmPassword) {
      return;
    }
    if (confirmPassword !== createPassword) {
      alert('两次输入密码不一致')
      return false;
    }
    return true;
  }

  // 点击注册
  function handleRegister() {
    const isOk = checkAll()
    if (!isOk) {
      return
    } 
    requestRegister({
      phone: account, 
      code: verificationCode, 
      password: createPassword, 
      signKey: signKey,
      type: selected
    });
  }

  // 点击重设密码
  function handleResetPwd() {
    console.log('reset')
    requestResetPwd({
      phone: account, 
      code: verificationCode, 
      password: createPassword, 
      type: selected
    })
  }

  // 获取验证码
  function handleGetVeriCode() {
    if (!account) {
      alert('请输入手机号')
      return;
    }

    slideCaptcha(async (ticket) => {
      console.log('success')
      count = 60
      const countDown = setInterval(() => {
        count -= 1
        buttonDisabled = true
        buttonText = `${count}秒后重试`
        if (count < 0) {
          clearInterval(countDown)
          buttonDisabled = false
          buttonText = '重新获取'
        }
      }, 1000)
      const url = joinParamsToUrl(SEND_CAPTCHA_MESSAGE, {
        isCheckTicket: true,
        phone: account,
        templateId: 1001,
        ticket,	
        bizType: 'KUAIZHAN_LOGIN'
      })
      request(url, {
        method: 'GET',
      }).then(res => {
        signKey = res.data.signKey
        // console.log(res)
      })
    })
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
      <div slot="opt" style="padding-left: 6px;">
        <Button theme="default-bordered" on:click={handleGetVeriCode} style="margin-bottom: 0;" disabled={buttonDisabled}>{buttonText}</Button>
      </div>
    </TextField>
  {/if}
  {#if type === 'register' || (type === 'forget-pwd' && selected === 'phone')}
  <TextField
    value={createPassword}
    onInput={(value) => { createPassword = value }}
    onBlur={checkPasswords}
    label='创建密码'
    type="password"
    placeholder='请输入密码'
  />
  <TextField
    value={confirmPassword}
    onInput={(value) => { confirmPassword = value }}
    onBlur={checkPasswords}
    label='确认密码'
    type="password"
    placeholder='请输入密码'
  />
  {/if}
  {#if type === 'register'}
    <Row style='margin-bottom: 7px;'>
      <Checkbox checked={isAgreeContract}>
        <span class="agree-contract" slot='label'>我同意<a href="/">《畅盈服务协议》</a></span>
      </Checkbox>
    </Row>
    <Button theme='primary' on:click={handleRegister}>
      马上注册
    </Button>
  {/if}
  {#if type === 'forget-pwd'}
    <Button theme='primary' on:click={handleResetPwd}>
      重设密码
    </Button>
  {/if}
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