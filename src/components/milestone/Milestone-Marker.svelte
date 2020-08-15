<script>
  export let text;
</script>

<style lang="scss">
  @import "../../style/global.scss";

  aside {
    display: flex;
    align-items: center;
    height: fit-content;
    align-self: center;
    position: relative;
    margin-left: 30px;

    @include mobile-only {
      margin-right: auto;
      margin-bottom: 25px;

      .marker {
        display: none;
      }
      .text {
        font-size: var(--text-font-size-lg);
      }
    }

    .marker {
      height: 100%;
      width: 2px;
      background: var(--dark-black);
      position: absolute;
      left: -10px;
    }

    .text {
      font-weight: bold;
      color: var(--var-black);
      margin: 0;
    }
  }
</style>

<aside>
  <span class="marker" />
  <p class="text">{text}</p>
</aside>
