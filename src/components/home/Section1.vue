<script>
    export default({
        name: 'Sec',
        data(){
            return{

            }
        },
        methods: {
            redirect(value) {
                value === 'download' ? window.open('https://drive.google.com/file/d/17aDjqb44T27JTTTj8uOBwglmwzYxfPAw/view', '_blank') : ''
            }
        },
     
    })
</script>

<template>
    <section class="bg-home bg-fixed bg-cover bg-no-repeat bg-center h-screen">
        <div class="pt-vht">
            <h1 class="text-yellow-lg drop-shadow-3xl pl-50px text-xl pb-5">Prime Tale</h1>
            <P class="text-white drop-shadow-3xl pl-50px text-lg w-1/3 pb-5">Prime Tale é um MMORPG gratuito que se concentra em 
                um sistema de batalha em tempo real.
                Mergulhe no mundo da fantasia e curta a ação MMO de 
                ritmo acelerado!
            </P>
            <p class="text-gold drop-shadow-3xl pl-50px text-lg w-1/3 pb-5">
                Chame seus Amigos e junte-os em uma batalha épica!
            </p>

            <button class="bg-green bg-opacity-60 r-10 text-white drop-shadow-3xl ml-50px text-lg hover:border-green hover:text-gold" @click="redirect('download')">
                <span class="drop-shadow-3xl text-white">Download</span>
            </button>
            <button class="bg-yellow bg-opacity-0 border-yellow border-2 hover:border-yellow-lg r-10 text-white ml-50px text-lg hover:text-yellow-lg" @click="redirect('cadastro')">
                <span class="drop-shadow-3xl text-white hover:text-yellow-lg">Cadastro</span>
            </button>
        </div>
    </section>
</template>