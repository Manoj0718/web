<template>
  <div class="app">
    <ParticelsComponennt></ParticelsComponennt>
    <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    <Logoheader @showMobileMenu="showMobileMenu = true"></Logoheader>
    <SideBar></SideBar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  //* when router clicks , mobile menu closeing//
  watch: {
    $route() { this.showMobileMenu = false }
  },
  data() {
    return {
      showMobileMenu: false,
    }
  }
}

</script>

<style lang="scss"></style>
