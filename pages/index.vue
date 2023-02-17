<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAccusoft,
  faAdn,
  faAlgolia,
  faAlipay,
  faAmazon,
  faAirbnb
} from '@fortawesome/free-brands-svg-icons'
const firstCommodities = [
  {
    id: '1',
    img: 'https://img.js.design/assets/img/623bf9ff941132bcfb9f5a5d.png',
    title: 'Winter suit good one',
    price: '3753.00'
  },
  {
    id: '2',
    img: 'https://img.js.design/assets/img/623bfa00479d474310642100.png',
    title: 'Blue jeans bag for travel',
    price: '3753.00'
  },
  {
    id: '3',
    img: 'https://img.js.design/assets/img/623bf9ffdda328603573fdd5.png',
    title: 'Amazing T-shirt name here',
    price: '3753.00'
  },
  {
    id: '4',
    img: 'https://img.js.design/assets/img/623bf9ff71a48c527683ebb8.png',
    title: 'Jeans material clothe name',
    price: '3753.00'
  }
]

const secondCommodities = [
  {
    id: '1',
    img: 'https://img.js.design/assets/img/623bf9ff411bfc44820b55e3.png',
    title: 'Apple smartwatch black',
    price: '3753.00'
  },
  {
    id: '2',
    img: 'https://img.js.design/assets/img/623bf9ff411bfc5fc40b55e7.png',
    title: 'Amazing sofa for hall',
    price: '3753.00'
  },
  {
    id: '3',
    img: 'https://img.js.design/assets/img/623bf9ff411bfca27d0b55e2.png',
    title: 'Leather wallet brown lacoste',
    price: '3753.00'
  },
  {
    id: '4',
    img: 'https://img.js.design/assets/img/623bf9ff85b57d7503e3ef7c.png',
    title: 'Bose Headphones 700',
    price: '3753.00'
  }
]

const brands = [faAccusoft, faAdn, faAlgolia, faAlipay, faAmazon, faAirbnb]
</script>

<template>
  <section class="container mxauto">
    <div class="cursor-pointer pt5 py7.5">
      <img src="~/assets/banner.png" alt="banner" />
    </div>
    <div class="mb9 p5 b-rd-2 border-1 mb9">
      <home-features />
    </div>
    <div class="space-y-11 mb22">
      <home-commodify
        v-bind="{
          title: 'Popular products',
          simpleCommodities: firstCommodities
        }"
      />
      <home-commodify
        v-bind="{
          title: 'Popular products',
          simpleCommodities: secondCommodities
        }"
      />
    </div>
    <div class="mb30">
      <h1 class="text-7 font-bold mb9">Our brands</h1>
      <div class="flex justify-between">
        <FontAwesomeIcon
          :icon="brand"
          v-for="(brand, index) in brands"
          :key="index"
          class="text-8xl text-theme-black-300"
        />
      </div>
    </div>
    <div class="flex justify-between items-center mb15">
      <h1 class="text-7 font-bold">Download app</h1>
      <div class="flex space-x-2">
        <a href="#">
          <img src="~/assets/apple-store.png" alt="apple-store" />
        </a>
        <a href="#">
          <img src="~/assets/google-store.png" alt="apple-store" />
        </a>
      </div>
    </div>
  </section>
</template>
