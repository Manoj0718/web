<template>
  <div class="conatct_Form">
    <h2>Let's get in touch!</h2>
    <ContactForm></ContactForm>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints";

.conatct_Form {
  margin: 4vh 2vh;
  padding: 10px;

  @media screen and (max-width: map-get($breakpoints,mobile)) {
    margin: 4vh 0;
  }
}
</style>
 
