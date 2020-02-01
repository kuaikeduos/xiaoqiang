*Psst — looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
MODULE=--qrcode npm run dev
```

## Custom tag

`https://svelte.dev/docs#Custom_element_API`

## Build

### script direct

```sh
- qrcode a.js
- suspend-wiki,qrcode ab.js (a means suspend-wiki, b means qrcodes)
```

例: 

```sh
MODULE=--qrcode npm run build
MODULE=--qrcode,suspend-wiki npm run build
```

## Use

```js
// at page 
import '@kuaizhan/xq/qrcode'
import '@kuaizhan/xq/suspend-wiki'
```

## Polyfill

[用 Shadow DOM 和 Custom Element 实现 Web Component newraina](https://zhuanlan.zhihu.com/p/52802048)

- Shadow DOM
- Custom Element

```sh
npm install --save @webcomponents/custom-elements @webcomponents/shadydom
```

```html
<!doctype html>
<html lang="eng">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">
    <!-- 已经把这两个文件传到腾讯云上了 -->
    <script src="node_modules/shadydom/shadydom.min.js"></script>
    <script src="node_modules/custom-elements/custom-elements.min.js"></script>
    <script src="mini-form.js"></script>
  </head>
  <body></body>
</html>
```

cdn

- [custom-elements](https://cdn.kuaizhan.com/xiaoqiang/base/custom-elements.min.js)
- [shadydom](https://cdn.kuaizhan.com/xiaoqiang/base/shadydom.min.js)

load-polyfill(因为用到了 document.body 必须放在body里(IE测试结果))

```js
(function (callback) {
  function loadJs(src, callback) {
    var container = document.body;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = src;
    container.appendChild(script);
    script.onload = function() {
      callback && callback()
    }
  }

  if (window.customElements) {
    callback()
  } else {
    loadJs(
      // source map 文件没有会导致IE/edge浏览器加载失败(fuck 浪费了2个小时)
      // 文件里这行就别留着了 //# sourceMappingURL=shadydom.min.js.map
      '//cdn.kuaizhan.com/xiaoqiang/base/shadydom.min.js',
      function () {
        loadJs('//cdn.kuaizhan.com/xiaoqiang/base/custom-elements.min.js', callback)
      }
    )
  }

})(function () {
  /* code here */
})
```


## React-useXqEvent

```tsx
import React, { useState, useRef, useEffect } from "react";
import useXqEvent from '../lib/use-xq-event'

function ReactXqButtonDemo() {
  const [theme, setTheme] = useState('default');
  const button = useRef();

  useXqEvent(button, [{
    event: 'xq-click',
    handler: function() {
      console.log('click button')
      setTheme('primary')
    }
  }])

  return (
    // @ts-ignore
    <xq-button ref={button} theme={theme}>hhh</xq-button>
  )
}

export default ReactXqButtonDemo
```

## smui(弃用)

- [svelte-material-ui](https://github.com/hperrin/svelte-material-ui)
- [smui-example-rollup](https://github.com/hperrin/smui-example-rollup)

textfield/button/checkbox 三个一用就是110kb，吓死人, 我们不需要那么丰富的样式, 参考写即可

## 每个不能超过50kb

项目性质决定对性能的要求比较高，牺牲功能性

## code style

- hard to learn [shadow dom](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/%E5%BD%B1%E5%AD%90_DOM) and [custom element](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements)
- state and inner value should be camelCase
- typed for every value
- BEM for class name
- every component should compile to web component
- so every shoud be used by web component 
  - components props is undeline_name, becasue web component no case sensitivity
  - xq-col for Col component `<xq-col>duck</xq-col></xq-col>`
  - component `style` prop to be `styles`
- use less on the component root like `with:50%`, bescause it relative to the component root, not relative to father component
- but if you still want to use, you need set style on `:host` [a question](https://stackoverflow.com/questions/25193964/how-can-i-have-a-web-components-width-and-height-be-inherited-by-its-children)