<template>
  <div class="skill_table">
    <h2>My tech stack</h2>
    <table align="center">
      <tr v-for="skill in skills" :key="skill.title">
        <td>{{ skill.title }}</td>
        <td>{{ skill.set }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MySkillComponenet',
  //* use return *//
  data() {
    return {
      skills: [
        {
          title: 'Frontend',
          set: 'HTML5 , CSS/SASS/SCSS , BootStrap , JavaScript , VueJS , Nuxt.js',
        },
        {
          title: 'Backend',
          set: 'Node.js , Express , JavaScript , REST API ',
        },
        {
          title: 'Database',
          set: 'MangoDB , MySQL ',
        },
        {
          title: 'Additional Skills',
          set: ' Google Ads , Facebook Ads  , Search Engine Optimisation, wordpress elementor ',
        },
        {
          title: 'Tools',
          set: 'Git , Postman , VS Code ',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints";

.skill_table {
  min-width: 100%;
  text-align: center;
  padding: 5px;
  @media screen and (max-width: map-get($breakpoints,mobile)) {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  table {
    margin: 0 auto;
    padding: 10px;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      padding: 0;
      font-size: 16px;
    }
    tr {
      border-top: 1px solid $color-second_text;
      // padding : 5px ,2.5px;
      td {
        border-top: 1px solid $color-second_text;
        padding: 10px;
        @media screen and (max-width: map-get($breakpoints,mobile)) {
          padding: 10px;
        }
      }
    }
  }
}
</style>
