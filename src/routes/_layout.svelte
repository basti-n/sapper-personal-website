<script>
  import Nav from "../components/navigation/Nav.svelte";
  import SocialLinks from "../components/social-links/SocialLinks.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../style/global.scss";

  :root {
    box-sizing: border-box;
  }

  .layout {
    display: grid;
    grid-template-rows: auto 1fr 60px;
    width: calc(100% - var(--summary-bar-width));
    height: 100vh;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  main {
    display: grid;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;

    scroll-snap-type: y mandatory;
    scroll-padding: 20px 0;
  }

  footer {
    display: flex;
    justify-content: center;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
</style>

<div class="layout">
  <Nav currentRoute={segment} />

  <main>
    <slot />
  </main>

  <footer>
    <SocialLinks />
  </footer>
</div>
