<template>
  <div id="page_protofolio">
    <div class="skill">
      <LazyMySkillComponenet></LazyMySkillComponenet>
    </div>
    <h1 class="topic">Projects</h1>
    <div id="container">

      <div class="scroll_site" v-for="blog in blogs" :key="blog.fields.no">
        <h2>{{ blog.fields.title }}</h2>
        <div class="picture">
          <img :src="blog.fields.img.fields.file.url" loading="lazy" decoding="async" />
        </div>
        <p>
          {{ blog.fields.introText }}
          <br />
          <br />
        </p>

        <button @click="toggleReadMore(blog)" class="btn">
          <span v-if="!blog.readMore">Read More</span>
          <span v-else>Read Less</span>
        </button>

        <div v-if="blog.readMore">
          <h2>What I Learned</h2>
          <br />
          <ul v-for="lesson in blog.fields.lessons" :key="lesson" style="list-style-type: none">
            <li>{{ lesson }}</li>
          </ul>
          <br />

          <div class="used_tech_div">
            <h3>Tech stack used in this project</h3>
            <!-- //* adding lazy , for speed loading // -->
            <LazyUsedTechComponent :post="blog"></LazyUsedTechComponent>
          </div>

          <!-- //* button *// -->
          <div class="buttons_protofolio">
            <a class="cybr-btn" :href="blog.fields.github" target="_blank">GitHub</a>

            <template v-if="blog.fields.liveLink !== 'none'">
              <a class="cybr-btn" :href="blog.fields.liveLink" target="_blank">Watch It Live_</a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '../plugins/Contentful.js'
const client = createClient()

export default {
  data() {
    return {
      blogs: [],
      // readMore: false
    }
  },

  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
    ])
      .then(([blogs]) => {
        return {
          blogs: blogs.items.map(blog => ({ ...blog, readMore: false }))
        }
      })
      .catch(console.error)
  },
  methods: {
    toggleReadMore(blog) {
      console.log(blog);
      blog.readMore = !blog.readMore;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

#page_protofolio {
  @include page_margins;
  height: 100%;

  @media screen and (max-width: map-get($breakpoints, mobile)) {
    @include mobile_page_margin;
  }

  .skill {
    color: $nav_text_color;
  }

  .topic {
    color: white;
    margin: 5vh;
    text-align: center;
  }

  #container {
    //width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    margin-top: 5vh;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      @include mobile_page_container;
    }

    @media screen and (max-width: map-get($breakpoints, tablet)) {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      @include mobile_page_container;
    }



    h2 {
      font-size: 16px;
    }

    .scroll_site {
      @include page_container_content_columns;
      color: $nav_text_color;
      min-width: 40vw;
      flex: 1;
      height: 100%;
      text-align: center;
      border: 0.1px solid rgba(43, 255, 0, 0.833);

      .picture {
        margin: 5vh 0;

        img {
          height: 50%;
          width: 90%;

          @media screen and (max-width: map-get($breakpoints, mobile)) {
            height: 100%;
            width: 100%;
          }
        }
      }

      .used_tech_div {
        margin: 10px;
      }

      .buttons_protofolio {
        margin: 10px;

        @media screen and (max-width: map-get($breakpoints, mobile)) {
          margin: 2.5vh;
          display: flex;
          flex-direction: column;
        }

        .cybr-btn {
          padding: 2.5vh;
          margin: 2vh;
          @include button_cybre-btn;

          @media screen and (max-width: map-get($breakpoints, mobile)) {
            padding: 1vh;
          }
        }

        .cybr-btn:hover {
          background: $line_color;
        }
      }

      .btn {
        @include button_cybre-btn;
        border: $border;
        margin: 10px;
        text-align: center;
        font-weight: bold;
        box-shadow: 1px 1px 10px $shadowColor;
        background-color: $line_color;

        &:hover {
          box-shadow: 1px 1px 10px $shadowColor;
          background-color: hwb(110 25% 25% / 0.311);
        }
      }

      @media screen and (max-width: map-get($breakpoints, mobile)) {
        text-align: center;
        width: 100%;
        @include section_devider;
      }

      @media screen and (max-width: map-get($breakpoints, tablet)) {
        text-align: center;
        width: 100%;
        @include section_devider;
      }
    }
  }
}
</style>
