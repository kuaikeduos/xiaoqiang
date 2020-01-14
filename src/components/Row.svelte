<script lang="ts">
  export let span: number = 24;
</script>

<div style="display:flex;align-items:center;width:{span / 24 * 100}%">
  <slot></slot>
</div>
