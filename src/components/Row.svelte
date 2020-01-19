<script lang="ts">
  export let span: number = 24;
  export let style:string = '';
</script>

<div style={`display:flex; align-items:center; width:${span / 24 * 100}%; ${style}`}>
  <slot></slot>
</div>
