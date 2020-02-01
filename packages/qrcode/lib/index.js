import Qrcode from './Qrcode.svelte';

// TODO 将web component中划线形式的attribute转成驼峰
// let defineElement = function(elementName, element) {
//   if (!window.customElements.get(elementName)) {
//     window.customElements.define(elementName, element);
//   }
// };

// defineElement('xq-qrcode', class Ok extends Qrcode {
//   constructor(props) {
//     super(props)
//   }
// })

export default Qrcode;