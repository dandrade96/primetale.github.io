<template class="bg-brown">
    <div class="flex justify-between w-card-guia mb-10 space-x-3" v-if="isLoaded">
        <div class="w-full rounded-xl shadow-inner shadow-white-op-25 bg-preto-ebano h-20"  v-for="(job, index) in filteredBP.slice(0,3)" :key="job.id">
            <div class=" flex flex-wrap justify-center w-full p-3 top-3">
                <span class="flex items-center w-auto justify-center">
                    <img :src="index === 0 ? '/src/assets/image/crown-gold.png' : index === 1 ? '/src/assets/image/crown-silver.png' : index === 2 ? '/src/assets/image/crown-bronze.png' : ''" alt="" class="w-12/12">
                </span>
                <span class="flex items-center w-6/12 mt-2 ml-3 text-xl justify-center" :class="{ 'text-gold-rk': index === 0, 'text-silver-rk': index === 1, 'text-bronze-rk': index === 2}">{{ job.Name }}</span>
                <!-- <span class="flex items-center w-full sm:w-6/12 text-md justify-center">BattlePoint: {{ job.BattlePoint }}</span> -->
                <span class="flex items-center w-full sm:w-12/12 text-md justify-center">RankPoint: {{ job.RankPoint }}</span>
            </div>
        </div>
    </div>
    <div class="shadow-inner shadow-white-op-25 bg-preto-ebano w-card-guia h-auto rounded-50 overflow-y-auto table-container" v-if="isLoaded">
        <table  class="table-auto ml-5 mr-5 w-11/12 items-center mt-10 mb-2 max-h-40 z-50 ">
            <thead class="sticky top-5 bg-preto-ebano">
                <tr class="items-center justify-center ">
                    <th>Posição</th>
                    <th>Nick</th>
                    <!-- <th>BP's</th> -->
                    <th>Rank Point</th>
                </tr>
            </thead>
            <tbody class="mt-4">
                <tr class="text-center hover:bg-yellow cursor-default" v-for="(job, index) in filteredBP.slice(3,20)" :key="job.id">
                    <td>{{ index+4 }}</td>
                    <td>{{ job.Name }}</td>
                    <!-- <td>{{ job.BattlePoint }}</td> -->
                    <td>{{ job.RankPoint }}</td>
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
        isLoaded: false
    };
    },
    mounted() {
        this.fullRanking()
    },
    methods: {
        fullRanking() {
            axios.get('https://prime.pristonsolutions.com.br/ranking-bp')
                .then(response => {
                    const nomes = {}
                    for (const item of response.data) {
                        const nome = item
                        if (!nomes[nome.Name]) {
                            nomes[nome.Name] = true
                            this.jobs.push(nome)
                        }
                    }

                    this.isLoaded = true
                })
                .catch(error => {
                    console.log(error)
                })
        },
    
        
    },
    computed: {
        filteredBP() {
            return this.jobs.filter(job => job.BattlePoint > 0).sort((a, b) => b.RankPoint - a.RankPoint);
        }
    }
}
</script>
