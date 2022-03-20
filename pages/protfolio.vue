<template>
  <div id="page_protofolio">
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
        <h2>what i learned</h2>
        <br />
        <ul v-for="lesson in blog.fields.lessons" :key="lesson" style="list-style-type: none">
          <li>{{ lesson }}</li>
        </ul>
        <br />

        <div class="used_tech_div">
          <h3>Tech stack used in this project</h3>
          <UsedTechComponent :post="blog"></UsedTechComponent>
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
</template>

<script>
import { createClient } from '../plugins/Contentful.js'
const client = createClient()

export default {
  data() {
    return {
      blogs: [],
    }
  },

  asyncData({ env }) {
    return Promise.all([
      // client.getEntries({
      //    'content_type': 'blog',
      //       order: '-sys.createdAt'
      // }),
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
    ])
      .then(([blogs]) => {
        console.log('full items  : ', blogs.items[1])
        console.log('item01 : ', blogs.items[0].fields.img.fields.file.url)
        //console.log("itemsno image : " , blogs.items[0].fields.image.fields.file.fileName);
        //console.log("lessons : ", blogs.items[0].fields);
        console.log('single item : ', blogs.items[0])

        return {
          blogs: blogs.items,
        }
      })
      .catch(console.error)
  },
}
</script>

<style lang="scss" scoped>
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

#page_protofolio {
  @include page_margins;
  height: 100%;
  @media screen and (max-width: map-get($breakpoints,mobile)) {
    @include mobile_page_margin;
  }
  #container {
    //width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    @media screen and(max-width: map-get($breakpoints,mobile)) {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      @include mobile_page_container;
    }
    @media screen and(max-width: map-get($breakpoints,tablet)) {
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
      border: 0.1px solid rgb(43, 255, 0);
      .picture {
        margin: 5vh 0;
        img {
          height: 50%;
          width: 90%;
          @media screen and (max-width: map-get($breakpoints,mobile)) {
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
        @media screen and (max-width: map-get($breakpoints,mobile)) {
          margin: 2.5vh;
          display: flex;
          flex-direction: column;
        }

        .cybr-btn {
          padding: 2.5vh;
          margin: 2vh;
          @include button_cybre-btn;
          @media screen and (max-width: map-get($breakpoints,mobile)) {
            padding: 1vh;
          }
        }

        .cybr-btn:hover {
          background: $line_color;
        }
      }
      @media screen and (max-width: map-get($breakpoints,mobile)) {
        text-align: center;
        width: 100%;
        @include section_devider;
      }
      @media screen and (max-width: map-get($breakpoints,tablet)) {
        text-align: center;
        width: 100%;
        @include section_devider;
      }
    }
  }
}
</style>
