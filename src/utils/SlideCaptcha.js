
import { joinParamsToUrl } from './tools';
import { GET_SLIDE_CAPTCHA } from '../constants/constant';

const params = {
  bizType: 'AIDUOKA_DISTRIBUTION_WITHDROW',
  client: 'PC'
}
const url = joinParamsToUrl(GET_SLIDE_CAPTCHA, params)

const header = {};
header['X-Client-Type'] = 'PC'
header['X-App-Version'] = '1.0.0'
header['Content-Type'] = 'application/x-www-form-urlencodedv'
/**
 * 滑动验证码调接口
*/
export default async function slideCaptcha(successCallback = () => {}) {
  const id = 'TCaptcha'

  fetch(url, { 
    method: 'GET',
    mode:'cors',
    headers: header,
  }).then(async (res) => {
    return res.json()
  }).then(resData => {
    return resData.data.url
  }).then(data =>{
    function cbfn(retJson) {
      if (retJson.ret === 0) {
        // 用户验证成功
        successCallback(retJson.ticket);
        return;
      }
    }
    const capOption = { callback: cbfn, showHeader: true, type:'popup' };
    
    if (window.capInit) {
      window.capDestroy();
      window.capInit(document.getElementById(id), capOption)
    } else {
      const head = document.getElementsByTagName('head')[0];
      const newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = data;
      head.appendChild(newScript);
      /* eslint-disable */
      newScript.onload = newScript.onreadystatechange = () => {
        window.capDestroy();
        window.capInit(document.getElementById(id), capOption)
      }
    }
  }).catch(err => {
    console.log(err)
  })
}