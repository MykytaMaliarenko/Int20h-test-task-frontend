<template>
    <section class="container">
        <AnonymousMessage :messages="['Winner winner chicken dinner!', 'xd']"/>


    </section>
</template>

<script>
    import AnonymousMessage from "./components/AnonymousMessage";

    export default {
        name: "Result",

        components: {AnonymousMessage}
    }
</script>

<style scoped>
</style>