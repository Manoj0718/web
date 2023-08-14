<template>
  <div id="page_layout">
    <text-Side></text-Side>
  </div>
</template>
<script>
import { createClient } from '../plugins/Contentful'
const client = createClient()
export default {
  //! SEO -Local //
  head() {
    return {
      title: 'Freelance web developer || Vue.js Developer',
      meta: [
        {
          hid: 'discription',
          name: 'discription',
          content: 'cetail',
        },
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'Freelancer , webdveloper ',
        },
      ],
    }
  },
  name: 'ProtfolioComponent',
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
        //console.log("here : ", blogs);
        //console.log("here item : ", blogs.items);
        return {
          blogs: blogs.items,
        }
      })
      .catch(console.error)
  },
}
</script>

<style lang="scss" scoped>
#page_layout {
  // height: 100%;
  // #app is flex, so nav bar and #page_layout need to fill the page //
  flex-grow: 1;


  // margin :5vh auto;
}
</style>
