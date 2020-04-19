<script>
  import Overlay from "./Overlay.svelte";
  import NavItem from "./Nav-Item.svelte";
  import Burger from "./Burger.svelte";

  export let currentRoute;
  let showOverlay;

  function setShowOverlay({detail: shouldShow}) {
    showOverlay = shouldShow;
    console.log(showOverlay)
  }
</script>

<style lang="scss">
  nav {
    display: flex;
    align-items: center;
    .nav-container {
      display: flex;
      padding-left: 0
    }
  }
</style>

<nav>
  <Burger on:statusChange={setShowOverlay} isChecked={showOverlay}/>
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
      isCurrentRoute={currentRoute === 'blog'}
      route="blog"
      shouldPrefetch={true} />
    <NavItem
      isCurrentRoute={currentRoute === 'projects'}
      route="projects"
      shouldPrefetch={true} />
  </ul>
</nav>

{#if showOverlay}
  <Overlay on:close={setShowOverlay} />
{/if}
