<script>
  export let tipContent = "";
  export let linkUrl;

  const cubeCls = 'suspend-wiki__cube';
  const tipCls = 'suspend-wiki__tip';
  const tipArrowCls = 'suspend-wiki__tip--arrow';
  const tipContentCls = 'suspend-wiki__tip--content';

  let tipVisible = false;
  let fillColor = '#4268F4';

  function handleHover() {
    tipVisible = true;
    fillColor = '#ffffff';
  }

  function handleMouseLeave() {
    tipVisible = false;
    fillColor = '#4268F4';
  }

  function handleJump() {
    if (linkUrl) {
      window.open(linkUrl, '')
    }
  }


</script>

<main on:click={handleJump}>
  {#if tipVisible}
    <div class={tipCls}>
      <div class={tipContentCls}>
        <slot name="tip-content">
          <span>{tipContent}</span>
        </slot>
      </div>
      <div class={tipArrowCls}></div>
    </div>
  {/if}
  <div class={cubeCls} on:mouseenter={handleHover} on:mouseleave={handleMouseLeave}>
    <slot name="icon" fillColor={fillColor}></slot>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* width: 268px;  */
    /* background: #f0f1f5; */
  }

  * {
    box-sizing: border-box;
  }

  .suspend-wiki__cube {
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 4px;
    box-shadow:0px 2px 7px 0px rgba(0, 0, 0, 0.15);
    color: #4268F4;
    cursor: pointer;
    margin-bottom: 3px;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .suspend-wiki__cube:hover {
    color: white;
    background: #477EF7;
  }

  .suspend-wiki__tip {
    font-size:14px;
    font-family: 'Heiti SC';
    font-weight:500;
    color:rgba(50,50,50,1);
    width: 211px;
    background: white;
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 0;
    margin-top: -16px;
  }

  .suspend-wiki__tip--content {
    border-radius: 4px;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.15);
    padding: 16px 0;
    position: absolute;
    width: 205px;
    background: inherit;
    z-index: 1;
    text-align: left;
    margin-top: -16px;
  }

  .suspend-wiki__tip--content > span { 
    padding-left: 18px;
  }


  .suspend-wiki__tip--arrow {
    width: 0;
    height: 0;
    border-width: 6px 6px 6px 6px;
    border-style: solid;
    border-color: white transparent transparent white;
    box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.08);
    position: absolute;
    right: 0;
    z-index: 5;
    background: white;
    transform: rotate(135deg);
  }
</style>
