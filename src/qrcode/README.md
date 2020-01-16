# xq-qrcode

```ts
XqQrcodeProps {
  color?: string,       // 颜色 
  value: string,        // 二维码的值
  size: string | number // 长宽的大小
}
```

## 用例

```html
<script src="./qrcode.js"></script>
<xq-qrcode value="duck" size='200'></xq-qrcode>
```

```html
<script src="./qrcode.js"></script>
<xq-qrcode size='200'></xq-qrcode>

<script>
var img_src = 'img_callback_url';
$('xq-qrcode').attr('value', img_src);
</script>
```