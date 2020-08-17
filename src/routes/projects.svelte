<script>
  import SummaryBar from "../components/Summary-Bar.svelte";
  import Project from "../components/Project.svelte";

  export const projects = [
    {
      name: "StravaScript",
      images: [
        { src: "images/projects/StravaScript_1.png", class: "three-screens" },
        { src: "images/projects/StravaScript_2.png", class: "two-screens" }
      ],
      description:
        "Track your time spend coding. Built with React. Expess powered Backend with MongoDB."
    },
    {
      name: "ToDo App",
      images: [
        { src: "images/projects/ToDo_1.png", class: "three-screens" },
        { src: "images/projects/ToDo_2.png", class: "three-screens" }
      ],
      description:
        "ToDo Tracker build with vanilla js, free of external frameworks or libraries"
    },
    {
      name: "Cards App",
      images: [
        { src: "images/projects/Card_1.png", class: "three-screens" },
        { src: "images/projects/Card_2.png", class: "three-screens" }
      ],
      description: "Your personal reminder powered by React."
    },
    {
      name: "No-JS Website",
      images: [
        { src: "images/projects/Bootstrap_1.png", class: "three-screens" },
        { src: "images/projects/Bootstrap_2.png", class: "three-screens" }
      ],
      description:
        "No JS, no Problem. HTML and CSS-only responsive personal website."
    }
  ];

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

<div class="container page-container">
  {#each projects as project}
    <Project
      description={project.description}
      text={project.name}
      images={project.images} />
  {/each}
  <SummaryBar {content} />
</div>
