<template>
  <div id="About_Page">
    <AboutComponent></AboutComponent>
  </div>
</template>

<script>


</script>

<style lang="scss">
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

#About_Page {
  @include page_margins;
  @media screen and (max-width: map-get($breakpoints,mobile)) {
    @include mobile_page_margin;
  }
}
</style>
