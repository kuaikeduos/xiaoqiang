# `xq-qrcode`

> A web component for generate a qrcode image based on qrcode.js

```ts
XqQrcodeProps {
  color?: string,       // 颜色 
  value: string,        // 二维码的值
  size: string | number // 长宽的大小
}
```

## Usage

- script
```html
<script src="./qrcode.js"></script>
<xq-qrcode value="duck" size='200'></xq-qrcode>
```

- dynamic change value
```html
<script src="./qrcode.js"></script>
<xq-qrcode size='200'></xq-qrcode>

<script>
var img_src = 'img_callback_url';
$('xq-qrcode').attr('value', img_src);
</script>
```

- es6+/modern lib(framework)
```js
import React from 'react';
import '@xqui/qrcode';

function Foo() {
  return (
    <xq-qrcode value="duck" size='200' color="yellow"></xq-qrcode>
  )
}
```