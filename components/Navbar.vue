<template>
  <div class="navbar">
    <div class="nav-links">
      <nuxt-link v-for="link in leftLinks" v-bind:key="link[0]" :to="`${link[2]}`" class="nav-link">
        <i :class="`fas fa-${link[1]} fa-2x`"></i>
        <span class="link-text">{{link[0]}}</span>
      </nuxt-link>
    </div>
    <img src="~/static/gcs-logo.jpg" class="logo" alt="logo">
    <div class="nav-links">
      <nuxt-link v-for="link in rightLinks" v-bind:key="link[0]" :to="`${link[2]}`" class="nav-link">
        <i :class="`fas fa-${link[1]} fa-2x`"></i>
        <span class="link-text">{{link[0]}}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftLinks,
      rightLinks
    };
  }
};

const leftLinks = [["Home", "home", "/"], ["Menu", "coffee", "/menu"]];
const rightLinks = [
  ["Contact", "envelope", "/contact"],
  ["About", "info", "/about"]
];
</script>


<style lang="scss" scoped>
@import "../assets/variables.scss";
@import url("https://fonts.googleapis.com/css?family=Righteous");

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 80%;
  margin: 20px auto;
  text-align: center;
}
.nav-links {
  font-family: "Righteous", cursive;
  display: inline;
  border-bottom: 2px solid black;
  border-top: 2px solid black;

  @include md {
    display: flex;
    padding: 20px 0;
    justify-content: space-around;
    width: 100%;
  }
}
.nav-link {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  margin: 10px 0;

  @include md {
    margin: 0 0.5em;
  }

  @include lg {
    margin: 0 1em;
  }

  & .fa-2x {
    display: none;

    @include md {
      display: block;
      font-size: 1.8em;
    }

    @include lg {
      font-size: 1em;
    }
  }

  & .link-text {
    font-size: 2.5em;

    @include md {
      font-size: 1.8em;
      margin-left: 10px;
    }

    @include lg {
      font-size: 1em;
    }
  }

  &:hover {
    color: $brand-brown;
  }
}
.logo {
  height: 100px;
  width: auto;
  margin-left: 20px;

  @include md {
    height: 200px;
    margin: 0;
  }
}
</style>
