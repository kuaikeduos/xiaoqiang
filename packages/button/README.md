# `xq-button`

> A Web component for button

```ts
XqButtonProps {
  theme?: 'default' | 'primary' | 'default-bordered', // theme | default
  style?: string,    // css style string | ''
  disabled?: boolean // disabled | false
}
```

## Usage

- script
```html
<script src="./qrcode.js"></script>
<xq-button value="duck" size='200'></xq-button>
```

- es6+/modern lib(framework)
```js
import React from 'react';
import '@xqui/button';

function Foo() {
  return (
    <xq-button value="duck" size='200' color="yellow"></xq-button>
  )
}
```
