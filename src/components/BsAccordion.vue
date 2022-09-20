<script setup>
const props = defineProps({
  show_first: {
    type: Boolean,
    default: true,
  },
  accordion_id: {
    type: String,
    default: "bs_accordion_1",
  },
  accordion_items: {
    type: Array,
    default(rawProps) {
      return [
        {
          title: "Accordion Item #1",
          content: `
        <strong>This is the first item's accordion body.</strong> hello_world_accordion`,
        },
        {
          title: "Accordion Item #2",
          content: `
        <strong>This is the first item's accordion body.</strong> hello_world_accordion`,
        },
        {
          title: "Accordion Item #3",
          content: `
        <strong>This is the first item's accordion body.</strong> hello_world_accordion`,
        },
      ]
    }
  },
});
const show_first = props.show_first;
const accordion_id = props.accordion_id;

</script>

<template>
  <div class="accordion" :id="accordion_id">
    <div class="accordion-item" v-for="(item, index) in accordion_items" :key="`${accordion_id}-${index}`">
      <h2 class="accordion-header" id="`${accordion_id}-${index}`">
        <button :class="`accordion-button ${index > 0 && 'collapsed'}`" type="button" data-bs-toggle="collapse"
          :data-bs-target="`#${accordion_id}-collapse${index}`" aria-expanded="true"
          :aria-controls="`${accordion_id}-collapse${index}`">
          {{item.title}}
        </button>
      </h2>
      <div :id="`${accordion_id}-collapse${index}`" :class="`accordion-collapse collapse ${
        show_first && index == 0 && 'show'
      }`" :aria-labelledby="`${accordion_id}-${index}`" :data-bs-parent="`#${accordion_id}`">
        <div class="accordion-body">
          <slot :name="`content-${index}`"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// anchor_scroll back to top of accordion
</script>

<style lang="scss" scoped>
.accordion-button {
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0;
}
/* 
.accordion>.card>.card-header {
  background-color: $primary;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    background-color: darken($primary, 7.5%);
  }

  .btn {
    color: #fff;
    font-weight: bold;
    font-size: 1.25rem;
    margin: 0;
    text-decoration: none;

    @include media-breakpoint-down(sm) {
      padding: 0;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    // the arrow
    $accordion_btn_arrow: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'  fill='#fff' class='bi bi-caret-up' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");

    &:after {
      display: inline-block;
      content: "";
      background-image: escape-svg($accordion_btn_arrow);
      background-position: center;
      background-repeat: no-repeat;
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      transform: rotate(0deg);
    }

    &.collapsed:after {
      transform: rotate(180deg);
    }
  }
} */
</style>