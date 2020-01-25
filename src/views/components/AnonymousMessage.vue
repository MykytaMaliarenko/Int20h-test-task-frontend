<template>
    <section class="anonymous-message-container">
        <div class="image">
            <font-awesome-icon icon="question" size="lg"/>
        </div>

        <section class="messages">
            <div class="message" v-for="message in messages">
                {{message}}
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        name: "AnonymousMessage",

        props: {
            messages: {
                type: Array,
                required: true,
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import "../../assets/theme"

    .anonymous-message-container
        display: flex
        font-family: 'Lato', sans-serif

        .image
            display: flex
            align-items: flex-end

            svg
                font-size: 2rem

        .messages
            display: flex
            flex-direction: column
            align-items: flex-start

            .message
                display: inline-block
                border-radius: 20px
                padding: 8px 15px
                margin-top: 5px
                margin-bottom: 5px
                margin-left: 20px
                background-color:  lighten($background, 20%)
                position: relative

                &:last-child
                    &:before
                        content: ""
                        position: absolute
                        z-index: 0
                        bottom: 0
                        left: -7px
                        height: 20px
                        width: 20px
                        background: lighten($background, 20%)
                        border-bottom-right-radius: 15px

                    &:after
                        content: ""
                        position: absolute
                        z-index: 1
                        bottom: 0
                        left: -10px
                        width: 10px
                        height: 20px
                        background: $background
                        border-bottom-right-radius: 10px
</style>