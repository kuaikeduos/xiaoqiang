<svelte:options tag="xq-row" />
<script lang="ts">
  export let span: number = 24;
  export let styles: string = '';
</script>

<div style={`display:flex; align-items:center; width:${span / 24 * 100}%; ${styles}`}>
  <slot></slot>
</div>

<style>
:host {
  width: 50%;
}
</style>