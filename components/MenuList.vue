<template>
  <ul class="menu-list">
    <li class="menu-item">{{name}} - ${{price}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    name: { type: String },
    price: { type: String }
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
  font-size: 2.5em;
  line-height: 30px;

  @include md {
    font-size: 1em;
  }

  @include lg {
    font-size: 0.7em;
  }
}
</style>

