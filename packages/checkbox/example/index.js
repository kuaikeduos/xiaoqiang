import '../lib/index';

document.body.innerHTML = `
  <xq-checkbox checked={true} label='记住我' />
`

const checkbox = document.querySelector('xq-checkbox');
// native
checkbox.addEventListener('xq:change', function(e) {
  console.log('checkbox changed', e)
});

// xq events