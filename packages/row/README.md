# `row`

> Row

```ts
interface XqRowProps {
  span?: number,   // span/24 | 24
  styles?: string, // css string | ''
}
```

## Usage

```tsx
import React from 'react';
import '@xqui/col';
import '@xqui/row';
import '@xqui/checkbox';

function Foo() {
  return (
    <xq-row styles='margin-bottom: 7px;'>
      <xq-col span={12}>
        <xq-checkbox checked={isRemember} label='记住我' />
      </xq-col>
      <xq-col span={12}>
        <a on:click={onForgetPwd} href="javascript:void();" class="login__forget">忘记密码?</a>
      </xq-col>
    </xq-row>
  )
}
```
