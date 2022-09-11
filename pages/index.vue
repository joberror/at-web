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
            li #[img(src='~assets/img/atlas-copco.png', alt='Atlas Copco')]
            li #[img(src='~assets/img/ingersoll.png', alt='Ingersoll Rand')]
            li #[img(src='~assets/img/sullair.png', alt='SullAir')]
            li #[img(src='~assets/img/elgi.png', alt='Elgi')]
            li #[img(src='~assets/img/compair.png', alt='CompAir')]

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