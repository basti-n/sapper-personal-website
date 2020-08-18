<script>
  import Overlay from "./Overlay.svelte";
  import NavItem from "./Nav-Item.svelte";
  import Burger from "./Burger.svelte";

  export let currentRoute;
  const navLinks = [
    { text: "home", url: "." },
    { text: "about", url: "about" },
    { text: "projects", url: "projects" },
    { text: "stack", url: "stack" },
    { text: "github", url: "https://github.com/basti-n" },
    { text: "codepen", url: "https://codepen.io/basti-n" },
    { text: "linkedin", url: "https://www.linkedin.com/in/sebastian-neumair/" },
    { text: "email", url: "mailto:sebastian.neumair@gmail.com" }
  ];
  let showOverlay;

  function setShowOverlay({ detail: shouldShow }) {
    showOverlay = shouldShow;
  }
</script>

<style lang="scss">
  nav {
    display: flex;
    align-items: center;
    .nav-container {
      display: flex;
      padding-left: 0;
    }
  }
</style>

<nav>
  <Burger on:statusChange={setShowOverlay} isChecked={showOverlay} />
  <ul class="nav-container">
    <NavItem
      isCurrentRoute={currentRoute === undefined}
      route="home"
      shouldPrefetch={false} />
    <NavItem
      isCurrentRoute={currentRoute === 'about'}
      route="about"
      shouldPrefetch={true} />
    <NavItem
      isCurrentRoute={currentRoute === 'projects'}
      route="projects"
      shouldPrefetch={true} />
    <NavItem
      isCurrentRoute={currentRoute === 'stack'}
      route="stack"
      shouldPrefetch={true} />
  </ul>
</nav>

{#if showOverlay}
  <Overlay
    on:close={setShowOverlay}
    navLinks={navLinks.map(link => ({
      ...link,
      active: currentRoute === link.text
    }))} />
{/if}
