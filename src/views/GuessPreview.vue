<template>
    <div class="container">
        <AnonymousMessage :messages="['Sooooo.....', 'Am I right?']"/>

        <div class="card">

            <section class="top">
                <img  src="https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/150x150-000000-80-0-0.jpg"/>

                <section class="info">

                    <div class="title">
                        <span>In to Deep</span>
                    </div>

                    <div class="subtitle">
                        <span>Music To Be Murdered By</span>
                        •
                        <span>Eminem</span>
                    </div>

                    <div class="add-info">
                        <span>#47810</span>
                        •
                        <span>2001-03-07</span>
                        •
                        <span>03:02</span>
                    </div>
                </section>

            </section>

            <section class="player">
                <div id="dz-root"></div>
                <div id="player" style="width:100%;" align="center"></div>
            </section>

            <section class="bottom">
                <button class="no">No</button>
                <button class="yes">Yes</button>
            </section>
        </div>
    </div>
</template>

<script>
    import AnonymousMessage from "./components/AnonymousMessage";

    export default {
        name: "Result",

        components: {AnonymousMessage},

        mounted() {
            let cont = document.getElementsByClassName('player')[0];
            console.log({width: cont.innerWidth});
            let width = (cont.innerWidth) >= 500 ? 500 : cont.innerWidth;
            DZ.init({
                appId  : '8',
                channelUrl : 'http://developers.deezer.com/examples/channel.php',
                player : {
                    container : 'player',
                    cover : true,
                    playlist : true,
                    width : width,
                    height : 92,
                }
            });
        }
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