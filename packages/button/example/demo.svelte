<svelte:options tag="xq-demo" />

<script>
import '@xqui/button';
import { onMount, onDestroy } from 'svelte'
let button;

function handleClick() {}

onMount(() => {
  button.addEventListener('click', function() {
    console.log('xx')
  })
})

</script>

<xq-button bind:this={button}>
测试
</xq-button>