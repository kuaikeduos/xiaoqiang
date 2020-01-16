<script lang="ts">
  export let type: 'error' | 'success' | 'info' = 'success';
  export let content: string = '';
</script>

<div class={`xq-message xq-message-${type}`}>
  <div class='xq-message__icon'>
    {#if type === 'error'}
      error
    {/if}
    {#if type === 'success'} 
      <i aria-label="icon: check-circle" class="anticon anticon-check-circle">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
      </i>
    {/if}
  </div>
  <div class='xq-message__content'>{content}</div>
</div>

<style>
.xq-message {
  position: fixed;
  top: 100px;
  padding: 10px 16px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
}

.xq-message .anticon {
  position: relative;
  top: 1px;
  margin-right: 8px;
  font-size: 16px;
}

.xq-message-success .anticon {
  color: #52c41a;
}
</style>