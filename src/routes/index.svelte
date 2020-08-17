<script>
  import HighlightText from "../components/texts/HighlightText.svelte";
  import SummaryBar from "../components/Summary-Bar.svelte";
  import HeroText from "../components/texts/HeroText.svelte";
  import Preload from "../components/Preload.svelte";

  const preloadImages = [
    "images/stack.jpg",
    "images/projects/StravaScript_1.png",
    "images/projects/StravaScript_2.png"
  ];

  const summaryBarContent = {
    What: {
      title: `Value Creation`,
      subtitle: `What To Build?`,
      text: `DECISION: Which user do we want to serve, 
        for which purpose, 
        with which USPs?`,
      img: {
        src: "images/value-creation.svg",
        alt: "value creation illustration"
      },
      isActive: true
    },
    How: {
      title: `Value Creation`,
      subtitle: `How To Build it?`,
      text: `EXECUTION: Building the actual product`,
      img: {
        src: "images/value-creation.svg",
        alt: "value creation illustration"
      },
      isActive: false
    },
    Why: {
      title: `Value Creation`,
      subtitle: `Why Build it?`,
      text: `ELABORATION: Finding the purpose that drives the What and How`,
      img: {
        src: "images/value-creation.svg",
        alt: "value creation illustration"
      },
      isActive: false
    }
  };

  const content = {
    name: "Sebastian Neumair",
    role: "Frontend Developer, Produktmanager",
    subline: "Interested in the",
    topics: ["What", "How", "Why"]
  };

  let activeKey = content.topics[1];
  let activeContent = getActiveContent();

  $: setActiveContent(activeKey);

  function setActiveContent(activeKey) {
    for (const [key, content] of Object.entries(summaryBarContent)) {
      content.isActive = key === activeKey;
    }
    activeContent = getActiveContent();
  }

  function getActiveContent() {
    for (const content of Object.values(summaryBarContent)) {
      if (content.isActive) {
        return content;
      }
    }
  }
</script>

<style lang="scss">
  @import "../style/global.scss";
  .container {
    .headline {
      .main-headline,
      .sub-headline {
        display: flex;
        grid-column: span 2;
        margin: 0 auto;
      }

      p {
        font-family: "Helvetica Neue" sans-serif;
        font-size: var(--text-font-size);
        margin-bottom: 0;
        margin-top: 0;
      }

      .main-headline {
        .name {
          margin-right: 0.75rem;
        }

        @media (max-width: 768px) {
          display: block;
          margin-bottom: 1rem;
        }
      }

      .sub-headline {
        margin-top: -0.3rem;
        .text-light {
          font-weight: 100;
          color: var(--text-gray);
        }
      }
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 768px) {
        display: block;
        margin: 0 auto;
      }
    }

    .topic-container {
      cursor: pointer;
    }
  }
</style>

<svelte:head>
  <title>Home Page</title>
</svelte:head>

<div class="container center-content">
  <div class="headline center-main-content">
    <div class="main-headline">
      <p class="name">{content.name}</p>
      <HighlightText text={content.role} />
    </div>
    <div class="sub-headline">
      <p class="text-light">{content.subline}...</p>
    </div>
  </div>

  <div class="content center-main-content">
    {#each content.topics as text}
      <div
        class="topic-container"
        on:click={() => {
          activeKey = text;
        }}>
        <HeroText {text} isActive={activeKey === text} />
      </div>
    {/each}
  </div>

  <SummaryBar content={activeContent} position="center" />
</div>

<Preload {preloadImages} />
