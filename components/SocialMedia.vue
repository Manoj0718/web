<template>
  <!-- herer brand for front awsone - https://marcuschristiansen.medium.com/setup-font-awesome-with-nuxt-js-in-59secs-3a444fd50962 , https://www.npmjs.com/package/@nuxtjs/fontawesome#icons -->
  <ul class="icon_menu">
    <li class="list">
      <a
        href="https://codepen.io/manoj0718"
        target="_blank"
        rel="noreferrer noopener"
      >
        <font-awesome-icon :icon="['fab', 'codepen']" class="single_icon" />
      </a>
    </li>

    <li class="list">
      <a
        href="https://github.com/Manoj0718"
        target="_blank"
        rel="noreferrer noopener"
      >
        <font-awesome-icon :icon="['fab', 'github']" class="single_icon" />
      </a>
    </li>
    <li class="list">
      <a
        href="https://www.linkedin.com/in/manojfernando-web-developer/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" class="single_icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '../assests/variables.scss';
@import '../assests/mixins.scss';

.icon_menu {
  @include social_media_icon_menu;
  flex-direction: column;
 
  .list {
    padding-top: 20px;
    margin-top: 5px;

    a {
      font-size: 24px;
      & :hover {
        color: #f5eff5;
      }
    }
    .single_icon {
     @include social_media_icon_design;    }
  }
}
</style>
