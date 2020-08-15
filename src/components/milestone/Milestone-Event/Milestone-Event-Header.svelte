<script>
  export let title;
  export let subtitle;
</script>

<style lang="scss">
  @import "../../../style/global.scss";

  $line-width: 2px;
  $line-color: var(--gray);

  .header {
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 60px 0 30px 0;

    @include mobile-only {
      margin: 50px 0 25px 0;
    }
  }

  *:before,
  *:after {
    content: "";
    position: absolute;
  }

  .title {
    position: relative;
    margin-left: 10px;
    margin-bottom: 0;
    font-size: var(--text-font-size);

    .subtitle {
      font-weight: bold;
    }
  }

  .line-1,
  .line-2 {
    position: relative;
    display: inline-block;
  }

  .line-1 {
    width: 50px;
    &:before {
      left: 0;
      width: 40px;
      height: $line-width;
      background: $line-color;
    }

    &:after {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $line-color;
      right: 3px;
      top: -5px;
    }

    .horizontal-line {
      &:before {
        width: $line-width;
        height: 15px;
        background: $line-color;
        right: 7px;
      }
    }
  }

  .line-2 {
    width: 100%;
    position: absolute;
    left: -18px;
    bottom: -8px;
    &:before {
      width: 120%;
      height: $line-width;
      background: $line-color;
      bottom: 2px;
    }
  }
</style>

<div class="header">
  <div class="line line-1">
    <div class="horizontal-line" />
  </div>
  <h5 class="title">
    {title}
    <span class="subtitle">| {subtitle}</span>
    <div class="line line-2" />
  </h5>
</div>
