<script>
  import { goto } from "@sapper/app";
  import ThreeDotLoading from "../loadings/Three-Dot-Loading.svelte";

  export let text;
  export let url;
  export let active;
  export let closeFn;

  let isLoading = false;

  function navigate() {
    isLoading = true;
    goto(url).then(route => {
      setTimeout(() => {
        closeFn();
        isLoading = false;
      }, 1000);
    });
  }
</script>

<style lang="scss">
  @import "../../style/global.scss";

  a {
    text-decoration: none;
    color: var(--light-gray);
    background: var(--dark-black);
  }
  .text-wrapper {
    font-family: "Bungee Hairline", cursive;
    font-size: 2rem;
  }

  .active {
    text-decoration: line-through;
  }
</style>

<div class="text-wrapper">
  {#if isLoading}
    <ThreeDotLoading />
  {:else}
    <a
      rel="prefetch"
      class="text-link"
      on:click|stopPropagation|preventDefault={navigate}
      href={url}
      class:active>
      {text}
    </a>
  {/if}

</div>
