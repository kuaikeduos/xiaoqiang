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
	export let color = '#000000';
	
	let qrcode;
	let qrcodeBind;
	let qrcodeWrapBind;

	export function getQrcodeUrl() {
		return qrcodeWrapBind.querySelector('img').src;
	}
	
	function loadQrcodeSourceJs(callback) {

		if (window.QRCode) {
			console.log('qrcode already load')
			setTimeout(function() {
				// hack
				/**
				 * 对测试用例
				  function createQrcode() {
				    q = document.createElement('xq-qrcode')
				 	  q.value = 'xx'
				 	  q.size = '20'
				 	  document.body.appendChild(q)
					}
					createQrcode()
					createQrcode() // 放到 setTimeout 第二个才正常
				 */
				callback()
			}, 0)
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
				colorDark : color,
				colorLight : "#ffffff",
				correctLevel : QRCode.CorrectLevel.H
			});

			// 虽然qrcode自己默认会创建一个img标签
			// 但是不知道为什么就是无法长按保存，故还是自己从canvas生成一张
			function qrcodeImgFix() {
				var canvas = qrcodeWrapBind.getElementsByTagName('canvas')[0];
				var img = convertCanvasToImage(canvas);
				qrcodeWrapBind.append(img);
				function convertCanvasToImage(canvas) {  
					var image = new Image();  
					image.src = canvas.toDataURL("image/png");
					image.style = 'width:100%';
					return image;  
				}
			}
			qrcodeImgFix()
		});
	});
</script>

<style>
	/* 隐藏 qrcode 自己创建的图片 */
	main div {
		display: none;
	}
	main {
		display: inline-block;
	}
</style>

<main
	bind:this={qrcodeWrapBind}
>
	<div
		bind:this={qrcodeBind}
	></div>
</main>
