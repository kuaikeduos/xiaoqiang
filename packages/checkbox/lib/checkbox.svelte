<svelte:options tag="xq-checkbox" />
<script lang="ts">
  export let checked: boolean = false;
  export let label: string = '';
  function handleChange() {
    checked = !checked

    // @ts-ignore
    __$$self.dispatchEvent(new CustomEvent('xq:change', {
      detail: checked
    }))
  }
</script>

<div class='xq-checkbox-wrapper'>
  <span
    on:click={handleChange}
    class={`xq-checkbox ${checked ? 'xq-checkbox-checked' : ''}`}
  >
    <input
      type=checkbox
      class="xq-checkbox-input"
    />
    <span class="xq-checkbox-inner"></span>
  </span>
  <slot name='label'>{label}</slot> 
</div>

<style>
.xq-checkbox-wrapper {
  display: inline-block;
}

.xq-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    position: relative;
    top: -.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
}
.xq-checkbox-input {
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
}
.xq-checkbox-inner {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  border-collapse: initial;
  transition: all .3s;
}
.xq-checkbox-checked .xq-checkbox-inner {
  background-color: #115BE8;
  border-color: #115BE8;
}

.xq-checkbox-checked .xq-checkbox-inner:after {
  position: absolute;
  display: table;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1) translate(-50%,-50%);
  opacity: 1;
  transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
  content: " ";
}

.xq-checkbox-inner:after {
  position: absolute;
  top: 50%;
  left: 22%;
  display: table;
  width: 4.714286px;
  height: 9.14285714px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0) translate(-50%,-50%);
  opacity: 0;
  transition: all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;
  content: " ";
}
</style>