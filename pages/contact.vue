<template lang="html">
  <div>
    <div class="contact">
      <div class="overlay">
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <form class="c-form" name="contact" method="POST" netlify-honeypot="bot-field" netlify>
          <fieldset class="c-form__set">
            <legend class="c-form__heading">Contact Us!</legend>
            <input type="hidden" name="form-name" value="contact" />
            <label for="name" class="c-form__label">Name</label>
            <input type="text" name="name" id="name" class="c-form__input-field" value="" autocorrect="off" required />
            <label for="email" class="c-form__label">Email</label>
            <input type="email" name="email" id="email" autocapitalize="none" autocorrect="off" class="c-form__input-field" required />
            <label for="message" class="c-form__label">Your message</label>
            <textarea name="message" id="message" class="c-form__input-field" rows="15" required></textarea>
            <button class="c-form__button" type="submit">Submit</button>
          </fieldset>
        </form>
        <div class="map-container">
          <div class="hours">
            <p>Mon-Thurs: 6am - 9pm</p>
            <p>Fri: 6am- 10pm</p>
            <p> Sat: 7am - 10pm</p>
            <p>Sun: 8am - 8pm</p>
          </div>
          <GoogleMap name="gcs-location"></GoogleMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "~/components/GoogleMap.vue";

export default {
  components: {
    GoogleMap
  }
};
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
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @include md {
    flex-direction: row;
  }
}
.c-form {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex: 0.5;

  @include lg {
    flex: 0.4;
  }
}
.c-form__heading {
  font-size: 2em;
  text-align: center;

  @include lg {
    font-size: 1.3em;
  }

  @include xl {
    font-size: 1.6em;
  }
}
.c-form__label {
  font-size: 1.5em;

  @include md {
    font-size: 1.5em;
  }

  @include lg {
    font-size: 1em;
  }

  @include xl {
    font-size: 1.2em;
  }
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
  font-family: "Times New Roman", Times, serif;
  font-size: 1.3em;

  @include md {
    font-size: 1.3em;
  }

  @include lg {
    font-size: 1em;
  }

  @include xl {
    font-size: 1.2em;
  }

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
  height: auto;
  max-height: 50px;
  transition: all 0.2s linear 0s;
  background-color: $brand-brown;
  font-family: Righteous;
  font-size: 1.5em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  padding: 10px 0;

  &:before {
    content: "\f1d8";
    font-family: "Font Awesome 5 Free";
    font-size: 1em;
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
    padding-right: 20px;
  }

  &:hover {
    text-indent: -20px;

    &:before {
      opacity: 1;
      text-indent: 0px;
    }
  }

  @include md {
    font-size: 1.5em;
  }

  @include lg {
    font-size: 1.1em;
  }

  @include xl {
    font-size: 1.4em;
  }
}
.map-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex: 0.5;
}
.hours {
  font-family: Righteous, cursive;
  text-align: center;
  font-size: 1.2em;
  margin: 10px 0;
}
</style>
