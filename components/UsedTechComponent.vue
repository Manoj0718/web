<template>
    <div id="UsedTechComponent">
        <div class="conatiner" v-for="text in post.fields.tech" :key="text">
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsedTechComponent',
    props: ["post"]
}
</script>

<style lang="scss">
@import "../assests/variables.scss";
@import "../assests/mixins.scss";

#UsedTechComponent {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 15px;

    .conatiner {
        border: $border;
        padding: 10px;
        margin: 10px;
        flex-grow: 1;
    }
}
</style>
