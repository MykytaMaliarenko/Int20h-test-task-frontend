<template>
    <section class="container">
        <AnonymousMessage :messages="currentMessages"/>

        <section class="choice">
            <button class="no" v-on:click="end">No, maybe next time)</button>
            <button class="yes" v-on:click="again">Ok</button>
        </section>
    </section>
</template>

<script>
    import AnonymousMessage from "./components/AnonymousMessage";

    import { mapGetters, mapMutations } from 'vuex';
    import modules from "../store/all.modules.name"
    import mutations from "../store/all.mutations.type"

    const WIN_MESSAGES = ['Winner winner chicken dinner!', 'xd', 'one more round ?)'];
    const LOOSE_MESSAGES = ['it\'s just not my day', '(((((', 'one more round?'];
    const NOT_FOUND = ['I couldn\'t find smth', '(((((', 'one more round?'];

    export default {
        name: "Result",

        components: {AnonymousMessage},

        data: () => {
            return {
                messages: {
                    WIN_MESSAGES,
                    LOOSE_MESSAGES,
                    NOT_FOUND
                },

                currentMessages: [],
            }
        },

        methods: {
            ...mapMutations(modules.game, {
                storeEnd: mutations.game.END,
                nextRound: mutations.game.NEXT_ROUND,
            }),

            again() {
                this.nextRound();
                this.$router.push({ name: 'input'});
            },

            end() {
                this.storeEnd();
                this.$router.push({ name: 'end'})
            },
        },

        computed: {
            ...mapGetters(modules.game, [
                "round",
                "lastRoundResult"
            ]),
        },

        mounted() {
            if (this.lastRoundResult.notFound) {
                this.currentMessages = this.messages.NOT_FOUND
            } else if (!this.lastRoundResult.isGuessed) {
                this.currentMessages = this.messages.LOOSE_MESSAGES
            } else {
                this.currentMessages = this.messages.WIN_MESSAGES
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../assets/button"

    .container
        margin: auto
        max-width: 400px
        width: 100%

        .choice
            display: flex
            margin-top: 3rem
            justify-content: space-around

            .yes
                border: 1px solid #1B5E20

                &:hover
                    background-color: #1B5E20

            .no
                border: 1px solid #b71c1c

                &:hover
                    background-color: #b71c1c

            button
                @include button
</style>