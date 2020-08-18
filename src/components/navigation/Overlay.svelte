<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  import OverlayTextLink from "./Overlay-Text-Link.svelte";

  export let navLinks;

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
    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;

    display: flex;
    justify-content: space-evenly;
    flex-flow: column;
    align-items: center;
  }
</style>

<section
  in:fade
  out:fade
  class="container"
  on:click|preventDefault={closeOverlay}>
  {#each navLinks as link}
    <OverlayTextLink
      text={link.text}
      active={false}
      url={link.url}
      closeFn={closeOverlay} />
  {/each}
</section>
