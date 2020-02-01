/**
 * 拼接参数到url
 */
export function joinParamsToUrl(url, params) {
  if (params) {  
    let paramsArray = [];  
    //拼接参数  
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
    if (url.search(/\?/) === -1) {  
        url += '?' + paramsArray.join('&')  
    } else {  
        url += '&' + paramsArray.join('&')  
    }  
  } 
  return url
}
