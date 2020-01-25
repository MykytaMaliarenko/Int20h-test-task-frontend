<template>
    <div class="container">

        <AnonymousMessage :messages="['Let\'s begin! Make me a song']" />

        <div class="type">
            <p v-on:click="type='lyrics'" v-bind:class="{'active': type === 'lyrics'}">Lyrics</p>
            <p v-on:click="type='humming'" v-bind:class="{'active': type === 'humming'}">Humming</p>
        </div>

        <div class="data">

            <section v-if="type === 'lyrics'" class="lyrics-input-container">
                <textarea-autosize
                        class="lyrics-input"
                        placeholder="La la la laaaaaaa..."
                        ref="myTextarea"
                        :min-height="20"
                        :max-height="350"
                        v-model="lyrics"
                />

                <section class="search-button-hitbox" v-on:click="searchByLyrics">
                    <font-awesome-icon icon="search" class="search-button"/>
                </section>
            </section>

            <section v-if="type === 'humming'" class="sound-input-container">
                <input type="file" ref="file" v-on:change="searchByHumming()" v-if="!isRecording">
                <canvas v-if="isRecording"></canvas>

                <section class="record-button-hitbox" v-on:click="micClick">
                    <font-awesome-icon :icon="micIcon" size="lg" class="record-button"/>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import TextareaAutosize from 'vue-textarea-autosize'
    import AnonymousMessage from "./components/AnonymousMessage";

    Vue.use(TextareaAutosize);

    import { mapActions } from 'vuex';
    import modules from "../store/all.modules.name"
    import actions from "../store/all.actions.type"

    export default {
        name: "Input",

        components: {AnonymousMessage},

        data: () => {
            return {
                type: "lyrics",
                lyrics: "",
                isRecording: false,

                rec: null,
                audioChunks: [],
            }
        },

        methods: {
            ...mapActions(modules.game, [
                actions.game.MAKE_GUESS
            ]),

            micClick(){
                if (this.isRecording) {
                    this.stopRecord();
                } else {
                    this.beginRecord();
                }
            },

            beginRecord() {
                this.isRecording = true;
                navigator.mediaDevices.getUserMedia({audio:true})
                    .then(stream => {
                        this.rec = new MediaRecorder(stream);
                        this.rec.ondataavailable = e => {
                            this.audioChunks.push(e.data);
                            if (this.rec.state == "inactive"){
                                let blob = new Blob(this.audioChunks, {type:'audio/mpeg-3'});
                                this.makeGuess({type: this.type, data: blob});
                                this.$router.push({ name: 'guessPreview'});
                            }
                        };

                        this.rec.start();
                    })
                    .catch((e) => {
                        console.error({e});
                    })
            },

            stopRecord() {
                this.isRecording = false;
                this.rec.stop();
            },

            searchByLyrics() {
                if (this.lyrics.length !== 0) {
                    this.makeGuess({type: this.type, data: this.lyrics});
                    this.$router.push({ name: 'guessPreview'});
                }
            },

            searchByHumming(){
                let file = this.$refs.file.files[0];
                this.makeGuess({type: this.type, data: file});
                this.$router.push({ name: 'guessPreview'});
            }
        },

        computed: {
            micIcon: function () {
                return this.isRecording ? 'microphone' : 'microphone-slash'
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "../assets/theme"

    .container
        margin: auto
        max-width: 300px

        .data
            $inactive-color: darken($font-on-background, 50%)

            .sound-input-container
                display: flex
                justify-content: center

                canvas
                    width: 230px
                    height: 30px

                .record-button-hitbox
                    position: relative
                    width: 25px
                    height: 30px
                    cursor: pointer

                    .record-button
                        position: absolute
                        right: 0
                        bottom: 3px
                        color: $inactive-color

                        &:focus, &:hover
                            color: $font-on-background

                input[type=file]
                    width: 230px
                    height: 30px
                    color: $background

                    &::before
                        content: 'Select some files'
                        display: inline-block
                        background: linear-gradient(top, $font-on-background, $font-on-background)
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
            margin-top: 1rem
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