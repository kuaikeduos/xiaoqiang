<svelte:options tag="xq-video" />
<script lang="ts">

  import { onMount, onDestroy } from 'svelte';

  export let src = '';
  export let poster;
  export let height = 200;

  let video;

  function fullScreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
      video.msRequestFullscreen();
    }
  }

  onMount(() => {
    video.addEventListener('play', fullScreen)
  })

  onDestroy(() => {
    document.removeEventListener('play', fullScreen)
  })

</script>

<main>
  <video
    bind:this={video}
    src={src}
    preload
    poster={poster}
    controls 
    loop=""
    style={`object-fit:cover;height:${height}px`}
  >
  你的浏览器不支持HTML5视频。
  </video>
  <!-- <script src="https://unpkg.com/video.js@7.6.6/dist/video.min.js"></script> -->
</main>

<style>
video {
  width: 100%;
}
</style>

