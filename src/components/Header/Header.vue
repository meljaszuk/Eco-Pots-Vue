<template>
  <header class="header" id="header">
    <nav class="header__nav">
      <a href="index.html" class="header__logo">
        <img
          src="/icons/logo.svg"
          alt="POTR POTS LOGO"
          class="header__logo content__graphic-link"
        />
      </a>

      <ul class="header__nav-list" id="slide-menu">
        <li class="header__nav-item content__dont-display-on-large-screen">
          <div class="content__dont-display-on-large-screen">
            <a
              class="header__nav-link header__underline content__dont-display-on-large-screen"
              @click="toggleCart"
            >
              Basket
            </a>
          </div>

          <div
            class="header__space content__dont-display-on-large-screen"
          ></div>

          <div class="basket__total header__product-number">{{ cartQ }}</div>
        </li>

        <li class="header__nav-item">
          <div>
            <a href="#features" class="header__nav-link header__underline">
              Features
            </a>
          </div>
        </li>

        <li class="header__nav-item">
          <a href="#about" class="header__nav-link"> About us </a>
        </li>

        <li class="header__nav-item">
          <a href="#materials" class="header__nav-link"> Materials </a>
        </li>

        <li class="header__nav-item">
          <a href="#contact" class="header__nav-link"> Message us </a>
        </li>

        <div class="header__close-box content__dont-display-on-large-screen">
          <a href="#header" class="content__dont-display-on-large-screen">
            <div class="header__close">CLOSE</div>

            <div class="header__close-line">
              <img
                src="/icons/line-white-vertical.svg"
                alt=" "
                class="content__dont-display-on-large-screen"
              />
            </div>

            <div class="header__close-cross">
              <img
                src="/icons/cross.svg"
                alt=" "
                class="content__dont-display-on-large-screen"
                @click="openSlideMenu"
              />
            </div>
          </a>
        </div>
      </ul>

      <a href="#slide-menu" class="header__graphic-link">
        <img
          src="/icons/burger_menu.svg"
          alt="POTR POTS explore"
          class="header__menu content__graphic-link content__dont-display-on-large-screen"
          @click="openSlideMenu"
        />
      </a>

      <a
        class="header__graphic-link content__dont-display-on-small-screen"
        @click="toggleCart"
      >
        <img
          src="/icons/cart.svg"
          alt="POTR POTS buy now"
          class="header__menu content__graphic-link content__dont-display-on-small-screen"
        />
      </a>
      <div class="header__total header__product-number">{{ cartQ }}</div>
    </nav>

    <img src="/images/potr_pots_1.jpg" alt="potr pots" class="header__image" />

    <div class="header__title-box">
      <h1 class="header__title">
        <span
          class="header__title header__title--transparent"
          data-text="POTR ~ Eco, self-"
        >
          POTR ~ Eco,
          <br class="content__hide" />
          self-
        </span>

        watering,
        <br class="content__hide" />
        origami

        <span
          class="header__title header__title--transparent"
          data-text="plant"
        >
          plant
        </span>

        <br class="content__hide" />
        pots
      </h1>
    </div>

    <div class="header__price">$7.50</div>

    <div class="header__info">Get the second order in half price</div>

    <div class="header__button-box">
      <a class="button--primary2" @click="toggleCart"> BUY NOW </a>
    </div>

    <a href="#for_whom">
      <div class="header__move-down">
        <div class="header__down-link">More about POTR POTS</div>
      </div>
    </a>

    <div class="content__space"></div>
  </header>

  <div class="content__marker" id="for_whom"></div>
</template>

<script>
export default {
  name: "Header",
  inject: ["toggleCart", "cartQ", "isMenuOpen", "openSlideMenu"],
};
</script>
