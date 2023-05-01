<template class="bg-brown">
    <div class="flex w-card-guia justify-center" v-if="isLoaded">
        <ul class="flex flex-row flex-w space-x-4">
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'as' ? 'border-gold text-gold': ''" @click="changedJobs(3, 'as')">Arqueira</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'ass' ? 'border-gold text-gold': ''" @click="changedJobs(9, 'ass')">Assassina</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'ata' ? 'border-gold text-gold': ''" @click="changedJobs(5, 'ata')">Atalanta</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'ks' ? 'border-gold text-gold': ''" @click="changedJobs(6, 'ks')">Cavaleiro</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'gr' ? 'border-gold text-gold': ''" @click="changedJobs(11, 'gr')">Guerreira</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'fs' ? 'border-gold text-gold': ''" @click="changedJobs(1, 'fs')">Lutador</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'mg' ? 'border-gold text-gold': ''" @click="changedJobs(7, 'mg')">Mago</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'ms' ? 'border-gold text-gold': ''" @click="changedJobs(2, 'ms')">Mecanico</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'ps' ? 'border-gold text-gold': ''" @click="changedJobs(4, 'ps')">Pikeman</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'prs' ? 'border-gold text-gold': ''" @click="changedJobs(8, 'prs')">Sacerdotisa</li>
            <li class="px-4 border-2 bg-brown border-brown rounded-30 cursor-pointer" :class="selected === 'xm' ? 'border-gold text-gold': ''" @click="changedJobs(10, 'xm')">Xamã</li>
        </ul>
    </div>
    <div class="flex justify-between w-card-guia mb-10 space-x-3" v-if="isLoaded">
        <div class="w-full rounded-xl shadow-inner shadow-white-op-25 bg-preto-ebano h-20"   v-for="(job, index) in filteredJobs.slice(0,3)" :key="job.id">
            <div class=" flex flex-wrap justify-center w-12/12 p-3 top-3">
                <span class="flex items-center w-auto justify-center">
                    <img :src="index === 0 ? '/src/assets/image/crown-gold.png' : index === 1 ? '/src/assets/image/crown-silver.png' : index === 2 ? '/src/assets/image/crown-bronze.png' : ''" alt="" class="w-12/12">
                </span>
                <span class="flex items-center w-6/12 mt-2 ml-3 text-xl justify-center" :class="{ 'text-gold-rk': index === 0, 'text-silver-rk': index === 1, 'text-bronze-rk': index === 2}">{{ job.Name }}</span>
                <span class="flex items-center w-full sm:w-12/12 text-md justify-center">BattlePointw: {{ job.BattlePointW }}</span>
                <!-- <span class="flex items-center w-full sm:w-12/12 text-md justify-center">RankPoint: {{ job.RankPoint }}</span> -->
            </div>
        </div>
    </div>
    <div class="shadow-inner shadow-white-op-25 bg-preto-ebano w-card-guia h-auto rounded-50 overflow-y-auto table-container" v-if="isLoaded">
        <table  class="table-auto ml-5 mr-5 w-11/12 items-center mt-10 max-h-40 z-50">
            <thead class="sticky top-10 bg-preto-ebano">
                <tr class="items-center justify-center ">
                    <th>Posição</th>
                    <th>Nick</th>
                    <th>BPw's</th>
                    <!-- <th>DP's</th> -->
                </tr>
            </thead>
            <tbody class="">
                <tr class="text-center hover:bg-yellow cursor-default" v-for="(job, index) in filteredJobs.slice(3,20)" :key="job.id">
                    <td>{{ index+4 }}</td>
                    <td>{{ job.Name }}</td>
                    <td>{{ job.BattlePointW }}</td>
                    <!-- <td>{{ job.DeathPoint }}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        jobs: [],
        filterJobCode: 3,
        isLoaded: false,
        selected: 'as'
      };
    },
    mounted() {
        this.fetchJobs()
    },
    methods: {
        fetchJobs() {
            axios.get('https://prime.pristonsolutions.com.br/ranking-bp')
                .then(response => {
                    this.jobs = response.data;
                    this.isLoaded = true
                })
                .catch(error => {
                    console.log(error);
                });
        },
        changedJobs(job, classe) {
            this.selected = classe
            this.fetchJobs()
            this.filterJobCode = job
        }
    },
    computed: {
        filteredJobs() {
            return this.jobs.filter(job => job.JobCode === this.filterJobCode && job.BattlePointW >= 0).sort((a, b) => b.BattlePointW - a.BattlePointW);
         },
    }
  }
</script>