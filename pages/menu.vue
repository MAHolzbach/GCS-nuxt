<template>
  <div class="menu">
    <h1 class="title">Menu</h1>
    <div class="menu-lists">
    //! Componentize these and their logic
    <ul class="menu-list coffee">
      <li v-for="item in menuItemsObj.coffeeItems" :key="item.itemName" class="menu-item">
        {{item.itemName}} - ${{item.price}}
      </li>
    </ul>
    <ul class="menu-list sandwiches">
      <li v-for="item in menuItemsObj.breakfastItems" :key="item.itemName" class="menu-item">
        {{item.itemName}} - ${{item.price}}
      </li>
    </ul>
    <ul class="menu-list bsandp">
      <li v-for="item in menuItemsObj.breakfastSandwiches" :key="item.itemName" class="menu-item">
        {{item.itemName}} - ${{item.price}}
      </li>
    </ul>
    <ul class="menu-list favorites">
      <li v-for="item in menuItemsObj.favorites" :key="item.itemName" class="menu-item">
        {{item.itemName}} - ${{item.price}}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import menuItems from "~/assets/contentful.json";

const menuItemsObj = {
  coffeeItems: [],
  breakfastItems: [],
  breakfastSandwiches: [],
  favorites: []
}

menuItems.forEach(menuItem => {
  if(menuItem.sys.contentType.sys.id === "coffee") {
    menuItemsObj.coffeeItems.push(menuItem.fields)
  }
  if(menuItem.sys.contentType.sys.id === "breakfastItems") {
    menuItemsObj.breakfastItems.push(menuItem.fields)
  }
  if(menuItem.sys.contentType.sys.id === "breakfastSandwiches") {
    menuItemsObj.breakfastSandwiches.push(menuItem.fields)
  }
  if(menuItem.sys.contentType.sys.id === "mainStreetFavorites") {
    menuItemsObj.favorites.push(menuItem.fields)
  }
});

export default {
  data() {
    console.log(menuItemsObj.coffeeItems);
    return {
      menuItemsObj
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
