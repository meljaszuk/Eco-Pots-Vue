<script setup>
import Header from "./components/Header/Header.vue";
import ForWhom from "./components/ForWhom/ForWhom.vue";
import Features from "./components/Features/Features.vue";
import Team from "./components/Team/Team.vue";
import Materials from "./components/Materials/Materials.vue";
import Product from "./components/Product/Product.vue";
import Benefits from "./components/Benefits/Benefits.vue";
import Contact from "./components/Contact/Contact.vue";
import Cart from "./components/Cart/Cart.vue";
</script>

<template>
  <Header />
  <main>
    <ForWhom />
    <Features />
    <Team />
    <Materials />
    <Product />
    <Benefits />
    <Contact />
  </main>
  <Footer />
  <Cart />
</template>
