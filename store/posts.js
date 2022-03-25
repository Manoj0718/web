import client from '../plugins/Contentful'

export const state = () => ({
  posts: [],
})

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },

  async getPosts({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
    ])
      .then(([blogs]) => {
        // console.log("here : " , blogs);

        return {
          blogs: blogs.items,
        }
      })
      .catch(console.error)
  },

  // async  getPosts({commit}){
  //   const responce = await client.getEntries({
  //       content_type: env.CTF_BLOG_POST_TYPE_ID,
  //       order: '-sys.createdAt',
  //   })
  //   if(responce.items.length > 0){
  //       commit('setPosts', response);
  //       console.log("responce" , response.items);
  //   }
  //   }
}

export const actions = {}

// export const state = () => ({
//     count: 500
//   });

//   export const getters = {
//     getCount: state => state.count
//   };
