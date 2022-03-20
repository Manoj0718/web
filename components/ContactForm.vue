<template>
  <!-- //! here first instalnuxt.config filr , then plugins folder , then componenst import to this page  -->
  <section>
    <ValidationObserver v-slot="{ invalid }">
      <form ref="form" @submit.prevent="onSubmit">
        <ValidationProvider
          name="user_name"
          class="single_line"
          rules="required"
          v-slot="{ errors }"
        >
          <span class="icon">
            <font-awesome-icon :icon="['fas', 'user-tie']" class="single_icon" />
            <input v-model="user_name" type="text" placeholder="Your Name" />
          </span>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="user_email"
          class="single_line"
          rules="required|email"
          v-slot="{ errors }"
        >
          <span class="icon">
            <font-awesome-icon :icon="['fas', 'envelope']" class="single_icon" />
            <input type="email" v-model="user_email" placeholder="ex@email.com" />
          </span>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="content" class="single_line" rules="required" v-slot="{ errors }">
          <textarea
            v-model="message"
            cols="30"
            rows="5"
            type="text"
            placeholder="I want to discuss"
          />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <button
          type="submit"
          :disabled="invalid"
          style="
            width: 100%;
            padding: 5px 5px;
            text-align: center;
          "
        >Submit</button>
        <p style="margin-top: 10px; color :#F5EFF5">{{ msg }}</p>
      </form>
    </ValidationObserver>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import emailjs from '../plugins/email'

export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  data() {
    return {
      user_name: null,
      user_email: null,
      message: null,
      msg: null,
    }
  },

  methods: {
    onSubmit() {
      emailjs.init('user_zKqCAxkGHfhfzedVsIGUx')
      emailjs
        .send('contact_service', 'contact_form', {
          name: this.user_name,
          message: this.message,
          user_name: this.user_name,
          user_email: this.user_email,
        })
        .then(
          (result) => {
            console.log(result),
              console.log('SUCCESS!', result.text, result.status)
            this.msg = " I got your mail. I'll catch you soon."
          },
          (error) => {
            console.log('FAILED...', error.text)
          }
        )
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints";

section {
  display: flex;
  margin: 4vh 2vh;
  padding: 10px;
  flex-direction: column;
  @media screen and (max-width: map-get($breakpoints,mobile,tablet)) {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 2vh 2vh;
    padding: 10px;
    justify-content: center;
    @media screen and (max-width: map-get($breakpoints,mobile,tablet)) {
      margin: 4vh 0 0 0;
      padding: 0;
    }
    .single_line {
      padding: 10px 5px;
      margin: 2vh 1vh;
      @media screen and (max-width: map-get($breakpoints,mobile)) {
        font-size: 16px;
        padding: 10px 0 10px 0;

        width: 100%;
        margin: 2vh 0;
      }
      input {
        width: 90%;
        height: 100%;
        padding: 10px 10px;
        @media screen and (max-width: map-get($breakpoints,mobile)) {
          height: 5vh;
          padding: 01vh;
        }
      }
      textarea {
        width: 90%;
        padding: 10px 10px;
        @media screen and (max-width: map-get($breakpoints,mobile)) {
          width: 100%;
          padding: 1vh;
        }
      }
    }
  }
}
</style>

<!-- style="
            width: 100%;
            margin: 2vh 0;
            padding: 5px 5px;
            background-color: #0ae569;
            color: #045929;
            text-align: center;
          " -->
