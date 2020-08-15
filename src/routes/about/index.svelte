<script context="module">
  export async function preload() {
    const response = await this.fetch("about.json");
    const cv = await response.json();

    return { cv };
  }
</script>

<script>
  import SummaryBar from "../../components/Summary-Bar.svelte";
  import MilestoneSynopsis from "../../components/milestone/Milestone-Synopsis.svelte";
  import MilestoneEvent from "../../components/milestone/Milestone-Event/Milestone-Event.svelte";

  export let cv;

  const content = {
    title: "PM 2 Dev",
    text: `All About Building Great Products`,
    img: {
      src: "images/pm-to-dev.svg",
      alt: "product manager to developer illustration"
    }
  };

  const description = `
  5 Jahre Erfahrung im digitalen Produkt- und IT-Projektmanagement.
  Auf der Suche nach spannenden Digitalprojekten und motivierten Teams um gemeinsam Produkte zu konzipieren, entwickeln und an den Markt zu bringen.
  `;
</script>

<style lang="scss">
  .page-container {
    .cv {
      margin: 25px auto;
    }
    .entry {
      scroll-snap-align: start;
    }
  }
</style>

<svelte:head>
  <title>About Me</title>
</svelte:head>

<div class="page-container">
  <div class="entry">
    <MilestoneSynopsis {description} timelineMarker="About Me" />
    <SummaryBar {content} />
  </div>

  <div class="cv">
    {#each cv as milestone}
      <div class="entry">
        <MilestoneEvent {...milestone} />
      </div>
    {/each}
  </div>
</div>
