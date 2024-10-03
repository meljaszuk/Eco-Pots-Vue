<template>
  <footer class="footer">
    <div class="footer__1">
      <address>
        <div class="footer__h2">ADDRESS</div>

        <div class="footer__address">
          <a
            class="address__info address__info--link"
            href="https://www.google.com/maps/search/?api=1&query=99+Staple+Hill+Road,+Bristol,+BS16+5AD"
            target="_blank"
          >
            United Kingdom
            <br />
            99 Staple Hill Road,
            <br />
            Bristol, BS16 5AD
          </a>
        </div>
      </address>
    </div>

    <div class="footer__2">
      <div class="footer__sm">
        <a href="https://twitter.com/" target="_blank">
          <div class="footer__twit"></div>
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <div class="footer__insta"></div>
        </a>

        <a href="https://www.facebook.com/" target="_blank">
          <div class="footer__fb"></div>
        </a>
      </div>

      <div class="footer__logo-box">
        <a href="index.html">
          <img
            src="/icons/logo.png"
            alt="potr pots logo"
            class="footer__logo"
          />
        </a>
      </div>
    </div>

    <div class="footer__3">
      <div class="footer__h2">about us</div>

      <div class="footer__cr">Copyright &copy; 2019</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
