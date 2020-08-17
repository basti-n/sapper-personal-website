<script>
  export let imageUrl;
  export let size;
  export let sizeAdjust;
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

<div
  class="icon"
  class:large={size === 'large'}
  class:small={size === 'small'}
  class:size-up={sizeAdjust === 'up'}
  class:size-down={sizeAdjust === 'down'}
  style="background-image: url({imageUrl})" />
