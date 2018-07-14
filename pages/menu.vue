<template>
  <div class="menu">
    <div class="overlay">
      <h1 class="menu-title">Our Menu</h1>
      <div class="menu-lists">
        <ul v-for="(items, categoryName) in menuDataObj" v-bind:key=categoryName class="menu-ul">
          <h1 class="category-title">{{categoryName}}</h1>
          <MenuList v-for="item in items" v-bind:name="item.fields.name" v-bind:price="item.fields.price" v-bind:key=item.fields.name></MenuList>
        </ul>
      </div>
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
  font-family: Righteous, cursive;
  background-image: url("~/static/white-coffee-img.jpg");
  background-size: cover;
}
.overlay {
  padding: 30px;
  background-color: rgba(192, 192, 192, 0.7);
  width: 100%;

  @include md {
    padding: 30px 50px;
  }

  @include lg {
    padding: 30px 75px;
  }

  @include xl {
    padding: 30px 300px;
  }
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
.menu-title {
  text-align: center;
  margin-bottom: 15px;
  text-decoration: underline;
  font-size: 1.7em;

  @include md {
    font-size: 1.8em;
  }
}
.menu-ul {
  padding-left: 0;
}
.menu-ul:nth-of-type(odd) {
  @include md {
    text-align: left;
  }
}
.menu-ul:nth-of-type(even) {
  @include md {
    text-align: right;
  }
}
.category-title h1:nth-of-type(odd) {
  text-align: left;
}
.category-title h1:nth-of-type(even) {
  text-align: right;
}
.category-title {
  color: $brand-brown;
  line-height: 40px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #fff;
  font-size: 1.7em;
  margin-bottom: 10px;

  @include md {
    font-size: 1.8em;
  }

  @include lg {
    font-size: 2em;
  }
}
</style>
