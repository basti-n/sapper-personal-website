<script>
  export let preloadImages;
</script>

<style lang="scss">
  @import "../style/global.scss";

  #preload {
    @include mobile-only {
      display: none;
    }
    transform: translate(--100vw);
    position: absolute;
  }
</style>

<div id="preload">
  {#each preloadImages as imageUrl}
    <div class="preloaded-image" style="background-image: url({imageUrl})" />
  {/each}
</div>
