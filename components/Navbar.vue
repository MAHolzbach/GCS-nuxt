<template lang="pug">
- const links = [["Home", "home", "/"], ["Menu", "coffee", "/menu"], ["Contact Us", "envelope", "/contact"], ["About", "info", "/about"]]
  div.navbar
    div.nav-links
      each link in links
        nuxt-link(to=`${link[2]}`).nav-item
          i(class=`fa fa-${link[1]} fa-2x`)
          span.link-text= link[0]
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";
@import url("https://fonts.googleapis.com/css?family=Righteous");

.navbar {
  width: 80%;
  margin: 0 auto;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: left;
}
.nav-links {
  font-family: "Righteous", cursive;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
}
.nav-item {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fa-2x {
    display: none;

    @include md {
      display: block;
    }
  }

  & .link-text {
    font-size: 1em;
    @include md {
      margin-left: 10px;
    }
  }

  &:hover {
    color: $brand-brown;
  }
}
</style>
