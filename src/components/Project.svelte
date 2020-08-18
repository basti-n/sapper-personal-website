<script>
  import { onMount } from "svelte";
  import MilestoneSynopsis from "./milestone/Milestone-Synopsis.svelte";
  import MilestoneMarker from "./milestone/Milestone-Marker.svelte";
  import { HEADER_HEIGHT, FOOTER_HEIGHT } from "../constants";

  export let description;
  export let text;
  export let images;

  let height = "auto";

  onMount(async () => setContainerHeight());

  function setContainerHeight() {
    const availableHeight = window.innerHeight - HEADER_HEIGHT - FOOTER_HEIGHT;
    height = availableHeight + "px";
  }
</script>

<style lang="scss">
  @import "../style/global.scss";

  .project {
    scroll-snap-align: start;
    margin-bottom: 15vh;

    .content {
      @include date-annotation;
      margin-top: 30px;

      .illustrations {
        padding: 0 8%;

        img {
          display: flex;
          margin: 0 auto;
          height: auto;
          max-width: 300px;

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          &.two-screens {
            width: 60%;
          }

          &.three-screens {
            width: 100%;
          }
        }
      }
    }
  }
</style>

<div class="project" style="height: {height}">
  <MilestoneSynopsis {description} />
  <div class="content">
    <div class="illustrations">
      {#each images as image}
        <img src={image.src} alt={text + ' app'} class={image.class} />
      {/each}
    </div>
    <MilestoneMarker {text} />
  </div>
</div>
