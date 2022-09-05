<template lang="pug">
#wrap
    PageDefaults(type='header')/
    #main.cl-wrap
    PageDefaults(type='footer')/
</template>

<script>
export default {
    name: "SolutionsPage",
    head() {
        return {
            title: "Airpresstech: Solutions"
        }
    }
}
</script>