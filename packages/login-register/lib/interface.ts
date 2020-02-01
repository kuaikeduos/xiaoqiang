export type LoginAction = 'login' | 'register' | 'forget-pwd';

export interface LoginProps {
  logo?: string,
  useEmail: boolean,
  action: LoginAction,
  requestRegister: (...args:any) => void,
  requestLogin: (...args:any) => void,
  requestResetPwd: (...args:any) => void,
  visible: boolean
}