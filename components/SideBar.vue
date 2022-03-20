<template>
  <!-- herer brand for front awsone - https://marcuschristiansen.medium.com/setup-font-awesome-with-nuxt-js-in-59secs-3a444fd50962 , https://www.npmjs.com/package/@nuxtjs/fontawesome#icons -->
  <div id="socila_mediaBar">
    <div class="icons">
      <SocialMedia></SocialMedia>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

#socila_mediaBar {
  background-color: $color-second_text;
  // #f5eff5;
  height: 100vh;
  width: 2px;
  margin-left: 50px;
  z-index: 1;
  position: absolute;
  position: fixed;

  .icons {
    position: relative;
    top: 60vh;
    right: 35px;
  }
  @media screen and (max-width: map-get($breakpoints,mobile)) {
    display: none;
  }
}
</style>
