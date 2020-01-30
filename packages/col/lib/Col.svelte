<svelte:options tag="xq-col" />
<script lang="ts">
  export let span: number = 24;

</script>

<div style="display:flex;justify-content:center;flex-direction:column;width:{span / 24 * 100}%">
  <slot></slot>
</div>

<style>
:host {
  width: 50%;
}
</style>
