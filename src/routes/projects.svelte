<script>
  import SummaryBar from "../components/Summary-Bar.svelte";

  const content = {
    title: "Portfolio",
    subtitle: `Some of my work`,
    text: `Or How I do the the How`,
    img: {
      src: "images/portfolio.svg",
      alt: "portfolio illustration"
    }
  };
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div class="container">
  <h1>Projects</h1>
  <SummaryBar {content} />
</div>
