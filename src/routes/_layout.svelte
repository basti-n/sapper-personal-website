<script>
  import Nav from "../components/navigation/Nav.svelte";
  import SocialLinks from "../components/social-links/SocialLinks.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../style/global.scss";

  footer {
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    width: calc(100% - var(--summary-bar-width));

    @media (max-width: 480px) {
      width: 100%
    }
  }
</style>

<Nav currentRoute={segment} />

<main>
  <slot />
</main>

<footer>
  <SocialLinks />
</footer>
