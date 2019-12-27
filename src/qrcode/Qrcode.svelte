<svelte:options tag="xq-qrcode" />
<script>
  import { onMount } from 'svelte';
	
	// 有个尴尬的问题
	// web component 的 attribute 不能出现大写字母
	// js 变量名不能是 x-y 的形式的
	// 所以只能用下划线的形式了
	// 不过采用的web component attribute 是中划线的
	export let value;
	export let size; 
	
	let qrcode;
	let qrcodeBind;
	
	function loadQrcodeSourceJs(callback) {

		if (window.QRCode) {
			console.log('qrcode already load')
			callback()
			return
		}

		let script = document.createElement('script');
		script.src = "//cdn.kuaizhan.com/pub/static/common/qrcode.min.js"
		if (qrcodeBind) {
			qrcodeBind.append(script);
		}
		
		script.onload = function() {
			callback()
		}
	}
			
	onMount(() => {
		loadQrcodeSourceJs(function() {
			qrcode = new QRCode(qrcodeBind, {
				text: value,
				width: size,
				height: size,
				colorDark : "#000000",
				colorLight : "#ffffff",
				correctLevel : QRCode.CorrectLevel.H
			});		
		});
	});
</script>

<style>
</style>

<div
	bind:this={qrcodeBind}
>
</div>
