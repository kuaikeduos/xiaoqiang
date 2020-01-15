<script lang="ts">
  export let theme: 'default' | 'primary' | 'default-bordered' = 'default'
</script>

<button on:click class={`xq-button xq-button--${theme}`}>
  <slot></slot>
</button>

<style>
  .xq-button {
    font-size: 14px;
    width: 100%;
    border-radius: 3px;
    height: 39px;
    border: none;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
  }

  .xq-button--default {
    background: #EBECED;
    color: #A3A3A3;
    border: 1px solid #EBECED;
  }

  .xq-button--primary {
    background: #115BE8;
    color: #ffffff;
    border: 1px solid #115BE8;
  }

  .xq-button--default-bordered {
    border: 1px solid #CAD3DC;
    background: #ffffff;
    color: #115BE8;
  }
</style>