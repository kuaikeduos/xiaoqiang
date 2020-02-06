import '../lib/index'
import './demo.svelte'

document.body.innerHTML = `
  <xq-button>
    我是按钮
  </xq-button>
  <xq-demo>
  </xq-demo>
`

const button = document.querySelector('xq-button');
// native
button.addEventListener('click', function() {
  console.log('button click')
});

// xq events