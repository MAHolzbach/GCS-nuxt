<template>
  <div>
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
  background-position: center;
  height: auto;
  min-height: 70vh;
  grid-gap: 20px;
  grid-template-areas:
    "title"
    "..."
    "hours";

  @include xs-to-sm {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "title ... hours";
  }
}
.title-box {
  grid-area: title;
  align-self: center;
  text-align: center;
}
.title {
  font-size: 3em;

  @include lg {
    font-size: 2em;
  }
}
.hours-box {
  grid-area: hours;
  align-self: center;
  text-align: center;
}
.sub-title {
  font-size: 2em;

  @include lg {
    font-size: 1em;
  }
}
</style>