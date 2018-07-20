<template>
  <div>
    <div id="fb-root"></div>
    <Navbar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src =
    "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=290076934900269&autoLogAppEvents=1";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
