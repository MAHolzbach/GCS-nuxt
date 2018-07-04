<template lang="pug">
  div.footer
    div.address
      p <strong>Grounds Central Station</strong>
      p 9360 Main Street, Manassas VA, 20110
    div.facebook
      p Like us on Facebook!
      div(data-href="https://www.facebook.com/Groundscentralstation/" data-width="87" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true").fb-like
    div.hours
      p Mon-Thurs: 6am - 9pm
      p Fri: 6am- 10pm
      p Sat: 7am - 10pm 
      p Sun: 8am - 8pm
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $brand-brown;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 30px;
  text-align: center;
  flex-direction: column;
  font-size: 2em;

  & div {
    margin-bottom: 10px;
  }

  @include md {
    flex-direction: row;
    font-size: 1em;
  }

  @include lg {
    font-size: 0.8em;
  }

  @include xl {
    font-size: 0.5em;
  }
}
</style>
