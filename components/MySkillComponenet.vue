<template>
  <div class="skill_table">
    <h2 class="topic">My Tech Stack</h2>
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
          set: 'MangoDB , MySQL , SQLite',
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

  @media screen and (max-width: map-get($breakpoints, mobile)) {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .topic {
    padding: 2vh;
    margin : 3vh;
  }

  table {
    margin: 0 auto;
    padding: 10px;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
      padding: 0;
      font-size: 16px;
    }

    tr {
      // border: 1px solid $color-second_text;
      // border-color: $color-second_text;
      // border-style: solid;
      // border-width: 1px 1px 1px 0;
      border-right: 1px solid $color-second_text;

      td {
        border-color: $color-second_text;
        border-style: solid;
        border-width: 0 1px 1px 0;
        padding: 20px;
        // border-right: 1px solid $color-second_text;

        @media screen and (max-width: map-get($breakpoints, mobile)) {
          padding: 10px;
        }
      }
    }
  }
}
</style>
