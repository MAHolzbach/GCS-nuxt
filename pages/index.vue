<template lang="pug">
  div
    Header
    Navbar
    div.content
      div.grid-square.logo-area
        img(src="../static/gcs-logo.jpg", alt="logo").logo
      div.grid-square.about
        p We are a full service coffee shop serving all day breakfast and lunch. Conveniently located in Old Town Manassas. We offer catering services and free wifi. Call for more info at (571) 379-7285.
      div.grid-square.history
        p We are a full service coffee shop serving all day breakfast and lunch. Conveniently located in Old Town Manassas. We offer catering services and free wifi. Call for more info at (571) 379-7285.
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Header,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.content {
  display: grid;
  grid-template-areas:
    "logo-area"
    "about"
    "history";

  @include md {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "logo-area about"
      "logo-area history";
  }
}
.grid-square {
  padding: 20px;
}
.logo-area {
  grid-area: logo-area;
}
.logo {
  width: 100%;
}
.about {
  grid-area: about;
}
.history {
  grid-area: history;
}
</style>