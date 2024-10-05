<template>
  <section class="content__section">
    <div class="content__marker" id="materials"></div>

    <div class="materials">
      <h2 class="materials__h2">materials and features</h2>

      <article class="materials__box-eco content__dont-display-on-mobile">
        <h3 class="materials__h3 content__dont-display-on-mobile">
          Environmentally friendly
        </h3>

        <p class="materials__eco-text content__dont-display-on-mobile">
          All materials used in our pots are made from 100% recycled materials
          and are 100% recyclable at the end of life (should you ever choose to
          get rid of your POTR!). All materials have been sourced from within
          Europe to reduce our carbon footprint when transporting the raw
          materials, and all manufacturing is carried out in the UK.
        </p>
      </article>

      <div class="materials__slider swiper-container">
        <div class="swiper-wrapper">
          <div
            class="materials__circle materials__circle--1 content__dont-display-on-mobile"
            @click="toggle(1)"
            :class="{ clicked: isToggled[0] }"
          ></div>

          <div
            class="swiper-slide swiper-slide--1"
            :class="{ clicked: isToggled[0] }"
          >
            <article class="materials__p">
              POTR Pots are constructed using recycled polypropylene which can
              be fully recycled.
            </article>
          </div>

          <div
            class="materials__circle materials__circle--2 content__dont-display-on-mobile"
            @click="toggle(2)"
            :class="{ clicked: isToggled[1] }"
          ></div>

          <div
            class="swiper-slide swiper-slide--2"
            :class="{ clicked: isToggled[1] }"
          >
            <article class="materials__p">
              POTR pots are flat pack, origami planters designed to self-water
              your plants, made from recycled materials.
            </article>
          </div>

          <div
            class="materials__circle materials__circle--3 content__dont-display-on-mobile"
            @click="toggle(3)"
            :class="{ clicked: isToggled[2] }"
          ></div>

          <div
            class="swiper-slide swiper-slide--3"
            :class="{ clicked: isToggled[2] }"
          >
            <article class="materials__p">
              Once assembled the cotton cord doubles as the watering system,
              allowing your plants to self-regulate their water intake using
              tried and tested wicking technology.
            </article>
          </div>

          <div
            class="materials__circle materials__circle--4 content__dont-display-on-mobile"
            @click="toggle(4)"
            :class="{ clicked: isToggled[3] }"
          ></div>

          <div
            class="swiper-slide swiper-slide--4"
            :class="{ clicked: isToggled[3] }"
          >
            <article class="materials__p">
              Shipped flat packed so they can be slipped through your letterbox,
              POTR Pots have the smallest carbon footprint possible during
              transit.
            </article>
          </div>

          <div
            class="materials__circle materials__circle--5 content__dont-display-on-mobile"
            @click="toggle(5)"
            :class="{ clicked: isToggled[4] }"
          ></div>

          <div
            class="swiper-slide swiper-slide--5"
            :class="{ clicked: isToggled[4] }"
          >
            <article class="materials__p">
              We have chosen Bobbiny recycled cotton cord to use as our draw
              string and wicking cord. Not only is it 100% recycled, it looks
              great and works really well at wicking water.
            </article>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>

  <div class="content__marker"></div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Materials",

  setup() {
    const isToggled = ref([false, false, false, false, false]);

    const toggle = (num) => {
      isToggled.value[num - 1] = !isToggled.value[num - 1];
    };

    return { isToggled, toggle };
  },
};
</script>
