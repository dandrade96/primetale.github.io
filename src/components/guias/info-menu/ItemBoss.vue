<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {},
}
</script>

<template>
    <h1 class="mt-10 ml-5 text-3xl text-center">Itens Boss</h1>
    <div class="mt-5 ml-5 mr-5 space-y-4 text-center text-lg">
        <div class="mt-10">
            <span>
                O Prime Tale conta com alguns itens extremamente raros que somente são adquiridos através dos Boss. 
                Vale ressaltar que os itens são balanceados em relação aos itens da última linha.
            </span>
            <!-- <div class="flex justify-center space-x-10">
                <img src="../../../assets/image/itens/brinco_morte.png" alt="" class="flex object-contain" >
                <img src="../../../assets/image/itens/brinco_vida.png" alt="" class="flex object-contain">
                <img src="../../../assets/image/itens/escudo.png" alt="" class="flex object-contain">
                <img src="../../../assets/image/itens/greedy.png" alt="" class="flex object-contain">
            </div>
        </div>
        <div>
            <ul>
                <li>Brinco do Despertar Vida: </li>
                <li>Brinco do Despertar Morte:</li>
                <li>Escudo da Dama:</li>
                <li>Luvas do Greedy:</li>
            </ul> -->

            <div class="grid grid-cols-2 md:justify-center md:ml-5 md:mt-5">
                <div class="flex md:w-11/12 bg-brown rounded-30 border-white-op-25 border-2">
                    <div class="flex w-4/12 justify-center">
                        <img src="../../../../public/image/itens/brinco_vida.png" class="object-scale-down"/>
                    </div>
                    <div class="flex-col w-8/12 justify-start mt-4 space-y-3">
                        <h5 class="text-left">Brinco do Despertar Vida</h5>
                        <p class="text-left text-sm">Item de <span class="text-red-boss">Vida</span> Raro, pode ser encontrado ao derrotar o Boss <span class="text-green-boss">Celine.</span></p>
                    </div>
                </div>
                <div class="flex md:w-11/12 bg-brown rounded-30 border-white-op-25 border-2">
                    <div class="flex w-4/12 justify-center">
                        <img src="../../../../public/image/itens/brinco_morte.png" class="object-scale-down"/>
                    </div>
                    <div class="flex-col w-8/12 justify-start mt-4 space-y-3">
                        <h5 class="text-left">Brinco do Despertar Morte</h5>
                        <p class="text-left text-sm">
                            Item da <span class="text-red-boss">Morte</span> Raro, pode ser encontrado ao derrotar o Boss <span class="text-purple-boss">Fúria.</span>
                        </p>
                    </div>
                </div>
                <div class="flex md:w-11/12 bg-brown rounded-30 border-white-op-25 border-2 md:mt-4">
                    <div class="flex w-4/12 justify-center">
                        <img src="../../../../public/image/itens/escudo.png" class="object-scale-down"/>
                    </div>
                    <div class="flex-col w-8/12 justify-start mt-4 space-y-3">
                        <h5 class="text-left">Escudo da Dama</h5>
                        <p class="text-left text-sm">Item Raro, pode ser encontrado ao derrotar o Boss <span class="text-red-boss">Dama de Fogo.</span></p>
                    </div>
                </div>
                <div class="flex md:w-11/12  bg-brown rounded-30 border-white-op-25 border-2 md:mt-4">
                    <div class="flex w-4/12 justify-center">
                        <img src="../../../../public/image/itens/greedy.png" class="object-scale-down"/>
                    </div>
                    <div class="flex-col w-8/12 justify-start mt-4 space-y-3">
                        <h5 class="text-left">Luvas do Greedy</h5>
                        <p class="text-left text-sm">Item Raro, pode ser encontrado ao derrotar o Boss <span class="text-blue-boss">Greedy.</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
