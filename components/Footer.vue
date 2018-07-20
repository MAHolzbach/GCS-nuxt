<template>
  <div class="footer">
    <div class="address">
      <p>
        <strong>Grounds Central Station</strong>
      </p>
      <p>9360 Main Street, Manassas VA, 20110</p>
    </div>
    <div class="facebook">
      <p>Like us on Facebook!</p>
      <div class="fb-like" data-href="https://www.facebook.com/Groundscentralstation/" data-layout="box_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
    </div>
    <div class="hours">
      <p>Mon-Thurs: 6am - 9pm</p>
      <p>Fri: 6am- 10pm</p>
      <p> Sat: 7am - 10pm</p>
      <p>Sun: 8am - 8pm</p>
    </div>
  </div>
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
  font-size: 1em;

  & div {
    margin-bottom: 10px;
  }

  @include md {
    flex-direction: row;
  }

  @include lg {
    font-size: 1em;
  }

  @include xl {
    font-size: 1.1em;
  }
}
</style>
