import '../lib/index'

document.body.innerHTML = `
  <xq-button>
    我是按钮
  </xq-button>
`

const button = document.querySelector('xq-button');
button.addEventListener('xq-click', function() {
  console.log('button click')
});