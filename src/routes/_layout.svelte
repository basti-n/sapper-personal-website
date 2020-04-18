<script>
  import Nav from "../components/navigation/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import '../style/global.scss';
</style>

<Nav currentRoute={segment} />

<main>
  <slot />
</main>
