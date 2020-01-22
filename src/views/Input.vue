<template>
    <div class="container">

        <div style="height: 15vh"></div>

        <AnonymousMessage message="Let's begin! Make me a song" />

        <div class="type">
            <p v-on:click="type='lyrics'" v-bind:class="{'active': type === 'lyrics'}">Lyrics</p>
            <p v-on:click="type='humming'" v-bind:class="{'active': type === 'humming'}">Humming</p>
            <p v-on:click="type='piece'" v-bind:class="{'active': type === 'piece'}">Piece</p>
        </div>

        <div class="data">

            <section v-if="type === 'lyrics'" class="lyrics-input-container">
                <textarea-autosize
                        class="lyrics-input"
                        placeholder="La la la laaaaaaa..."
                        ref="myTextarea"
                        :min-height="20"
                        :max-height="350"
                />

                <section class="search-button-hitbox">
                    <font-awesome-icon icon="search" class="search-button"/>
                </section>
            </section>

            <section v-if="['humming', 'piece'].includes(type)" class="sound-input-container">
                <input type="file">
                <font-awesome-icon icon="microphone" size="lg"/>
            </section>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import TextareaAutosize from 'vue-textarea-autosize'
    import AnonymousMessage from "./components/AnonymousMessage";

    Vue.use(TextareaAutosize);

    export default {
        name: "Home",
        components: {AnonymousMessage},
        data: () => {
            return {
                type: "lyrics"
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "../assets/theme"

    .container
        margin: auto
        max-width: 500px
        font-family: 'Lato', sans-serif

        .data
            $inactive-color: darken($font-on-background, 50%)

            .sound-input-container

                input[type=file]
                    color: $background

                    &::before
                        content: 'Select some files'
                        display: inline-block
                        background: linear-gradient(top, #f9f9f9, #e3e3e3)
                        border: 1px solid #999
                        border-radius: 3px
                        padding: 5px 8px
                        outline: none
                        white-space: nowrap
                        -webkit-user-select: none
                        cursor: pointer
                        text-shadow: 1px 1px #fff
                        font-weight: 700
                        font-size: 10pt

                    &::-webkit-file-upload-button
                        visibility: hidden

            .lyrics-input-container
                display: flex
                position: relative
                justify-content: center

                .lyrics-input
                    width: 100%
                    height: 25px
                    background-color: transparent
                    border: 0
                    border-bottom: 1px solid $inactive-color
                    color: $inactive-color
                    outline: none
                    transition: 0.25s
                    margin-right: 29px

                    &:focus
                        border-bottom: 1px solid $font-on-background
                        color: darken($font-on-background, 40%)


                .search-button-hitbox
                    position: absolute
                    right: 0
                    bottom: 0
                    width: 25px
                    height: 35px
                    cursor: pointer

                    .search-button
                        position: absolute
                        right: 0
                        bottom: 3px
                        color: $inactive-color

                        &:focus, &:hover
                            color: $font-on-background

        .type
            margin-top: 10vh
            margin-bottom: 20px
            display: flex
            justify-content: space-evenly

            $inactive-color: darken($font-on-background, 35%)

            .active
                color: $font-on-background

            p
                display: inline-block
                margin-right: 20px
                margin-left: 20px
                cursor: pointer
                font-size: 1.2rem
                color: $inactive-color

                &:focus
                    outline: none!important

                &:first-child
                    margin-left: 0

                &:last-child
                    margin-right: 0
</style>