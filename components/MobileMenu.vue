<template>
    <div class="mobile_menu">
        <transition name="mobile-nav">
            <div class="dropdown_nav-div">
                <div class="iconBox">
                    <font-awesome-icon :icon="['fas', 'window-close']" @click="closeMobileMenu" />
                </div>
                <ul class="dropdown_nav">
                    <li class="dropdown_nav-li">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="dropdown_nav-li">
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li class="dropdown_nav-li">
                        <NuxtLink to="/Protfolio">Portfolio & Skills</NuxtLink>
                    </li>
                    <li class="dropdown_nav-li">
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
                <div class="verticalLine"></div>
                <SocialMediaContact></SocialMediaContact>
                <p class="text">#shareing_is_careing</p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    methods: {
        closeMobileMenu() {
            this.$emit('closeMobileMenu');
        },
    }

}
</script>

<style lang="scss" scoped>
@import '../assests/variables.scss';
@import '../assests/mixins.scss';
@import '../assests/_breakpoints.scss';



.mobile-nav-enter-active .mobile-nav-leave-active {
    transition: 10s ease all;


}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);

}

.dropdown_nav-div {
    @media screen and (max-width: map-get($breakpoints, mobile)) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        max-width: 80vw;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(2, 2, 52, 0.1);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(80px);
        -webkit-backdrop-filter: blur(10.9px);
        border: 1.5px solid rgb(0, 255, 55);
        z-index: 1;

        .dropdown_nav {
            list-style: none;
            margin-bottom: 2.5vh;

            .dropdown_nav-li {
                margin: 4vh;
                padding: 0.25vh;
                text-decoration: none;

                a {
                    text-decoration: none;
                    color: $nav_text_color;
                    font-weight: 900;
                    font-size: 20px;
                }
            }
        }
    }

    .iconBox {
        color: #ffffff;
        margin-left: 60vw;
        cursor: pointer;
        font-size: 22px;
    }

    .verticalLine {
        width: 50vw;
        background-color: #2BFF00;
        height: .5vh;

    }

    .text {
        color: #2BFF00;
        font-size: 16px;
    }

}
</style>