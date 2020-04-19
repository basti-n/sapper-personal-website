<script>
  import SummaryBar from "../components/Summary-Bar.svelte";

  const content = {
    title: "Blog",
    text: `Topics I'm interested in.
            My views, Informed by other peoples views`,
    img: {
      src: "images/blog.svg",
      alt: "blog illustration"
    }
  };
</script>


<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h1>Blog</h1>
  <SummaryBar {content}/>
</div>

