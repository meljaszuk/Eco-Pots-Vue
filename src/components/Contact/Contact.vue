<template>
  <section class="content__section">
    <div class="contact">
      <div class="contact__stamp"></div>

      <div class="contact__form-box">
        <h2 class="contact__h2">have any questions?</h2>

        <div class="contact__text">Here few ways to get in touch wit us:</div>

        <div class="contact__cta">Message us</div>

        <form class="form" id="form">
          <div class="form__item">
            <label for="name" class="form__label"> Name </label>

            <input
              id="name"
              class="form__input"
              type="text"
              placeholder="Name"
              required
            />
          </div>

          <div class="form__item">
            <label for="email" class="form__label"> Email </label>

            <input
              id="email"
              class="form__input"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div class="form__item">
            <label for="msg" class="form__label"> </label>

            <textarea
              id="msg"
              class="form__textarea"
              type="text"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button class="button button--primary" @click="handleNotReady">
            Submit
          </button>
        </form>
      </div>

      <div class="contact__address-box">
        <div class="address__section">Our phone</div>

        <div class="address__info">
          <a class="address__info--link" href="tel:+270 555 0117">
            (270) 555-0117
          </a>
        </div>

        <div class="address__section">Our email</div>

        <div class="address__info">
          <a
            class="address__info--link"
            href="mailto:hello@bang&olufsen.com"
            target="_blank"
          >
            potrpots@gmail.com
          </a>
        </div>

        <div class="address__section">Our office</div>

        <div class="address__info">
          <a
            class="address__info--link"
            href="https://www.google.com/maps/search/?api=1&query=99+Staple+Hill+Road,+Bristol,+BS16+5AD"
            target="_blank"
          >
            United Kingdom 99 Staple Hill Road,
            <br />
            Bristol, BS16 5AD
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  inject: ["handleNotReady"],
};
</script>
