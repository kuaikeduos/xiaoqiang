import '../lib/index'

document.body.innerHTML = `
  <xq-button>
    我是按钮
  </xq-button>
`

const button = document.querySelector('xq-button');
// native
button.addEventListener('click', function() {
  console.log('button click')
});

// xq events