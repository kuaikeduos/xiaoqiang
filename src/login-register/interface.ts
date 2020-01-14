export type LoginAction = 'login' | 'register' | 'forget-pwd';

export interface LoginProps {
  logo: string,
  useEmail: boolean,
  action: LoginAction,
}