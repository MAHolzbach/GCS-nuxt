<template>
  <div class="content">
    <div class="title-box">
      <h1 class="title">Grounds Central Station</h1>
      <h4 class="sub-title">9360 Main St. Manassas VA, 20110 </h4>
    </div>
    <div class="hours-box">
      <h4 class="sub-title">
        Mon-Thurs: 6am-9pm
      </h4>
      <h4 class="sub-title">
        Fri: 6am-10pm
      </h4>
      <h4 class="sub-title">
        Sat: 7am-10pm
      </h4>
      <h4 class="sub-title">
        Sun: 8am-8pm
      </h4>
    </div>
    <div class="online-order">
      <a target="_blank" class="order-link" href="http://www.squareup.com/store/grounds-central-station">
        <i class="fas fa-utensils"></i>
        Place your pickup orders here!
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.content {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  font-family: Righteous, cursive;
  background-image: url("~/static/white-coffee-img.jpg");
  background-size: cover;
  background-position: 47% 50%;
  height: auto;
  min-height: 70vh;
  grid-gap: 20px;
  grid-template-areas:
    "title"
    "..."
    "hours"
    "online-order";

  @include xs-to-sm {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "title ... hours";
  }

  @include md {
    background-position: 39% 50%;
  }
}
.title-box {
  grid-area: title;
  align-self: center;
  text-align: center;
}
.title {
  font-size: 1.9em;

  @include lg {
    font-size: 3em;
  }
}
.hours-box {
  grid-area: hours;
  align-self: center;
  text-align: center;
  padding: 25px 0;
}
.sub-title {
  font-size: 1.2em;

  @include lg {
    font-size: 1.7em;
  }
}
.online-order {
  grid-area: hours;
  align-self: end;
  text-align: center;
  font-size: 1.2em;
  box-shadow: 0 0 0 rgba(150, 95, 65, 1);
  animation: pulse 2s infinite;

  @include md {
    grid-area: title;
    margin: 40px;
  }
}
@keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(150, 95, 65, 1);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(150, 95, 65, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(150, 95, 65, 0);
  }
}
.order-link {
  color: black;
  text-decoration: none;
}
</style>