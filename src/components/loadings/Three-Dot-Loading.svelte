<style lang="scss">
  @import "../../style/global.scss";

  $size: 10px;
  $duration: 1s;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
      position: relative;
      width: $size;
      height: $size;
      border-radius: 5px;
      background-color: var(--black);
      color: var(--black);
      animation: dotFlashing 1s infinite linear alternate;
      animation-delay: calc(#{$duration} / 2);

      &:before,
      &:after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        height: $size;
        width: $size;
        border-radius: 5px;
        background-color: inherit;
        color: inherit;
        animation: dotFlashing 1s infinite alternate;
      }

      &:before {
        left: -15px;
        animation-delay: 0s;
      }
      &:after {
        animation-delay: $duration;
        left: 15px;
      }
    }
  }

  @keyframes dotFlashing {
    0% {
      background-color: var(--black);
    }
    50%,
    100% {
      background-color: var(--light-gray);
    }
  }
</style>

<div class="container">
  <div class="loader" />
</div>
