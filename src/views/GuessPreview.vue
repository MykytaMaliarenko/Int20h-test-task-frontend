<template>
    <div class="container" v-if="!isWaitingForGuessResults">
        <AnonymousMessage :messages="[`Round: ${round}/5`,'Sooooo.....', 'Am I right?']"/>

        <div class="card">

            <section class="top">
                <img :src="lastRoundResult.image"/>

                <section class="info">

                    <div class="title">
                        <span>{{lastRoundResult.name}}</span>
                    </div>

                    <div class="subtitle">
                        <span>{{lastRoundResult.album}}</span>
                        •
                        <span>{{lastRoundResult.author}}</span>
                    </div>

                    <div class="add-info">
                        <span>#{{lastRoundResult.rank}}</span>
                        •
                        <span>{{lastRoundResult.duration | duration}}</span>
                    </div>
                </section>

            </section>

            <section class="player">
                <div id="dz-root"></div>
                <div id="player" style="width:100%;" align="center"></div>
            </section>

            <section class="bottom">
                <button class="no" v-on:click="userResponse(false)">No</button>
                <button class="yes" v-on:click="userResponse(true)">Yes</button>
            </section>
        </div>
    </div>

    <div class="container" v-else>
        <moon-loader color="#BB86FC" :loading="isWaitingForGuessResults" :size="150" sizeUnit="px"></moon-loader>
    </div>
</template>

<script>
    import AnonymousMessage from "./components/AnonymousMessage";
    import { MoonLoader } from '@saeris/vue-spinners'

    import { mapGetters, mapMutations } from 'vuex';
    import modules from "../store/all.modules.name"
    import mutations from "../store/all.mutations.type"

    export default {
        name: "Result",

        components: {AnonymousMessage, MoonLoader},

        methods: {
            ...mapMutations(modules.game, [
                mutations.game.IS_GUESSED,
                mutations.game.END,
            ]),

            userResponse(response) {
                this.isGuessed(response);

                if (this.round >= 5) {
                    this.end();
                    this.$router.push({name: 'end'});
                } else {
                    this.$router.push({name: 'result'});
                }
            }
        },

        computed: {
            ...mapGetters(modules.game, [
                "lastRoundResult",
                "isWaitingForGuessResults",
                "round"
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

        watch: {
            isWaitingForGuessResults: function (val) {
               if (!val) {
                   if (this.lastRoundResult && this.lastRoundResult.notFound) {
                       if (this.round >= 5) {
                           this.end();
                           this.$router.push({name: 'end'});
                       } else {
                           this.$router.push({name: 'result'});
                       }
                       return
                   }

                   setTimeout(() => {
                       let cont = document.getElementsByClassName('player')[0];
                       let width = (cont.innerWidth) >= 500 ? 500 : cont.innerWidth;
                       DZ.init({
                           appId  : '391564',
                           channelUrl : 'http://developers.deezer.com/examples/channel.php',
                           player : {
                               container : 'player',
                               cover : false,
                               playlist : false,
                               width : width,
                               height : 92,
                               onload: () => {
                                   DZ.player.playTracks([this.lastRoundResult.song_id], false);
                               }
                           }
                       });
                   }, 200);
               }
            },
        },
    }
</script>

<style scoped lang="sass">
    @import "../assets/theme"
    @import "../assets/button"

    .container
        margin: auto
        max-width: 500px
        font-family: 'Lato', sans-serif

        .card
            margin-top: 2rem

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

            .player
                margin-top: 1rem
                display: flex
                justify-content: center

            .bottom
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