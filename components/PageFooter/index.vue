<script lang="ts" setup>
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const footerLinks = [
  {
    title: 'Brands',
    links: [
      {
        title: 'Adidas',
        path: '#adidas'
      },
      {
        title: 'Puma',
        path: '#puma'
      },
      {
        title: 'Reebok',
        path: '#reebok'
      },
      {
        title: 'Nike',
        path: '#nike'
      }
    ]
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About Us',
        path: '#about-us'
      },
      {
        title: 'Find a Store',
        path: '#find-a-store'
      },
      {
        title: 'Rules and Terms',
        path: '#rules-and-terms'
      },
      {
        title: 'Sitemap',
        path: '#sitemap'
      },
      {
        title: 'Career',
        path: '#career'
      }
    ]
  },
  {
    title: 'Help',
    links: [
      {
        title: 'Contact Us',
        path: '#concat-us'
      },
      {
        title: 'Money Refund',
        path: '#money-refund'
      },
      {
        title: 'Order Status',
        path: '#order-status'
      },
      {
        title: 'Shipping Info',
        path: '#shipping-info'
      },
      {
        title: 'Open Dispute',
        path: '#open-dispute'
      }
    ]
  },
  {
    title: 'Account',
    links: [
      {
        title: 'Login',
        path: '#login'
      },
      {
        title: 'Register',
        path: '#register'
      },
      {
        title: 'Account Setting',
        path: '#account-setting'
      },
      {
        title: 'My Orders',
        path: '#my-orders'
      }
    ]
  },
  {
    title: 'Social',
    links: [
      {
        icon: faFacebook,
        title: 'Facebook',
        path: '#facebook'
      },
      {
        icon: faTwitter,
        title: 'Twitter',
        path: '#twitter'
      },
      {
        icon: faInstagram,
        title: 'Instagram',
        path: '#instagram'
      },
      {
        icon: faYoutube,
        title: 'Youtube',
        path: '#youtube'
      }
    ]
  }
]
</script>

<template>
  <footer class="pt7.5 bg-gray-100" v-bind="$attrs">
    <div class="container mxauto">
      <div class="flex justify-between pb12">
        <footer-link
          v-bind="footerLink"
          v-for="footerLink in footerLinks"
          :key="footerLink.title"
        />
      </div>
      <div
        class="flex justify-between items-center pt5 pb7.5 border-t-1 space-x-5"
      >
        <div class="text-sm text-theme-black-200">
          © 2019 Pixsellz. All rights reserved.
        </div>
        <div class="flex space-x-5">
          <div class="text-sm text-theme-black-200">info@pixsellz.io</div>
          <div class="text-sm text-theme-black-200">879-332-9375</div>
          <div class="text-sm text-theme-black-200">
            456 Hagenes Gardens Suite 808
          </div>
        </div>
        <div class="flex space-x-2.5">
          <a href="#">
            <img src="~/assets/payment1.png" alt="" />
          </a>
          <a href="#">
            <img src="~/assets/payment2.png" alt="" />
          </a>
          <a href="#">
            <img src="~/assets/payment3.png" alt="" />
          </a>
          <a href="#">
            <img src="~/assets/payment4.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
