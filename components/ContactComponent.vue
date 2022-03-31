<template>
  <div class="contact_page">
    <div class="fixed_pic">
      <LetConnectAnime></LetConnectAnime>
    </div>
    <div class="scroll_site">
      <div class="loaction">
        <p>Location : Hasselt , Belgium</p>
      </div>
      <div class="row_display">
        <div class="email_drop_down">
          <p class="show_text" ref="text"></p>
          <ul>
            <li class="li">
              flyindessert@gmail.com
              <a href="mailto:flyindessert@gmail.com">Open In email Client</a>
            </li>
            <li class="li" @click="copyText()">Copy Email Address</li>
          </ul>
        </div>
        <div class="social_media">
          <p>Social Medial</p>
          <SocialMediaContact></SocialMediaContact>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyText() {
      navigator.clipboard
        .writeText(this.$refs.text.innerHTML)
        .then((result) => {
          console.log(this.$refs.text.innerHTML)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

.contact_page {
  @include page_container;
  @media screen and (max-width: map-get($breakpoints,mobile)) {
    @include mobile_page_container;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: map-get($breakpoints,tablet)) {
    @include mobile_page_container;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .fixed_pic {
    @include page_container_content_columns;
    border: $border;
    height: 100%;
    @include glass_morphism_background;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      width: 100%;
      margin: 4vh 0;
      padding: 0;
      height: 100%;
    }
    @media screen and (max-width: map-get($breakpoints,tablet)) {
      width: 100%;
      margin: 4vh 0;
      padding: 0;
      height: 100%;
    }
  }
  .scroll_site {
    @include glass_morphism_background;
    @include page_container_content_columns;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      width: 100%;
      height: 100%;
      @include section_devider;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 4vh 0;
    }
    @media screen and (max-width: map-get($breakpoints,tablet)) {
      width: 100%;
      height: 100%;
      @include section_devider;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 4vh 0;
    }
    .loaction {
      color: $nav_text_color;
      margin: 4vh 2vh;
      padding: 10px;
      @media screen and (max-width: map-get($breakpoints,mobile)) {
        margin: 0;
        padding: 10px;
      }
      p {
        padding: 10px;
        @media screen and (max-width: map-get($breakpoints,mobile)) {
          margin: 0;
        }
      }
    }
    .row_display {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media screen and (max-width: map-get($breakpoints,mobile)) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
        margin: 0;
      }
      .email_drop_down {
        color: $nav_text_color;
        padding: 10px;
        margin: 2vh;
        cursor: pointer;
        margin: 2vh;
        @media screen and (max-width: map-get($breakpoints,mobile)) {
          padding: 10px;
          margin: 0;
        }
        &:hover .li {
          /* From https://css.glass */
          background: rgba(255, 255, 255, 0.123);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(43, 255, 0, 0.1);
          backdrop-filter: blur(1.4px);
          -webkit-backdrop-filter: blur(1.4px);
          border: 1px solid rgb(43, 255, 0, 1);
          visibility: visible;
        }
        .show_text {
          padding: 10px;
        }

        ul {
          list-style-type: none;
          @media screen and (max-width: map-get($breakpoints,mobile)) {
            display: none;
          }
          .li {
            a {
              text-decoration: none;
              color: $nav_text_color;
            }
            margin: 2vh;
            color: $nav_text_color;
            padding: 10px;
            visibility: hidden;
          }
        }
      }
      .social_media {
        margin: 2vh;
        padding: 10px;
        @media screen and (max-width: map-get($breakpoints,mobile)) {
          margin: 0;
          align-items: center;
          padding: 0;
          border-radius: 10px;
        }
        p {
          padding: 10px;
          @media screen and (max-width: map-get($breakpoints,mobile)) {
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>
