<script>
  import NavItem from "./Nav-Item.svelte";

  export let currentRoute;
</script>

<style>
  .nav-container {
    display: flex;
  }
</style>

<nav>
  <ul class="nav-container">
    <NavItem
      isCurrentRoute={currentRoute === undefined}
      route="home"
      shouldPrefetch={false} />
    <NavItem
      isCurrentRoute={currentRoute === 'about'}
      route="about"
      shouldPrefetch={false} />
    <NavItem
      isCurrentRoute={currentRoute === 'blog'}
      route="blog"
      shouldPrefetch={false} />
    <NavItem
      isCurrentRoute={currentRoute === 'projects'}
      route="projects"
      shouldPrefetch={true} />
  </ul>
</nav>
