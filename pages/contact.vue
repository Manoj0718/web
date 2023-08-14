<template>
  <div id="conatct_page">
    <ContactComponent></ContactComponent>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

#conatct_page {
  @include page_margins;
  text-align: center;
  color: $nav_text_color;

  @media screen and (max-width: map-get($breakpoints, mobile)) {
    @include mobile_page_margin;
  }
}
</style>
