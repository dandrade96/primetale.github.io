<template class="bg-brown">
  <section class="flex flex-wrap bg-brown bg-fixed bg-cover bg-no-repeat bg-center h-auto justify-center">
    <img src=".././assets/image/banner4.svg" alt="" class="z-0 absolute">
    <div class="flex w-full justify-center space-x-4 z-10 pt-24">
        <button class="flex space-x-4 z-10 lg:h-8 xl:h-11 text-center lg:text-sm" @click="ranking('RP')">Ranking Point</button>
        <button class="flex space-x-4 z-10 lg:h-8 xl:h-11 text-center lg:text-sm" @click="ranking('BPt')">BP Total</button>
        <button class="flex space-x-4 z-10 lg:h-8 xl:h-11 text-center lg:text-sm" @click="ranking('BPw')">BP Semanal</button>
    </div>
    <div class="flex flex-wrap justify-center items-center z-10 mb-5 mt-2">  
      <RKPoint v-if="active === 'RP'"/>
      <BPTotal v-if="active === 'BPt'"/>
      <BPClass v-if="active === 'BPw'"/>
    </div>
  </section>
</template>

<script>
  import RKPoint from './Ranking/RK-Point.vue'
  import BPTotal from './Ranking/BP-Total.vue'
  import BPClass from './Ranking/BP-Class.vue'
  
  export default {
    components: {
      RKPoint,
      BPTotal,
      BPClass
    },
    data() {
      return {
        active: 'RP'
      }
    },
    methods: {
      ranking($value) {
        this.active = $value
      }
    }
  }
</script>

<style>
  .nav, .nav ul{
     @apply bg-brown !important;
  }
</style>