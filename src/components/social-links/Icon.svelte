<script>
  export let icon;
  export let isActive;
</script>

<style lang="scss">
  .container {
    .icon,
    .icon-active {
      width: 20px;
      height: 20px;
    }

    .icon-active {
      display: none;
    }

    &.active {
      .icon {
        display: none;
      }
      .icon-active {
        display: block;
      }
    }
  }
</style>

<div class="container" class:active={isActive}>

  {#if isActive}
    <div
      class="icon-active"
      style={`background-image: url(images/${icon}-active.svg)`} />
  {:else}
    <div class="icon" style={`background-image: url(images/${icon}.svg)`} />
  {/if}

</div>
