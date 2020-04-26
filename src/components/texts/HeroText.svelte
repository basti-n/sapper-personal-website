<script>
  export let text;
  export let isActive = false;
</script>

<style lang="scss">
  p {
    font-family: "Bungee Hairline", cursive;
    font-size: 2.75rem;

    &.active {
      font-family: "Bungee Inline", cursive;
    }
  }
</style>

<p class:active={isActive}>{text}</p>
