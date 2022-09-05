<template lang="pug">

  header(v-if="type === 'header'", class='cl-wrap pad-top')
    #brand
      a(href='/', title='Homepage')
        ul
          li.logo
            span(v-html='brandLogo')
          li.name.cl-fw-bold airpresstech
    nav
      ul.menu
        nuxt-link(v-for='(menu, i) in menus', tag='li' :to='menu.href', :key='menu.content' exact)
          a.menu-link(:title='menu.title', :data-content='menu.content') {{menu.content}}

    #quote
      a(href='https://bit.ly/WAairpresstech', title='Chat with our representative for a Quote').btn-def Get Quote


  footer(v-else-if="type === 'footer'", class="cl-wrap pad-top")
    #copy
      ul
        li airpresstech
        li
          = '© ' + new Date().getFullYear()

    #nav-links
      ul
        li(v-for='(link, i) in navLink')
          a(:href='link.href', :title='link.title') {{ link.msg }}

    #social-links
      ul
        li(v-for='(link, i) in socialLink')
          a(:href='link.href', :title='link.title')
            span(v-html='link.svg')

  div(v-else)
</template>
<script>
import brandLogo from "~/assets/svg/logo.svg?raw";
import TwitterLogo from "~/assets/svg/twitter.svg?raw";
import FacebookLogo from "~/assets/svg/facebook.svg?raw";
export default {
  props: {
    type: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      brandLogo,
      TwitterLogo,
      FacebookLogo,
      menus: [
        { href: "/", title: "Go to Home page", content: "Home" },
        { href: "/solutions/", title: "Service and solutions we offer", content: "Solutions" },
        { href: "/about/", title: "Read about us", content: "About" },
        { href: "/contact/", title: "Get in touch", content: "Contact" }
      ],
      socialLink: [
        {
          svg: TwitterLogo,
          href: 'https://twitter.com/AirpressL',
          title: 'Interact with us on Twitter'
        },
        {
          svg: FacebookLogo,
          href: 'https://facebook.com/AirpressTech',
          title: 'Interact with us on Facebook'
        }
      ],
      navLink: [
        {
          href: 'tel:+2348138225487',
          title: 'Give us a call',
          msg: 'Phone'
        },
        {
          href: 'mailto:ibrahim.shaibu@airpresstech.com',
          title: 'Get in touch via email',
          msg: 'Mail'
        },
        {
          href: 'https://bit.ly/WAairpresstech',
          title: 'Chat with us on Services & Solutions',
          msg: 'Sales'
        }
      ]
    }
  }
}
</script>