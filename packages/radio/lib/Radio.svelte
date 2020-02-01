<svelte:options tag="xq-radio" />
<script lang="ts">
  export let value: string = '';
  export let label: string = '';
  export let checked: boolean;
  export let on_change: () => void;
</script>

<div 
  on:click={on_change}
  value={value}
  class={`xq-radio ${checked ? 'xq-radio-checked' : ''}`}
>
  <span class="xq-radio-indicator"></span>
  <slot name='label'>
    <span>{label}</span>
  </slot>
</div>

<style>
.xq-radio {
  display: inline-block;
  margin-right: 40px;
  height: 32px;
  line-height: 32px;
  user-select: none;
  cursor: pointer;
  font-size: 14px;
}

.xq-radio-checked .xq-radio-indicator {
  border-color: #115BE8;
}

.xq-radio-indicator {
    width: 13px;
    height: 13px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    border: 1px solid #e0dfe7;
    margin-right: 9px;
}

.xq-radio span {
    display: inline-block;
    vertical-align: middle;
}

.xq-radio-checked .xq-radio-indicator:before {
    display: block;
    content: ' ';
    width: 7px;
    height: 7px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    background-color: #115BE8;
    margin: 3px;
}
</style>