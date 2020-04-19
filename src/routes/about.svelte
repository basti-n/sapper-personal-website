<script>
  import SummaryBar from "../components/Summary-Bar.svelte";

  const content = {
    title: "PM 2 Dev",
    text: `All About Building Great Products`,
    img: {
      src: "images/pm-to-dev.svg",
      alt: "product manager to developer illustration"
    }
  };
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>

<div class="container">
  <h1>About me</h1>
  <SummaryBar {content}/>
</div>
