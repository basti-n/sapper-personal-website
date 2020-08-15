<script>
  import MilestoneEventHeader from "./Milestone-Event-Header.svelte";
  import MilestoneDescription from "../Milestone-Description.svelte";
  import MilestoneMarker from "../Milestone-Marker.svelte";

  export let title;
  export let subtitle;
  export let description;
  export let timelineMarker;
</script>

<style lang="scss">
  @import "../../../style/global.scss";

  .description {
    @include date-annotation;
  }
</style>

<div>
  <MilestoneEventHeader {title} {subtitle} />

  <div class="description">
    <div class="content">
      {#each description as text}
        <MilestoneDescription description={text} />
      {/each}
    </div>
    <MilestoneMarker text={timelineMarker} />
  </div>
</div>
