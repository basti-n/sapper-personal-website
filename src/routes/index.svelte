<script>
  import SummaryBar from "../components/Summary-Bar.svelte";

  const content = {
    title: `Value Creation`,
    text: `Why Build it?
          Where is value Created?`,
    img: {
      src: "images/value-creation.svg",
      alt: "value creation illustration"
    }
  };
</script>

<style>

</style>

<svelte:head>
  <title>Home Page</title>
</svelte:head>

<div class="container">
  <h1>Great success!</h1>
  <SummaryBar {content} position="center" />
</div>
