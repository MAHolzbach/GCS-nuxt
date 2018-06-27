<template>
  <div class="menu">
    <h1 class="title">Menu</h1>
    <div class="menu-lists">
      <!-- <menu-list name="Iced Coffee" price="2.50" class="coffee" :key="name"></menu-list>
      <ul class="menu-list coffee">
        <li v-for="item in menuDataObj.coffeeItems" :key="item.itemName" class="menu-item">
          {{item.itemName}} - ${{item.price}}
        </li>
      </ul>
      <ul class="menu-list sandwiches">
        <li v-for="item in menuDataObj.breakfastItems" :key="item.itemName" class="menu-item">
          {{item.itemName}} - ${{item.price}}
        </li>
      </ul>
      <ul class="menu-list bsandp">
        <li v-for="item in menuDataObj.breakfastSandwiches" :key="item.itemName" class="menu-item">
          {{item.itemName}} - ${{item.price}}
        </li>
      </ul>
      <ul class="menu-list favorites">
        <li v-for="item in menuDataObj.favorites" :key="item.itemName" class="menu-item">
          {{item.itemName}} - ${{item.price}}
        </li>
      </ul> -->
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
console.log(menuDataObj);
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
