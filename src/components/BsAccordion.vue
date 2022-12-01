<template>
  <div class="accordion" :id="accordion_id">
    <div class="accordion-item" v-for="(item, index) in accordion_items" :key="`${accordion_id}-${index}`">
      <h2 class="accordion-header" id="`${accordion_id}-${index}`">
        <button :class="`accordion-button fw-bold fs-5 m-0 ${index > 0 && 'collapsed'}`" type="button"
          data-bs-toggle="collapse" :data-bs-target="`#${accordion_id}-collapse${index}`" aria-expanded="true"
          :aria-controls="`${accordion_id}-collapse${index}`">
          {{ item.title }}
        </button>
      </h2>
      <div :id="`${accordion_id}-collapse${index}`" :class="`accordion-collapse collapse ${show_first && index == 0 && 'show'
      }`" :aria-labelledby="`${accordion_id}-${index}`" :data-bs-parent="`#${accordion_id}`">
        <div class="accordion-body">
          <slot :name="`content-${index}`"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
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