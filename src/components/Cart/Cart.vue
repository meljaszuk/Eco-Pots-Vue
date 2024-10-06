<template>
  <div class="basket" :class="{ cartON: isCartOpen }">
    <div class="basket__product-box">
      <h2 class="basket__h2">YOUR BASKET</h2>
    </div>
    <a @click="toggleCart">
      <img src="/icons/cross-black.svg" alt=" " class="basket__close" />
    </a>

    <div class="basket__product-box">
      <div class="basket__product">
        <div class="basket__imageA">
          <img
            src="/images/productA.jpg"
            alt="large potr pot"
            class="basket__img"
          />
        </div>

        <div class="basket__item">
          <button class="basket__minus large-pot" @click="decrement('L')">
            -
          </button>
          <div class="basket__volume-large-pot basket__field">
            {{ largePotsQ }}
          </div>

          <button class="basket__plus large-pot" @click="increment('L')">
            +
          </button>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Price: </strong>
          </div>

          <div class="basket__price basket__field">$ {{ PRICE_LARGE }}</div>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Value: </strong>
          </div>

          <div class="basket__value-large-pot basket__field">
            $ {{ largePotsVal }}
          </div>
        </div>
      </div>

      <div class="basket__product">
        <div class="basket__imageA">
          <img
            src="/images/productB.jpg"
            alt="small potr pot"
            class="basket__img"
          />
        </div>

        <div class="basket__item">
          <button class="basket__minus small-pot" @click="decrement('S')">
            -
          </button>

          <div class="basket__volume-small-pot basket__field">
            {{ smallPotsQ }}
          </div>

          <button class="basket__plus small-pot" @click="increment('S')">
            +
          </button>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Price: </strong>
          </div>

          <div class="basket__price basket__field">$ {{ PRICE_SMALL }}</div>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Value: </strong>
          </div>

          <div class="basket__value-small-pot basket__field">
            $ {{ smallPotsVal }}
          </div>
        </div>
      </div>

      <div class="basket__product-total">
        <div class="basket__item">
          <strong> PRODUCTS TOTAL: </strong>

          <div class="basket__volume-total basket__field">{{ cartQ }}</div>
        </div>

        <div class="basket__item">
          <strong> TOTAL VALUE: </strong>
          <div class="basket__value-total basket__field">$ {{ cartVal }}</div>
        </div>
      </div>

      <div class="button-container">
        <div class="not-ready-text">Feature has not been added.</div>

        <button
          class="button button--primary2 not-ready"
          @click="handleNotReady"
        >
          ORDER
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  inject: [
    "handleNotReady",
    "isCartOpen",
    "toggleCart",
    "increment",
    "decrement",
    "largePotsQ",
    "smallPotsQ",
    "largePotsVal",
    "smallPotsVal",
    "PRICE_LARGE",
    "PRICE_SMALL",
    "cartQ",
    "cartVal",
  ],
};
</script>
