<script>
  export let content;
  export let position = "right";

  const MOBILE_TRESHOLD_PX = 650;

  let isMobile = window.innerWidth < MOBILE_TRESHOLD_PX;

  function handleWindowResize({ target }) {
    isMobile = target.innerWidth < MOBILE_TRESHOLD_PX;
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=block");
  @import url("https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=block");

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
    }
  }
</style>

<svelte:window on:resize={handleWindowResize} />

{#if !isMobile}
  <article
    style="background-image: url('{content.img.src}'); background-size: cover"
    class:space={position === 'center'}
    class="container">
    <h3 class="title">{content.title}</h3>
    <p class="text">{content.text}</p>
  </article>
{/if}
