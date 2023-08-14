<template>
    <nav class="navigation">
        <ul class="menu">
            <li v-for="menuItem in menuItems" :key="menuItem.to">
                <NuxtLink :to="menuItem.to" :exact="true" class="menu-link" :aria-label="menuItem.label"
                    active-class="active-link">
                    <span class="menu-text">
                        <span>{</span>{{ menuItem.label }}<span>}</span>
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/Protfolio', label: 'Portfolio & Skills' },
                { to: '/contact', label: 'Contact' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../assests/variables.scss';
@import '../assests/mixins.scss';
@import '../assests/_breakpoints.scss';

.navigation {
    ul.menu {
        display: flex;
        flex-direction: row;
        text-align: center;
        gap: 1em;
        list-style: none;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    .menu-link {
        color: white;
        margin: 0 0.5rem;
        padding: 0.25rem;
        text-decoration: none;
    }

    .menu-text span {
        visibility: hidden;

    }

    .menu-link:hover .menu-text span {
        visibility: visible;
        color: $color-second_text;
    }

    .menu-link:hover {
        color: $color-second_text;


        .menu-link.nuxt-link-exact-active-link {
            color: $color-second_text;

        }
    }
}
</style>
