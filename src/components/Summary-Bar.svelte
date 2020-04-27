<script>
  export let content;
  export let position = "right";

  export let fadeIn = false;

  $: {
    fadeIn = !!content;
    setTimeout(() => (fadeIn = false), 2000);
  }
</script>

<style lang="scss">
  @import "../style/global.scss";

  * {
    font-display: block;
  }

  .container {
    position: absolute;
    top: 0;
    right: 0;
    width: var(--summary-bar-width);
    height: 100%;
    z-index: -1;

    background-position-x: center;
    text-align: center;

    @media screen and (max-width: 650px) {
      display: none;
    }

    &.space {
      right: 6rem;
    }

    .title {
      font-family: "Bungee Inline", cursive;
      font-size: 1.5rem;
      margin: 1rem 0 2.5rem;
      padding: 0 0.25rem;
    }

    .text {
      font-family: "Bungee Hairline", cursive;
      font-size: 1.2rem;
      text-transform: capitalize;
      padding: 0 1rem;

      &.fade-in {
        animation: fadeIn 2000ms;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }
</style>

<article
  style="background-image: url('{content.img.src}')"
  class:space={position === 'center'}
  class="container">
  <h3 class="title">{content.title}</h3>
  <p class="text" class:fade-in={fadeIn}>{content.text}</p>
</article>
