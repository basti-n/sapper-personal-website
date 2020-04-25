<script>
  import SocialLink from "./SocialLink.svelte";
</script>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        grid-gap: 2rem;
    }
</style>

<div class="container">
  <SocialLink
    name="basti-n"
    icon="github"
    link="https://github.com/basti-n" />
      <SocialLink
    name="basti-n"
    icon="codepen"
    link="https://codepen.io/basti-n" />
      <SocialLink
    name="basti-n"
    icon="linkedin"
    link="https://www.linkedin.com/in/sebastian-neumair/" />
</div>
