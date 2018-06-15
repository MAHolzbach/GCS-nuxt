<template lang="pug">
-const links = ["Home", "Menu", "Contact Us"]
  div.navbar
    each link in links
      a(href="#").nav-item
        i.fa.fa-home.fa-2x
        span.hidden-on-mobile= link
</template>

<style lang="scss" scoped>
.navbar {
  font-family: "Righteous", cursive;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-item {
  text-decoration: none;
  color: black;

  &:hover {
    color: #965f41;
  }
}
</style>
