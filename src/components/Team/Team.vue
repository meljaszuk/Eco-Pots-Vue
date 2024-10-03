<template>
  <section class="content__section">
    <div class="potr-team">
      <div
        class="potr-team__names potr-team__names--andy content__dont-display-on-mobile"
      >
        Andy
      </div>

      <div
        class="potr-team__names potr-team__names--marty content__dont-display-on-mobile"
      >
        Martin
      </div>

      <h2 class="potr-team__h2">Meet the POTR team!</h2>

      <article class="potr-team__box">
        <div class="potr-team__text">
          <p class="potr-team__p">
            Andy and Martin are experienced product designers with a love
            of plants and the environment. They have over ten years combined
            industry experience in bringing products to market at some of the
            worlds largest consumer product companies.
          </p>

          <p class="potr-team__p">
            Having studied Product Design Engineering together at the Glasgow
            School of Art, they have a long history of working as a team
            on a variety of design projects.
          </p>
        </div>

        <img
          src="/images/marty_andy.jpg"
          class="potr-team__image"
          alt="marty andy"
        />
      </article>
    </div>
  </section>
</template>
<script>
export default {
  name: "Team",
};
</script>
