<template>
  <ul class="menu-list">
    <li :key="key" class="menu-item class">{{name}} - ${{price}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    name: { type: String },
    price: { type: String },
    key: { type: String },
    class: { type: String }
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/variables.scss";

.menu-list {
  list-style: none;
  margin-bottom: 10px;
  padding: 0;
}
.menu-item {
  font-size: 1.2em;
  line-height: 30px;
}
.coffee {
  grid-area: coffee;
}
.favorites {
  grid-area: favorites;
}
.bsandp {
  grid-area: bsandp;

  @include md {
    text-align: right;
    margin-right: 20px;
  }
}
.sandwiches {
  grid-area: sandwiches;

  @include md {
    text-align: right;
    margin-right: 20px;
  }
}
</style>

