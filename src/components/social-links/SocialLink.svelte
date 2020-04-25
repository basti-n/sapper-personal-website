<script>
  export let icon;
  export let name;
  export let link;

  import Icon from "./Icon.svelte";

  let isActive = false;
</script>

<style lang="scss">
  @import "../style/global.scss";
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=block");
  .icon-container {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-size: 0.8rem;
    color: gray;
  }

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      margin-left: 0.35rem;
    }

    &:hover, &.active {
      span {
        color: var(--black)
      }
    }
  }
</style>

<div class="icon-container" on:mouseenter={() => isActive = true} on:mouseleave={() => isActive = false}>
  <a class="link" class:active={isActive} href={link} target="_blank" rel="noopener">
    <Icon {icon} {isActive} />
    <span>{name}</span>
  </a>
</div>
