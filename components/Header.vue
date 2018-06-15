<template lang="pug">
  div.banner
    h1.title Grounds Central Station
    h3.subtitle 9360 Main Street, Manassas
    h3.subtitle Mon-Thurs: 6am - 9pm, Fri: 6am- 10pm, Sat: 7am - 10pm, Sun: 8am - 8pm
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Righteous");
@import "~/layouts/variables.scss";
.banner {
  background-image: url("/static/coffee-banner.png");
  background-position: center;
  background-size: cover;
  height: 15em;
}
.title,
.subtitle {
  font-family: "Righteous", cursive;
  color: black;
  text-align: center;
  font-weight: 400;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;

  @include md {
  }
}
.title,
.subtitle {
  margin-bottom: 20px;
}
</style>

