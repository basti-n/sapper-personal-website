<script>
  export let route;
  export let isCurrentRoute;
  export let shouldPrefetch;
</script>

<style lang="scss">
  li {
    list-style: none;
    margin-left: 2rem;

    .active {
      text-decoration: line-through;
    }
  }
</style>

<li>
  <a
    rel={shouldPrefetch && 'prefetch'}
    href={route === 'home' ? '.' : route}
    class:active={isCurrentRoute}>
    {route}
  </a>
</li>
