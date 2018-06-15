<template lang="pug">
- const links = [["Home", "home"], ["Menu", "coffee"], ["Contact Us", "envelope"]]
  div.navbar
    div.nav-links
      each link in links
        a(href="#").nav-item
          i(class=`fa fa-${link[1]} fa-2x`)
          span.link-text= link[0]
</template>

<style lang="scss" scoped>
@import "~/layouts/variables.scss";
.navbar {
  width: 80%;
  margin: 0 auto;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
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
  flex: 1;

  & .fa-2x {
    display: none;

    @include md {
      display: block;
    }
  }

  & .link-text {
    font-size: 1.2em;
    @include md {
      margin-left: 10px;
    }
  }

  &:hover {
    color: #965f41;
  }
}
</style>
