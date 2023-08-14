<template>
    <header :class="{ 'scrolled-nav': isScrolled }">
        <nav class="bar">
            <div class="logo">
                <nuxt-link to="/">
                    <nuxt-img class="logo_image" src="/Website_logo.png"
                        alt="freelancer_vue_devloper_Bilzen_wed_development" />
                </nuxt-link>
            </div>
            <div class="iconBox">
                <font-awesome-icon :icon="['fas', 'bars']" @click="showMobileMenu" />
            </div>
            <div class="menu">
                <NavbarLinks></NavbarLinks>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        showMobileMenu() {
            console.log("click");
            this.$emit('showMobileMenu');
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 100;
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assests/mixins.scss';
@import '../assests/_breakpoints.scss';
@import '../assests/variables.scss';

header {
    position: fixed;
    z-index: 99;
    width: 100%;
    transition: 0.5s ease all;
    padding: 0 80px;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
        width: 100%;
        margin: auto;
        padding: 0;
    }

    .bar {
        position: relative;
        width: 95%;
        display: flex;
        flex-direction: raw;
        padding: 0;
        justify-content: space-between;

        @media screen and (max-width: map-get($breakpoints, mobile)) {
            display: flex;
            margin: 0 auto;
            padding: 0;
            width: 90%;
        }

        .logo {
            // color: $color-second_text;
            align-self: flex-start;

            @media screen and (max-width: map-get($breakpoints, mobile)) {
                margin: 0;
                padding: 0;
            }

            .logo_image {
                width: 83px;
                /* Set the default width for all screens */
                aspect-ratio: 1/1; // aspect-ratio: attr(width) / attr(height);

                /* Aspect ratio of 1:1 (83px width, 83px height) */
                @media screen and (max-width: map-get($breakpoints, mobile)) {
                    width: 50px;
                    aspect-ratio: 1/1;
                }
            }

        }
    }

    .menu {
        padding: 10px;
        margin: auto;

        @media screen and (max-width:map-get($breakpoints, mobile)) {
            display: none;
        }
    }

    .iconBox {
        display: none;
        cursor: pointer;

        @media screen and (max-width: map-get($breakpoints, mobile)) {
            cursor: pointer;
            font-size: 30px;
            color: #ffd700;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* Center items horizontally */
        }
    }
}

.scrolled-nav {
    background-color: #020234;
    border: 1px solid white;
    margin-top: 1vh;
    border-radius: 50px;
@media screen and (max-width:map-get($breakpoints,mobile)){
    border : none;
    
}

    /* Change to the desired scrolled color */
}
</style>
