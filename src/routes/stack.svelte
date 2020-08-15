<script>
  import SummaryBar from "../components/Summary-Bar.svelte";

  const content = {
    title: "Stack",
    text: `What I have worked with`,
    img: {
      src: "images/stack.jpg",
      alt: "stack illustration"
    }
  };
</script>

<svelte:head>
  <title>Stack</title>
</svelte:head>

<div class="container">
  <h1>Stack</h1>
  <SummaryBar {content} />
</div>
