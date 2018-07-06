<template>
  <div>
    <div class="contact">
      <div class="overlay">
        <form class="c-form" action="" method="post">
          <fieldset class="c-form__set">
            <legend class="c-form__heading">Contact Us!</legend>
            <label for="name" class="c-form__label">Name</label>
            <input type="text" name="name" id="name" class="c-form__input-field" value="" autocorrect="off" required />
            <label for="email" class="c-form__label">Email</label>
            <input type="email" name="email" id="email" autocapitalize="none" autocorrect="off" class="c-form__input-field" required />
            <label for="message" class="c-form__label">Your message</label>
            <textarea name="message" id="message" class="c-form__input-field" rows="10" required></textarea>
            <button class="c-form__button" type="submit">Submit</button>    
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";

.contact {
  font-family: Righteous, cursive;
  background-image: url("~/static/white-coffee-img.jpg");
  background-size: cover;
}
.overlay {
  min-height: 70vh;
  padding: 20px;
  background-color: rgba(192, 192, 192, 0.7);
}
.c-form__heading {
  font-size: 4em;
  text-align: center;

  @include md {
    font-size: 2.7em;
  }

  @include lg {
    font-size: 1.3em;
  }
}
.c-form__label,
.c-form__input {
  display: block;
}
.c-form__label {
  font-size: 2.3em;
}
.c-form__input-field {
  min-height: 30px;
  width: 100%;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid #dddddd;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
  }
}
.c-form__button {
  text-align: center;
  display: inline-block;
  position: relative;
  width: 100%;
  height: 30px;
  transition: all 0.2s linear 0s;
  background-color: $brand-brown;
  font-family: Righteous;
  font-size: 2.7em;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: "\f1d8";
    font-family: "Font Awesome 5 Free";
    font-size: 15px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 40px;
    transition: all 0.2s linear 0s;
  }

  &:hover {
    text-indent: -20px;

    &:before {
      opacity: 1;
      text-indent: 0px;
    }
  }
}
</style>
