<template>
    <div class="scroll_site">
        <h2>{{ blog.name }}</h2>
        <br />
        <p>
            text goes here
            <br />
            <br />
        </p>
        <h2>what i learned</h2>
        <br />
        <br />
        <p>
            text goes here
            <br />
            <br />
        </p>
        <div class="used_tech_div">
            <h3>Tech stack used in this project</h3>
            <UsedTechComponent></UsedTechComponent>
        </div>

        <!-- //* button *// -->
        <div class="buttons_protofolio">
            <button class="cybr-btn" href="#">
                GitHub
                <span aria-hidden class="cybr-btn__glitch">GitHub_</span>
            </button>
            <button class="cybr-btn" href="#">
                Watch It Live
                <span aria-hidden class="cybr-btn__glitch">Watch It Live_</span>
            </button>
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

    async fetch() {
        this.blogs = await fetch(client.getContentType('projects'))
        console.log(contentType)
    },
    // methods: {
    // async fetch({env}){
    //   return Promise.all([
    //      client.getEntries({
    //           content_type: env.CTF_BLOG_POST_TYPE_ID,
    //           order: '-sys.createdAt',
    //         })
    //   ]).then(([blogs])=>{
    //     console.log("here : " , blogs);
    //     console.log("here item : " , blogs.items);
    //     return {
    //       blogs:blogs.items,
    //     };
    //   }).catch(console.error);
    // // }

    // }

    // computed: {
    //       posts() {
    //          console.log("protofolio component", this.$store.state.posts.posts);
    //           return this.$store.state.posts.posts;
    //       }
    //   },
    //   methods: {
    //      async fetch({ store, params }) {
    //       await store.dispatch('posts/getPosts', params.slug)
    //   }
    //   }

    //   mounted() {
    //   console.log('count', this.$store.getters.getCount)
    //    alert('getCount: ' + this.$store.getters.getCount)
    // }
}
</script>

<style lang="scss">
@import "../assests/variables.scss";
@import "../assests/mixins.scss";
@import "../assests/breakpoints.scss";

#protofoilio {
    height: 100%;
    border: $border;
    width: 100%;
    display: flex;
    font-size: 16px;
    flex-wrap: wrap;
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
        border: $border;
        flex: 1;
        text-align: center;
        --primary: hsl(
            var(--primary-hue),
            85%,
            calc(var(--primary-lightness, 50) * 1%)
        );
        --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
        --primary-hue: 120;
        --primary-lightness: 50;
        --color: hsl(0, 0%, 100%);
        --font-size: 1rem;
        --shadow-primary-hue: 180;
        --label-size: 9px;
        --shadow-secondary-hue: 60;
        --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
        .used_tech_div {
            margin: 10px;
        }
        .buttons_protofolio {
            margin: 10px;
            @media screen and (max-width: map-get($breakpoints,mobile)) {
                margin: 2.5vh 0;
                display: block;
            }

            .cybr-btn {
                @include button_cybre-btn;
                @media screen and (max-width: map-get($breakpoints,mobile)) {
                    margin: 2.5vh 0;
                }
            }

            .cybr-btn:hover {
                --primary: hsl(
                    var(--primary-hue),
                    85%,
                    calc(var(--primary-lightness, 50) * 0.8%)
                );
            }
            .cybr-btn:active {
                @include cybr_btn_hover;
            }

            .cybr-btn:after,
            .cybr-btn:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                clip-path: var(--clip);
                z-index: -1;
            }

            .cybr-btn:before {
                background: var(--shadow-primary);
                transform: translate(var(--border), 0);
            }

            .cybr-btn:after {
                background: var(--primary);
            }

            .cybr-btn__glitch {
                position: absolute;
                top: calc(var(--border) * -1);
                left: calc(var(--border) * -1);
                right: calc(var(--border) * -1);
                bottom: calc(var(--border) * -1);
                background: var(--shadow-primary);
                text-shadow: 2px 2px var(--shadow-primary),
                    -2px -2px var(--shadow-secondary);
                clip-path: var(--clip);
                animation: glitch 2s infinite;
                display: none;
            }

            .cybr-btn:hover .cybr-btn__glitch {
                display: block;
            }

            .cybr-btn__glitch:before {
                content: "";
                position: absolute;
                top: calc(var(--border) * 1);
                right: calc(var(--border) * 1);
                bottom: calc(var(--border) * 1);
                left: calc(var(--border) * 1);
                clip-path: var(--clip);
                background: var(--primary);
                z-index: -1;
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
</style>
