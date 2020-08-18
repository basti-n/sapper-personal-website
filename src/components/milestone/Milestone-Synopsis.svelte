<script>
  import MilestoneMarker from "./Milestone-Marker.svelte";
  import MilestoneDescription from "./Milestone-Description.svelte";

  export let description;
  export let timelineMarker = "";
</script>

<style lang="scss">
  @import "../style/global.scss";

  .synopsis {
    @include date-annotation;

    .content {
      display: flex;
      position: relative;

      .marker {
        height: 100%;
        margin-right: 10px;
        width: 3px;
        background: var(--gray);
        position: absolute;
      }
    }
  }
</style>

<section class="synopsis">
  <div class="content">
    <div class="marker" />
    <MilestoneDescription {description} />
  </div>
  {#if timelineMarker}
    <MilestoneMarker text={timelineMarker} />
  {/if}
</section>
