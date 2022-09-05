<template lang="pug">
#wrap
    PageDefaults(type='header')/
    #main.cl-wrap
    PageDefaults(type='footer')/
</template>

<script>
export default {
    name: "ContactPage",
    head() {
        return {
            title: "Airpresstech: Contact"
        }
    }
}
</script>