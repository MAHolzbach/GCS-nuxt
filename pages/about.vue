<template>
  <div class="about">
    <div class="overlay">
      <h2 class="title">About Us</h2>
      <p class="info">We are a full service coffee shop serving all day breakfast and lunch. Conveniently located in Old Town Manassas. We offer catering services and free wifi. Call for more info at (571) 379-7285.</p>
      <h2 class="title">History</h2>
      <p class="info">We opened on May 15th 2010 with the mission to bring quality coffee products in a relaxed setting to Old Town Manassas. We have since grown into a vibrant, active part of the business community, proudly serving locally roasted Monument Coffee. We have expanded our menu over the years to offer all day breakfast, freshly made paninis and sandwiches, as well as Eddy's Ice Cream and a selection of scones, muffins, cookies, and brownies. We pride ourselves on providing a quality product and a high level of customer service. Catering services are available and we welcome groups.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/variables.scss";

.about {
  font-family: Righteous, cursive;
  background-image: url("~/static/white-coffee-img.jpg");
  background-size: cover;
}
.overlay {
  min-height: 70vh;
  padding: 20px;
  background-color: rgba(192, 192, 192, 0.7);

  @include md {
    line-height: 2em;
    padding: 20px 80px;
  }

  @include lg {
    padding: 20px 150px;
  }

  @include xl {
    padding: 20px 300px;
  }
}
.title {
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 20px;

  @include md {
    font-size: 2em;
  }

  @include lg {
    font-size: 2em;
  }
}
.info {
  font-size: 1.2em;
  margin-bottom: 20px;

  @include md {
    font-size: 1.3em;
  }

  @include lg {
    font-size: 1.3em;
  }
}
</style>
