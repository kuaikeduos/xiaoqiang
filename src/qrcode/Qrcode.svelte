<svelte:options tag="xq-qrcode" />
<script>
  import { onMount } from 'svelte';
	
	// 有个尴尬的问题
	// web component 的 attribute 不能出现大写字母
	// js 变量名不能是 x-y 的形式的
	// 所以只能用下划线的形式了
	// 不过采用的web component attribute 是中划线的
	export let code_value;
	export let square_size; 
	
	let qrcode;
	let qrcodeBind;
	
	function loadQrcodeSourceJs(callback) {

		if (window.QRCode) {
			console.log('qrcode already load')
			callback()
			return
		}

		let script = document.createElement('script');
		script.src = "//static-1252921496.costj.myqcloud.com/third-party/qrcode.min.js"
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
				text: code_value,
				width: square_size,
				height: square_size,
				colorDark : "#000000",
				colorLight : "#ffffff",
				correctLevel : QRCode.CorrectLevel.H
			});		
		});
	});
</script>

<style>
  .qrcode {
    width: 200px;
    height: 200x;
    margin-top:15px;
  }
</style>

<div
	bind:this={qrcodeBind}
	class="qrcode"
>
</div>
