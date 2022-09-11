<template lang="pug">
#wrap
    PageDefaults(type='header')/
    #main.cl-wrap
        section#intro
            div
                h2 Airpress Technical and Allied Service Limited
                p A company registered in Nigeria, incorporated in Jan., 2011 and #[br] became a Public Company in Nov., 2012 in compliance with #[br] Nigeria Enterprise Promotion Decree of 1972.
            div
                span(v-html='brandLogo')

        section#pro
            div
                p We are known for working closely with our clients to meet their #[br] demand and exceeding  expectations in terms of quality sales,#[br] maintenance & installation  services.
            div
                ul
                    li
                        ul
                            li #[span(v-html='svgBox')]
                            li Installations
                            li With our experienced team and expertise, #[br] we provide quality installation and after- #[br]service solutions.
                    li
                        ul
                            li #[span(v-html='svgTool')]
                            li Maintenance
                            li At Airpresstech, various maintenance #[br] policies and plans are introduce to #[br] help boost productivity of your #[br] equipments at maximum level.
                    li
                        ul
                            li #[span(v-html='svgTruck')]
                            li Sales
                            li Sales of Industrial Air Compressors, spare #[br] parts and complete unit of various #[br]compressors brands.

        section#corp
            ul
                li
                    h4 Our Vision:
                    p To become the top indigenous servicing #[br] company in Nigeria by harnessing local #[br] technical talents and pursuing business #[br] through innovation and advanced  #[br] technology.
                li
                    h4 Our Mission:
                    p To focus our creativity and innovation #[br] in delivery of the highest quality services #[br] with the sens of commitment in making #[br] engineering services relevant and #[br] affordable to every manufacturing #[br] company in Nigeria and beyond.
                li
                    h4 Our Edge:
                    p + Innovation #[br] #[br] + Efficiency #[br] #[br] + Reliability


    PageDefaults(type='footer')/
</template>

<script>
import brandLogo from '~/assets/svg/logo.svg?raw'
import svgBox from '~/assets/svg/box.svg?raw'
import svgTool from '~/assets/svg/tool.svg?raw'
import svgTruck from '~/assets/svg/truck.svg?raw'

export default {
  name: 'AboutPage',
  data() {
    return {
      brandLogo,
      svgBox,
      svgTool,
      svgTruck,
    }
  },
  head() {
    return {
      title: 'Airpresstech: About',
    }
  },
}
</script>
<style lang="scss" scoped src="assets/sass/about.scss"></style>