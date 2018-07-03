<template lang="pug">
  div
    div.content
      div.grid-square.logo-area
        img(src="../static/gcs-logo.jpg", alt="logo").logo
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.content {
  display: grid;
  grid-template-areas: "logo-area";
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  margin: 30px 10px;

  @include md {
    grid-template-columns: 1fr;
    grid-template-areas: "logo-area";
  }
}
.grid-square {
  padding: 20px;

  h2 {
    font-size: 1.8em;
    text-align: center;

    @include md {
      font-weight: 500;
      font-size: 2.2em;
    }
  }
  p {
    font-size: 1.1em;

    @include md {
      font-weight: 400;
      font-size: 1.4em;
    }
  }
}
.logo-area {
  grid-area: logo-area;
}
.logo {
  width: 100%;
}
.about {
  grid-area: about;
}
.history {
  grid-area: history;
}
</style>