<template>
  <div class="menu">
    <h1 class="title">Menu</h1>
    <div class="menu-lists">
      <ul v-for="(items, categoryName) in menuDataObj" v-bind:key=categoryName class="menu-list">
        <h1 class="title">{{categoryName}}</h1>
        <MenuList v-for="item in items" v-bind:name="item.fields.name" v-bind:price="item.fields.price" class="coffee" v-bind:key=item.fields.name></MenuList>
      </ul>
    </div>
  </div>
</template>

<script>
import menuData from "~/assets/contentful.json";
import MenuList from "../components/MenuList.vue";

const menuDataObj = {};

menuData.forEach(item => {
  if (!menuDataObj[item.fields.category.fields.categoryTitle]) {
    menuDataObj[item.fields.category.fields.categoryTitle] = [item];
  } else {
    menuDataObj[item.fields.category.fields.categoryTitle].push(item);
  }
});

export default {
  data() {
    return {
      menuDataObj
    };
  },
  components: {
    MenuList
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
</style>
