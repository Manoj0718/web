<template>
  <div class="hero_text">
    <div class="fixed_text">
      <h1>Hello !</h1>
    </div>
    <div id="animationText">
      <vue-typed-js
        :strings="msgs"
        :typeSpeed="120"
        :loop="true"
        :startDelay="2000"
        :cursorChar="'_'"
      >
        <h1>
          <span class="fixed">I'm Manoj.</span>
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
        'I am a Web Developer.',
        'Frontend Developer !',
        'Freelancer !',
        'SEO Marketer !',
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
.hero_text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffd700;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  font-size: 24px;
  padding-top: 10vh;
  @media screen and (max-width: map-get($breakpoints,mobile)) {
    height: 100%;
    display: flex;
    margin: auto;
    width: 100%;
  }
  .fixed_text {
    padding: 20px;
    color: #ffd700;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
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
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      padding: 2px;
      font-size: 18px;
      height: 30vh;
      margin: 0;
    }
    .fixed {
      padding: 10px;
      margin: 5vh;
      @media screen and (max-width: map-get($breakpoints,mobile)) {
        padding: 2px;
        margin: 0;
      }
    }
    .typing {
      font-style: oblique;
      padding: 10px;
      margin-top: 20px;
      @media screen and (max-width: map-get($breakpoints,mobile)) {
        padding: 2px;
        margin: 0;
      }
    }
  }
  .conatct_button {
    border: $border;
    margin: 10px;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      margin-top: 1vh;
    }

    .cybr-btn {
      @include button_cybre-btn;
    }

    .cybr-btn:hover {
      background: $line_color;
    }

    .cybr-btn:hover .cybr-btn__glitch {
      display: block;
    }
  }
}
</style>
