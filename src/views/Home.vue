<template>
    <div class="container">
        <AnonymousMessage :messages="['Hello!', 'Do you wanna play ?)']" />

        <section class="button-container">
            <button v-on:click="begin">Do I have a choice...</button>
        </section>

    </div>
</template>

<script>
    import AnonymousMessage from "./components/AnonymousMessage";

    import { mapMutations } from 'vuex';
    import modules from "../store/all.modules.name"
    import mutations from "../store/all.mutations.type"

    export default {
        name: "Home",

        components: {AnonymousMessage},

        methods: {
            ...mapMutations(modules.game, [
                mutations.game.START
            ]),

            begin() {
                this.start();
                this.$router.push({ name: 'input'});
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import "../assets/button"

    .container
        max-width: 300px
        margin: auto

        .button-container
            display: flex
            justify-content: center
            font-family: 'Lato', sans-serif

            button
                margin-top: 25px
                @include button
</style>