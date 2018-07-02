<template lang="pug">
  div.section
    div.banner
      h1.title Grounds Central Station
      h3.subtitle 9360 Main Street, Manassas
      h3.subtitle Mon-Thurs: 6am - 9pm, Fri: 6am- 10pm, Sat: 7am - 10pm, Sun: 8am - 8pm
    hr.break
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Righteous");
@import "../assets/variables.scss";
.banner {
  background-image: url("/static/coffee-banner.png");
  background-position: center;
  background-size: cover;
  height: 15em;
  width: 100%;
  padding-bottom: 20px;

  @include md {
    height: 17em;
  }
}
.title,
.subtitle {
  font-family: "Righteous", cursive;
  color: white;
  text-align: center;
  font-weight: 400;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  margin-bottom: 20px;
}
.title {
  font-size: 2em;
  padding-top: 20px;
  @include md {
    font-size: 4em;
  }
}
.subtitle {
  font-size: 1.3em;
  @include md {
    font-size: 2em;
  }
}
.break {
  margin: 10px 0;
  border: none;
}
</style>

