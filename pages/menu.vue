<template>
  <div>
    <ul>
      <li v-for="item in menuItems" :key="item.fields.itemName">
        {{item.fields.itemName}} - {{item.fields.price}}
      </li>
    </ul>
  </div>
</template>

<script>
import menuItems from "~/assets/contentful.json";
export default {
  data() {
    return {
      menuItems
    };
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/variables.scss";

.menu {
  background-image: url("~/static/white-coffee-img.jpg");
  font-family: Righteous, cursive;
  background-size: cover;
  margin-top: 20px;
}
.menu-lists {
  display: grid;
  grid-template-areas:
    "coffee"
    "bsandp"
    "favorites"
    "sandwiches";

  @include md {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "coffee bsandp"
      "favorites sandwiches";
  }
}
.title {
  text-align: center;
}
.list-title {
  color: $brand-brown;
  line-height: 40px;
}
.menu-list {
  list-style: none;
  margin-bottom: 20px;
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
