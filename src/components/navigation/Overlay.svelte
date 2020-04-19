<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function closeOverlay() {
    dispatch("close", false);
  }
</script>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

<section class="container" on:click|preventDefault={closeOverlay} />
