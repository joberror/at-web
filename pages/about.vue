<template lang="pug">
#wrap
    PageDefaults(type='header')/
    #main.cl-wrap
    PageDefaults(type='footer')/
</template>

<script>
export default {
    name: "AboutPage",
    head() {
        return {
            title: "Airpresstech: About"
        }
    }
}
</script>