<template lang="pug">
- const coffeeItems = ["Mocha Latte", "White Mocha Latte", "Peppermint Mocha", "Black Cherry Mocha","Vanilla Latte", "Caramel Macchiato", "Cappuccino", "Americano", "Raspberry White Mocha", "Espresso"];
- const favoriteItems = ["Love Potion No. 9", "Cinnamon Bun Latte", "Snowflake Latte", "Mounds Mocha"];
- const bsandpItems = ["Bacon, Egg & Cheese", "Ham, Egg & Cheese", "Sausage, Egg & Cheese", "Deluxe: Ham, Sausage, Bacon, Egg, Tomato & Cheese", "Mushroom, Pepper, Onion, Tomato, Egg & Cheese", "Egg, Tomato & Cheese"];
- const breakfastItems = ["English Muffin", "Bagel", "Bagel w/ Cream Cheese", "Blueberry Muffin", "Banana Walnut Coconut Muffin"];  
  div
    Header
    Navbar
    div.menu
      h1.title Menu
      div.menu-lists
        ul.menu-list.coffee
          h2.list-title Coffee
          for item in coffeeItems
            li.menu-item= item
        ul.menu-list.favorites
          h2.list-title Main Street Favorites
          for item in favoriteItems
            li.menu-item= item
        ul.menu-list.bsandp
          h2.list-title Breakfast Sandwiches and Paninis
          for item in bsandpItems
            li.menu-item= item
        ul.menu-list.sandwiches
          h2.list-title Breakfast Items
          for item in breakfastItems
            li.menu-item= item
    Footer
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer
  }
};

const contentful = require("contentful");
const client = contentful.createClient({
  space: "lh8rpm1vskzm",
  accessToken:
    "9a71a0c5974156e1b27f61a61c1130a073b1fc8f372303e78558ffb71637c3bc"
});

(async () => {
  const menuItems = await client.getEntries();
  console.log(menuItems);

})()
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.menu {
  background-image: url("../static/white-coffee-img.jpg");
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
