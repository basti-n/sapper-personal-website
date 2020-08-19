<script>
  import Nav from '../components/navigation/Nav.svelte';
  import SocialLinks from '../components/social-links/SocialLinks.svelte';

  export let segment;
</script>

<style lang="scss" global>
  @import '../style/global.scss';

  :root {
    box-sizing: border-box;
  }

  .layout {
    display: grid;
    grid-template-rows: auto 1fr 60px;
    width: calc(100% - var(--summary-bar-width));
    height: 100vh;

    @include mobile-only {
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

    @include mobile-only {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      background: inherit;
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
