<svelte:options tag="xq-textfield" />
<script lang="ts">
  export let label: string = '';
  export let placeholder: string = '请输入';
  export let type: string = '';
  export let value: string = '';
  export let on_input;
</script> 

<div class="xq-text-field">
  <div class="text-field__label">{label}</div>
  <input
    value={value}
    on:input={(e) => {
      on_input(e.target.value)
    }}
    placeholder={placeholder}
    type={type}
  />
</div>

<style>
  .xq-text-field {
    width: 100%;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 39px;
    border-radius:3px;
    border: 1px solid #CAD3DC;
    font-size: 12px;
    outline: none;
    padding-left: 12px;
    box-sizing: border-box;
  }

  input:active, input:focus {
    border-color: #115BE8;
  }

  input::placeholder {
    color: #A3A3A3;
  }

  .text-field__label {
    font-size: 12px;
    color: #000000;
    margin-bottom: 3px;
  }
</style>