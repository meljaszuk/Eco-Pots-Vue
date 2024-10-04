<template>
  <section class="content__section">
    <div class="benefits">
      <div class="benefits__photos">
        <div class="benefits__photo benefits__photo--1">
          <img src="/images/polaroid_1.jpg" alt="potr pots" />

          <p class="benefits__photo-desc">Origami experiments</p>
        </div>

        <div class="benefits__photo benefits__photo--2">
          <img src="/images/polaroid_2.jpg" alt="potr pots" />

          <p class="benefits__photo-desc">A plant pot for the 21st century.</p>
        </div>

        <div class="benefits__photo">
          <img src="/images/polaroid_3.jpg" alt="potr pots" />

          <p class="benefits__photo-desc">Bobbiny cotton cord colour options</p>
        </div>

        <div class="benefits__photo">
          <img src="/images/polaroid_4.jpg" alt="potr pots" />

          <p class="benefits__photo-desc">
            POTR Pots compliment other house hold objects
          </p>
        </div>

        <div class="benefits__photo">
          <img src="/images/polaroid_5.jpg" alt="potr pots" />

          <p class="benefits__photo-desc">Bobbiny cotton cord colour options</p>
        </div>

        <div class="benefits__photo">
          <img src="/images/polaroid_6.jpg" alt="potr pots" />

          <p class="benefits__photo-desc">POTR pots ready to go!</p>
        </div>
      </div>

      <div class="benefits__content">
        <article class="benefits__1">
          <div class="benefits__item">
            <p class="benefits__title">Easy assembly</p>

            <p class="benefits__text">Pull the draw string to assemble!</p>
          </div>

          <div class="benefits__item">
            <p class="benefits__title">Flat pack postage</p>

            <p class="benefits__text">
              POTR pots arrive flat packed in an envelope!
            </p>
          </div>

          <div class="benefits__item">
            <p class="benefits__title">Self-watering</p>

            <p class="benefits__text">
              Add water to POTR and watch your plant drink!
            </p>
          </div>
        </article>

        <div class="benefits__2">
          <div class="benefits__button-box">
            <a class="buttons button--double" @click="toggleCart"> BUY NOW </a>
          </div>

          <div class="benefits__discount">50% off</div>

          <div class="benefits__half-price">
            Get the second order in half price
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="content__marker" id="contact"></div>
</template>

<script>
export default {
  name: "Benefits",
  inject: ["toggleCart"],
};
</script>
