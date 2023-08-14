<template>
  <div class="main_container">
    <div class="hero_text">
      <div id="animationText">
        <vue-typed-js :strings="msgs" :typeSpeed="120" :loop="true" :startDelay="2000" :cursorChar="'_'">
          <h1>
            <span class="fixed">Hi, I'm Manoj.</span>
            <br />
            <!-- <em>  -->
            <span class="typing"></span>
            <!-- </em>  -->
          </h1>
        </vue-typed-js>
      </div>
      <div class="conatct_button">
        <button class="cybr-btn" @click.prevent="openFile()">View My Cv</button>
      </div>
      <div class="social_button">
        <SocialMediaContact></SocialMediaContact>
      </div>
      <p class="slogen"><span> 🔥 </span>My motto: face challenges with a smile and never stop growing.<span> 🔥 </span>
      </p>
    </div>
    <div class="skill">
      <LazyMySkillComponenet></LazyMySkillComponenet>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero_text',
  mounted() {
    this.setAnimation()
  },
  data() {
    return {
      msgs: [
        'Javascript Developer!',
        'Frontend Developer!',
      ],
    }
  },
  methods: {
    setAnimation() {
      this.$anime({
        targets: '.fixed_text',
        //translateX: 90,
        // rotate: '2turn',
        duration: 800,
      })
    },
    openFile() {
      console.log('clcik');
      window.open('https://drive.google.com/file/d/1qrN1QZTdy2J4jDoFogfFxeIuB3NnvSow/view?usp=sharing')
    },
  },
}
</script>

<style lang="scss">
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

.main_container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffd700;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width:map-get($breakpoints, mobile)) {
    margin: 0 auto;
    height: 100%;
  }

  .hero_text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #ffd700;
    margin: 10vh auto;
    width: 90%;
    font-size: 1.2rem;
    height: 90vh;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
      margin: 10vh 0 0 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;
    }

    .fixed_text {
      padding: 20px;
      color: #ffd700;

      @media screen and (max-width: map-get($breakpoints, mobile)) {
        font-size: 18px;
        padding: 3px;
        align-items: center;
      }
    }

    #animationText {
      color: #ffd700;
      margin: 5vh;
      padding: 20px;
      text-align: center;

      @media screen and (max-width: map-get($breakpoints, mobile)) {
        padding: 2px;
        font-size: 18px;
        height: 30vh;
        margin: 0;
      }

      .fixed {
        padding: 10px;
        margin: 5vh;

        @media screen and (max-width: map-get($breakpoints, mobile)) {
          padding: 2px;
          margin: 0;
        }
      }

      .typing {
        font-style: oblique;
        padding: 10px;
        margin-top: 20px;

        @media screen and (max-width: map-get($breakpoints, mobile)) {
          padding: 2px;
          margin: 0;
        }
      }
    }

    .conatct_button {
      border: $border;
      margin: 10px;
      box-shadow: 1px 0 10px $shadowColor;

      @media screen and (max-width: map-get($breakpoints, mobile)) {
        margin-top: 0.5vh;
      }

      .cybr-btn {
        @include button_cybre-btn;
      }

      .cybr-btn:hover {
        background: $line_color;
        box-shadow: 0 0 25px $shadowColor;
      }

      .cybr-btn:hover .cybr-btn__glitch {
        display: block;
      }
    }

    .social_button {
      margin-top: 1vh;
    }

    .slogen {
      font-size: 1rem;
      padding: 1vh;
      color: $nav_text_color;
      font-style: italic;

      @media screen and (max-width:map-get($breakpoints, mobile)) {
        font-size: .8rem;
        margin: 1vh 0 1vh 0;
        text-align: center;
      }
    }


  }

  .skill {
    color: $nav_text_color;
    margin: auto;
    height: 90vh;
    padding: 5vh;

    @media screen and (max-width:map-get($breakpoints, mobile)) {
      //@include section_devider;
      height: 100%;
      margin: 0 1vh 1vh 1vh;
      padding: 0;
    }

  }
}
</style>
