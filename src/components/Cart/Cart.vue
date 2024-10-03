<template>
  <div class="basket" id="cart">
    <div class="basket__product-box">
      <h2 class="basket__h2">YOUR BASKET</h2>
    </div>
    <a href="#header">
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

        <div class="basket__name">Large Pot (1.5 litres):</div>

        <div class="basket__item">
          <button class="basket__minus large-pot">-</button>
          <div class="basket__volume-large-pot basket__field">0</div>

          <button class="basket__plus large-pot">+</button>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Price: </strong>
          </div>

          <div class="basket__price basket__field">$ 7.5</div>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Value: </strong>
          </div>

          <div class="basket__value-large-pot basket__field">$ 0</div>
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

        <div class="basket__name">Small Pot (0.4 litres):</div>

        <div class="basket__item">
          <button class="basket__minus small-pot">-</button>

          <div class="basket__volume-small-pot basket__field">0</div>

          <button class="basket__plus small-pot">+</button>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Price: </strong>
          </div>

          <div class="basket__price basket__field">$ 4.5</div>
        </div>

        <div class="basket__item">
          <div class="basket__field">
            <strong> Value: </strong>
          </div>

          <div class="basket__value-small-pot basket__field">$ 0</div>
        </div>
      </div>

      <div class="basket__product-total">
        <div class="basket__item">
          <strong> PRODUCTS TOTAL: </strong>

          <div class="basket__volume-total basket__field">0</div>
        </div>

        <div class="basket__item">
          <strong> TOTAL VALUE: </strong>
          <div class="basket__value-total basket__field">$ 0</div>
        </div>
      </div>

      <div class="button-container">
        <div class="not-ready-text">Feature has not been added.</div>

        <button class="button button--primary2 not-ready">ORDER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>
