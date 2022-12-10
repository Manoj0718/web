<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav class="bar">
      <div class="logo">
        <nuxt-link to="/">
          <nuxt-img src="\~/For-Website_logo_110-JPG.jpg" alt="freelancer_vue_devloper_Bilzen_wed_development" />
        </nuxt-link>
      </div>
      <div class="menu">
        <ul style="list-style-type: none" v-show="!mobile">
          <li>
            <NuxtLink to="/">
              <span>{</span>Home
              <span>}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              <span>{</span>About
              <span>}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Protfolio">
              <span>{</span>Portfolio
              <span>}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              <span>{</span>Contact
              <span>}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="iconBox">
        <font-awesome-icon :icon="sortIcon" @click="toggle(), toggleSortDirection()" v-show="mobile" :class="{
          'iconBox-active': mobileNav
        }" />
      </div>
      <transition name="mobile-nav">
        <div class="dropdown_nav-div" v-show="mobileNav" v-on:click.prevent="hideMenu"
          :class="{ 'mobile-nav-leave-to': isClicked }">
          <ul class="dropdown_nav">
            <li class="dropdown_nav-li">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="dropdown_nav-li">
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li class="dropdown_nav-li">
              <NuxtLink to="/Protfolio">Portfolio</NuxtLink>
            </li>
            <li class="dropdown_nav-li">
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
          </ul>
          <SocialMediaContact></SocialMediaContact>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      isClicked: false,
      sortDirection: 'asc',
    }
  },

  created() {
    if (process.browser) {
      window.addEventListener('resize', this.checkScreen)
      this.checkScreen()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  computed: {
    sortIcon() {
      return this.sortDirection === 'asc'
        ? ['fas', 'bars']
        : ['fas', 'window-close']
    },
  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav
    },
    toggleSortDirection() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      // console.log(this.sortDirection);
    },
    hideMenu() {
      // console.log("clicked");
      this.isClicked = !this.isClicked
    },
    updateScroll() {
      //*  cross browser support -> https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY //
      const scrollPosition = window.pageYOffset
      if (scrollPosition > 250) {
        this.scrollNav = true
        return
      }
      this.scrollNav = false
    },

    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 768) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assests/variables.scss';
@import '../assests/mixins.scss';
@import '../assests/breakpoints.scss';

header {
  position: fixed;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  padding: 0 80px;

  @media screen and (max-width: map-get($breakpoints, mobile)) {
    width: 100%;
    margin: 0;
  }

  .bar {
    position: relative;
    width: 95%;
    display: flex;
    flex-direction: raw;
    padding: 0;
    justify-content: space-between;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
      display: flex;
      margin: 2px auto;
      padding: 0;
      width: 100%;
    }

    .logo {
      color: $color-second_text;
      align-self: flex-start;

      @media screen and (max-width: map-get($breakpoints, mobile)) {
        margin-left: -20%;
      }

      img {
        aspect-ratio: attr(width) / attr(height);
      }
    }
  }

  .menu {
    padding: 10px;
    align-self: center;

    ul {
      display: flex;
      flex-direction: row;
      text-align: center;
      gap: 1em;
      cursor: pointer;

      span {
        visibility: hidden;
      }

      li {
        margin: 0 0.5rem;
        padding: 0.25rem;
        text-decoration: none;

        :hover span {
          visibility: visible;
          color: $color-second_text;
        }

        a {
          text-decoration: none;
        }

        a:visited {
          text-decoration: none;
          color: white;
        }

        a:hover {
          color: $color-second_text;
        }

        a.nuxt-link-exact-active {
          color: $color-second_text;
        }
      }
    }
  }

  .iconBox {
    @media screen and (max-width: map-get($breakpoints, mobile)) {
      cursor: pointer;
      font-size: 30px;
      color: #ffd700;
      margin-right: -10vw;
      transition: transform 450ms;
    }

    .iconBox-active {
      @media screen and (max-width: map-get($breakpoints, mobile)) {
        transform: scale(1.13);
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobil-nav-enter-to {
    transform: translateX(-1px);
  }

  .dropdown_nav-div {
    @media screen and (max-width: map-get($breakpoints, mobile)) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      max-width: 250px;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(2, 2, 52, 0.1);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10.9px);
      -webkit-backdrop-filter: blur(10.9px);
      border: 1.5px solid rgb(0, 255, 55);
      z-index: 1;

      .dropdown_nav {
        list-style: none;
        margin-bottom: 2.5vh;

        .dropdown_nav-li {
          margin: 4vh;
          padding: 0.25vh;
          text-decoration: none;

          a {
            text-decoration: none;
            color: $nav_text_color;
            font-weight: 900;
            font-size: 18px;
          }
        }
      }
    }
  }
}

.scrolled-nav {
  background-color: #020234;
  box-shadow: 5px 5px 5px #ffd700;

  .bar {
    padding: 0;
  }
}
</style>



// :icon="['fas', 'bars']"