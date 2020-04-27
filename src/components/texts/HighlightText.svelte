<script>
  export let text;
</script>

<style lang="scss">
  @import "../style/global.scss";

  * {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    color: var(--dark-black);
  }

  p {
    margin-bottom: 0;
    margin-top: 0;
  }

  .text {
    display: flex;
    align-items: center;
    font-size: var(--text-font-size);

    .dash {
      display: inline-block;
      width: 2px;
      height: calc(var(--text-font-size) * 2 / 3);
      background: var(--dark-black);
      margin-right: 1px;
    }
  }
</style>

<div class="text">
  <p>
    <span class="dash" />
    {text}
  </p>
</div>
