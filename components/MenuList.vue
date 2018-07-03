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
  font-size: 1.2em;
  line-height: 30px;
}
</style>

