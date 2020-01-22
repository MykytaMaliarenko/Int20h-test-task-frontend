<template>
  <router-view/>
</template>

<style lang="sass">
    @import "assets/theme"

    html
        background-color: $background
        color: $font-on-background

    body, html
        height: 100%
        display: grid
</style>
