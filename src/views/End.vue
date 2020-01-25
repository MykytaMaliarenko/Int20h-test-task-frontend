<template>
    <div class="container">
        <AnonymousMessage :messages="messages" />

        <div class="cards">

            <div class="card" v-for="data in roundResults">
                <img :src="data.image"/>

                <section class="info">

                    <div class="title">
                        <span>{{data.name}}</span>
                    </div>

                    <div class="subtitle">
                        <span>{{data.album}}</span>
                        •
                        <span>{{data.author}}</span>
                    </div>

                    <div class="add-info">
                        <span>#{{data.rank}}</span>
                        •
                        <span>{{data.duration | duration}}</span>
                    </div>
                </section>
            </div>

        </div>
    </div>
</template>

<script>
    import AnonymousMessage from "./components/AnonymousMessage";

    import { mapGetters, mapMutations } from 'vuex';
    import modules from "../store/all.modules.name"
    import mutations from "../store/all.mutations.type"

    const WIN_MESSAGES = ['sorry', 'but that was too easy mate)',];
    const DRAW_MESSAGES = ['it\'s a draw', 'O_O'];
    const LOOSE_MESSAGES = ['you won', 'good game!'];

    export default {
        name: "End",

        components: {AnonymousMessage},

        data: () => {
            return {
                messages: [],
            }
        },

        computed: {
            ...mapGetters(modules.game, [
                "roundResults",
            ]),
        },

        filters: {
            duration: function (value) {
                let minutes = Math.floor(Number(value) / 60),
                    seconds = value - minutes * 60;

                minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
                seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

                return `${minutes}:${seconds}`
            }
        },

        mounted() {
            let wonRounds = this.roundResults.filter((item) => item.isGuessed).length;
            let lostRounds = this.roundResults.filter((item) => 'isGuessed' in item && !item.isGuessed).length;

            if (wonRounds > lostRounds) {
                this.messages = WIN_MESSAGES;
            } else if(wonRounds < lostRounds) {
                this.messages = LOOSE_MESSAGES;
            } else {
                this.messages = DRAW_MESSAGES;
            }

            this.messages.push(`Your score is: ${wonRounds}`);
        }
    }
</script>

<style lang="sass" scoped>
    @import "../assets/theme"
    @import "../assets/button"

    .container
        margin: auto
        max-width: 500px
        font-family: 'Lato', sans-serif

        .cards
            margin-top: 2rem

            .card
                margin-top: 1rem

                &:first-child
                    margin-top: 0

                .top
                display: flex
                width: 100%
                color: darken($font-on-background, 40%)

                .info
                    padding-left: 0.5rem

                    div
                        display: block
                        padding-top: 0.25rem
                        padding-bottom: 0.25rem

                        span
                            margin-right: 0.2rem
                            margin-left: 0.2rem

                            &:first-child
                                margin-left: 0

                            &:last-child
                                margin-right: 0

                    .title
                        font-size: 2rem
                        color: $font-on-background
</style>