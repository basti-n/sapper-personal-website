<script>
  import { createEventDispatcher } from "svelte";

  export let isChecked = false;

  const dispatch = createEventDispatcher();

  $: emit = dispatch("statusChange", isChecked);
</script>

<style lang="scss">
  @import "../../style/global.scss";

  :root {
    --burger-height: 12px;
    --burger-width: 25px;
    --line-height: 2px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;

    input {
      display: none;

      &:checked + .burger > .line:nth-child(1) {
        transform: translateY(calc(var(--burger-height) / 2)) rotate(-45deg);
      }
      &:checked + .burger > .line:nth-child(2) {
        opacity: 0;
      }
      &:checked + .burger > .line:nth-child(3) {
        transform: translateY(calc(calc(var(--burger-height) / 2) * -1))
          rotate(45deg);
      }
    }

    .burger {
      display: block;
      position: relative;
      width: var(--burger-width);
      height: var(--burger-height);

      .line {
        display: block;
        position: absolute;
        left: 10px;
        height: var(--line-height);
        width: var(--burger-width);
        border-radius: 2px;
        background: var(--black);
        transition: 0.5s;
        transform-origin: center;
      }

      .line:nth-child(1) {
        top: 0;
      }
      .line:nth-child(2) {
        top: calc(var(--burger-height) / 2);
      }
      .line:nth-child(3) {
        top: var(--burger-height);
      }
    }
  }
</style>

<div class="container">
  <input type="checkbox" name="burger" id="burger" bind:checked={isChecked} />
  <label for="burger" class="burger">
    <span class="line" />
    <span class="line" />
    <span class="line" />
  </label>
</div>
