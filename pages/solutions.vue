<template lang="pug">
#wrap
    PageDefaults(type='header')/
    #main.cl-wrap
        section#head
            p #[span Airpresstech] renders professional engineering services to the manufacturing companies mostly in the areas of industrial Air Compressors, as our well-trained and result driven personnel are ground for prompt deployment 24/7.

        section#brands
            div.brands
                h2 Specialized Brands
                ul
                    li #[span #[img(src='~assets/img/atlas-copco.png', alt='Atlas Copco logo')]] Atlas Copco
                    li #[span #[img(src='~assets/img/ingersoll.png', alt='Ingersoll logo')]] Ingersoll Rand
                    li #[span #[img(src='~assets/img/sullair.png', alt='Sullair logo')]] Sullair
                    li #[span #[img(src='~assets/img/elgi.png', alt='Elgi logo')]] Elgi
                    li #[span #[img(src='~assets/img/compair.png', alt='CompAir logo')]] CompAir

            div.products
                h2 Products
                ul
                    li
                        h3 Oil-injector Compressor
                        span #[img(src='~assets/img/oil-injected.jpg', alt='Oil Injected')]
                    li
                        h3 Oil-free Compressor
                        span #[img(src='~assets/img/oil-free.jpeg', alt='Oil Free')]
                ul
                    li
                        h3 Mobile Compressor
                        span #[img(src='~assets/img/mobile-compressor.jpg', alt='Mobile Compressor')]
                    li
                        h3 Mobile Compressor
                        span #[img(src='~assets/img/mobile-compressor-2.jpg', alt='Mobile Compressor')]

        section#maintenance
            h2 Maintenance Service Options / Plans
            p Service delivery is our topmost priority and we take pride in ensuring Airpress provides the best possible support in the industry for Compressed Air Systems. As a result, we have been able to build a business for these couple of years with a concept we call #[b ‘360 degrees sales and service’]. #[br] #[br] Therefore, to achieve this we set up comprehensive plans to satisfy our clients, based on their preference as explained below;

            ul
                li
                    h3 Total Responsibility Plan #[br] (TRP)
                    p This plan covers all compressed air systems, all routine services, breakdown, repairs, overhaul, travel and accommodation.

                li
                    h3 Preventive Maintenance Plan #[br] (PMP)
                    p  This plan includes all periodic servicing following manufacturer’s recommendation and a complete diagnostics report after each visit.

                li
                    h3 Inspection Plan #[br] (IP)
                    p  This plan consists of regular inspection visits that results in a comprehensive diagnostics report, along with any recommendations.

    PageDefaults(type='footer')/
</template>

<script>
export default {
  name: 'SolutionsPage',
  head() {
    return {
      title: 'Airpresstech: Solutions',
    }
  },
}
</script>
<style lang="scss" scoped src="assets/sass/solutions.scss"></style>