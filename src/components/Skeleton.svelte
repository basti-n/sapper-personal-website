<script>
  export let height;
  export let width;
  export let shape;
</script>

<style lang="scss">
  $skeleton-bg: #ccc;
  $skeleton-bg-light: lighten(#ccc, 7%);

  .skeleton {
    background: $skeleton-bg;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    justify-self: center;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(
        90deg,
        $skeleton-bg,
        $skeleton-bg-light,
        $skeleton-bg
      );
      animation: loading 1s ease-in-out infinite;
    }

    &.circle {
      border-radius: 50%;
    }

    @keyframes loading {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(100%, 0, 0);
      }
    }
  }
</style>

<div
  class="skeleton"
  style="width: {width}px; height: {height}px"
  class:circle={shape === 'circle'} />
