<template lang="pug">
#wrap
    PageDefaults(type='header')/
    #main.cl-wrap
        section.campaign
            h1 The Intelligent #[br] #[span solution services]
            p.note unrivaled professional engineering and solution #[br] services to the topmost manufacturing #[br] companies in Nigeria.
                span
                    a(href='/solutions', title='What we offer').btn-def Learn more
            ul
                li
                    span #[img(src='~assets/img/ir-oil-free.png', alt='IR Compressor')]
                li
                    h3 Using Industrial Air Compressor?

                    p We offer installation, repairs and #[br] other after-sales solutions on #[br] top brands out there.

        ul.brands
            li Atlas Copco
            li Ingersoll Rand
            li Sullair
            li Elgi
            li CompAir

    PageDefaults(type='footer')/
</template>

<script>
export default {
    name: "IndexPage",
    head() {
        return {
            title: "Airpresstech: Home",
            // bodyAttrs: {
            //     class: 'body-cl'
            // }
        }
    }
}
</script>
<style lang="scss" scoped src="assets/sass/home.scss">


</style>