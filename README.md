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

