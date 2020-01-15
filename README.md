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

### Custom tag

`https://svelte.dev/docs#Custom_element_API`

### Build

#### script direct

```sh
- qrcode a.js
- suspend-wiki,qrcode ab.js (a means suspend-wiki, b means qrcodes)
```

例: 

```sh
MODULE=--qrcode npm run build
MODULE=--qrcode,suspend-wiki npm run build
```

#### import

```js
// at page 
import '@kuaizhan/xq/qrcode'
import '@kuaizhan/xq/suspend-wiki'
```

## smui(弃用)

- [svelte-material-ui](https://github.com/hperrin/svelte-material-ui)
- [smui-example-rollup](https://github.com/hperrin/smui-example-rollup)

textfield/button/checkbox 三个一用就是110kb，吓死人, 我们不需要那么丰富的样式, 参考写即可

## 每个不能超过50kb

项目性质决定对性能的要求比较高，牺牲功能性