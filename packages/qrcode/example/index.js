import '../lib/index'

document.body.innerHTML = `
  <xq-qrcode
    color='yellow'
    class='qrcode'
    value="http://www.ruanyifeng.com/blog/2019/08/web_components.html" size=200>
  </xq-qrcode>

  <xq-qrcode id="async-change" value="xxxx" size=110></xq-qrcode>
`

// TODO a bug attributeChangedCallback
// attributeChangedCallback(attrName, oldVal, newVal) {
//    console.log(attrName, oldVal, newVal)
// }
setTimeout(function() {
  // document.querySelector('#async-change').setAttribute('value', 'https://passport.kuaizhan.com/main/login/wx-scan-login?payload=eyJzaXRlX2lkIjogNTMwNjY0OTQ1MSwgImlkIjogIjE2MjY5MTU0NTg5YzRiZGQ5MDMzYzQ4NWY1M2Y4NmM2In0=')
  document.querySelector('#async-change').setAttribute('color', 'blue')
}, 2000)
