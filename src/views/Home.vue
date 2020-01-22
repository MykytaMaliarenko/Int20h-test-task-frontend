<template>
    <div class="container">
        <div data-v-8d97ae00="" style="height: 35vh;"></div>
        <AnonymousMessage message="Do you wanna play ?)" />

        <section class="button-container">
            <button v-on:click="begin">Yes</button>
        </section>

    </div>
</template>

<script>
    import AnonymousMessage from "./components/AnonymousMessage";

    export default {
        name: "Home",

        components: {AnonymousMessage},

        methods: {
            begin() {
                this.$router.push({ name: 'input'})
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../assets/button"

    .container
        margin: auto
        max-width: 200px

    .button-container
        display: flex
        justify-content: center
        font-family: 'Lato', sans-serif

        button
           @include button


</style>