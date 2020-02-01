# `xq-video`

> A web component video

```ts
interface XqVideoProps {
  src: string,     // 视频地址
  poster?: string  // 视频封面
}
```

## Usage

```js
import React from 'react';
import '@xqui/video';

function Foo() {
  return (
    <xq-video src="//pic.kuaizhan.com/g3/7e/6a/6b03-b5ba-44db-98a9-7945d3de752176.mp4"></xq-video>
  )
}
```
