<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Skeleton from "./Skeleton.svelte";

  export let imageUrl;
  export let size;
  export let sizeAdjust;
  export let shape;
  export let imageLoaded = false;

  onMount(async () => {
    loadImage();
  });

  function loadImage() {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => (imageLoaded = true);
  }
</script>

<style lang="scss">
  .icon {
    background-size: contain;
    background-position: center;
    justify-self: center;

    &.large {
      height: 80px;
      width: 80px;
    }

    &.small {
      height: 40px;
      width: 40px;
      background-repeat: no-repeat;
    }

    &.size-up {
      transform: scale(1.5);
    }

    &.size-down {
      transform: scale(0.75);
    }
  }
</style>

{#if imageLoaded}
  <div
    in:fade|local
    class="icon"
    class:large={size === 'large'}
    class:small={size === 'small'}
    class:size-up={sizeAdjust === 'up'}
    class:size-down={sizeAdjust === 'down'}
    style="background-image: url({imageUrl})" />
{:else}
  <Skeleton
    height={size === 'large' ? 80 : 40}
    width={size === 'large' ? 80 : 40}
    {shape} />
{/if}
