<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in content" :key="`slide-${index}`">
        <div class="card border-0 mb-3">
          <div class="row no-gutters">
            <div class="
                    col-md-4
                    order-md-2
                    d-flex
                    justify-content-center
                    align-items-center
                  ">
              <figure class="swiper__figure">
                <img class="swiper__img rounded" width="320" :src="item.img_src" :alt="`Profile photo of ${item.name}`" />
              </figure>
            </div>
            <div class="col-md-8 order-md-1 d-flex align-items-center">
              <div class="card-body py-0 py-md-3">
                <blockquote class="blockquote">
                  <p class="mb-0">“{{ item.quote }}”</p>
                  <footer class="h5 mt-2">&mdash; {{ item.name }}</footer>
                  <p class="card-text">
                    <small class="text-muted d-block" v-for="(desc_item, desc_index) in item.desc"
                      :key="`slide-${index}-desc-${desc_index}`">{{ desc_item }}</small>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import Swiper from "swiper/swiper-bundle.esm.browser";
import Swiper from "node_modules/swiper/swiper-bundle.esm.browser";

export default {
  props: {
    content: {
      type: Array,
      default() {
        return [
          {
            name: "(default) Sarah Marie Alicia Anthony",
            desc: [
              "American Degree Transfer Program, MCKL",
              "Theology & Criminology, Loyola University Chicago, USA",
            ],
            quote:
              "ADTP@MCKL has given me a realistic expectation of how education in the United States is. We were taught and graded with an equivalent standard, preparing us for the quality and critical thinking level abroad. MCKL also prepared us in terms of both U.S. academics and lifestyle.",
            img_src: "https://via.placeholder.com/512x512?text=placeholder",
          },
          {
            name: "(default) Ethan Wong",
            desc: [
              "American Degree Transfer Program, MCKL",
              "Computer Science, Messiah College, USA on Provost Scholarship",
            ],
            quote:
              "ADTP@MCKL not only emphasises on your academics but the ability to express yourself. I was able to study at Oxford University through my study abroad programme at Messiah College. Overall, it was a humbling experience being able to learn at top universities around the world.",
            img_src: "https://via.placeholder.com/512x512?text=placeholder",
          },
        ];
      },
    },
  },
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      autoplay: {
        delay: 6000,
        pauseOnMouseEnter: true
      },
    });
  },
};
</script>

<style lang="scss">
@import "node_modules/swiper/swiper.scss";
@import "node_modules/swiper/swiper-vars.scss";
@import "node_modules/swiper/modules/pagination/pagination.scss";
@import "node_modules/swiper/modules/navigation/navigation.scss";

.swiper-pagination-bullet-active {
  background: $secondary;
}

.swiper__figure {
  max-width: 300px;
  margin-inline: auto;
  margin-bottom: 0;
}

.swiper__img {
  aspect-ratio: 1 /1;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>