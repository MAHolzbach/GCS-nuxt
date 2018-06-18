<template lang="pug">
  div
    Header
    Navbar
    div.content
      div.grid-square.logo-area
        img(src="../static/gcs-logo.jpg", alt="logo").logo
      div.grid-square.about
        h2 About Us
        p We are a full service coffee shop serving all day breakfast and lunch. Conveniently located in Old Town Manassas. We offer catering services and free wifi. Call for more info at (571) 379-7285.
      div.grid-square.history
        h2 History
        p We opened on May 15th 2010 with the mission to bring quality coffee products in a relaxed setting to Old Town Manassas. We have since grown into a vibrant, active part of the business community, proudly serving locally roasted Monument Coffee. We have expanded our menu over the years to offer all day breakfast, freshly made paninis and sandwiches, as well as Eddy's Ice Cream and a selection of scones, muffins, cookies, and brownies. We pride ourselves on providing a quality product and a high level of customer service. Catering services are available and we welcome groups.
    Footer
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer
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
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  margin: 30px 10px;

  @include md {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "logo-area about"
      "logo-area history";
  }
}
.grid-square {
  padding: 20px;

  h2 {
    font-size: 1.8em;
    text-align: center;

    @include md {
      font-weight: 500;
      font-size: 2.2em;
    }
  }
  p {
    font-size: 1.1em;

    @include md {
      font-weight: 400;
      font-size: 1.4em;
    }
  }
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