<script>
  import SummaryBar from "../components/Summary-Bar.svelte";
  import StackIcon from "../components/Stack-Icon.svelte";
  import HighlightText from "../components/texts/HighlightText.svelte";

  const primaryTechImages = [
    { name: "angular", size: "normal" },
    { name: "ngrx", size: "down" },
    { name: "rxjs", size: "down" },
    { name: "typescript", size: "down" }
  ];
  const secondaryTechImages = [
    { name: "css", size: "normal" },
    { name: "html", size: "normal" },
    { name: "bootstrap", size: "normal" },
    { name: "deno", size: "normal" },
    { name: "js", size: "normal" },
    { name: "mongo", size: "up" },
    { name: "node", size: "up" },
    { name: "react", size: "up" },
    { name: "postgresql", size: "normal" },
    { name: "svelte", size: "normal" },
    { name: "sapper", size: "normal" },
    { name: "vue", size: "normal" }
  ];

  const content = {
    title: "Stack",
    subtitle: `What I have worked with`,
    text: ``,
    img: {
      src: "images/stack.jpg",
      alt: "stack illustration"
    }
  };
</script>

<style lang="scss">
  .container {
    height: 90%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    .stack {
      margin-top: 30px;
    }

    .primary-tech {
      .stack {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }

    .secondary-tech {
      .stack {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        grid-row-gap: 25px;
      }
    }
  }
</style>

<svelte:head>
  <title>Stack</title>
</svelte:head>

<div class="container page-container">
  <div class="primary-tech">
    <HighlightText text="Technolgien mit denen ich täglich arbeite" />
    <div class="stack">
      {#each primaryTechImages as img}
        <StackIcon
          shape="rectangle"
          size="large"
          sizeAdjust={img.size}
          imageUrl={`images/technologies/${img.name}.svg`} />
      {/each}
    </div>
  </div>
  <div class="secondary-tech">
    <HighlightText text="Technolgien mit denen ich bereits gearbeitet habe" />
    <div class="stack">
      {#each secondaryTechImages as img}
        <StackIcon
          shape="circle"
          size="small"
          sizeAdjust={img.size}
          imageUrl={`images/technologies/${img.name}.svg`} />
      {/each}
    </div>
  </div>
  <SummaryBar {content} />
</div>
