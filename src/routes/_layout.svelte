<script>
  import Nav from "../components/navigation/Nav.svelte";
  import SocialLinks from "../components/social-links/SocialLinks.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../style/global.scss";

  :root {
    box-sizing: border-box
  }

  .layout {
    display: grid;
    grid-template-rows: auto 1fr;
    width: calc(100% - var(--summary-bar-width));
    height: 100vh;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  main {
    display: grid;
    align-items: center
  }

  footer {
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    width: calc(100% - var(--summary-bar-width));

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
