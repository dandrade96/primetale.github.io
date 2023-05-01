<script>
    export default({
        name: 'Guia',
        data(){
            return{

            }
        },
        methods: {}
    })
</script>

<template>
   <section class="flex bg-info bg-fixed bg-cover bg-no-repeat bg-center h-screen items-center justify-center">
       <span class="items-center justify-center z-10 absolute text-8xl text-shadow-black ">Informações</span>
                <div>
                    <svg width="890" height="30" class="mt-24 z-0 drop-shadow-3xl">
                    <path d="M 10 18 L 875 18"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        marker-start="url(#ball)"
                        marker-end="url(#ball)" />
                    <defs>
                    <marker id="ball"
                            markerWidth="10"
                            markerHeight="10"
                            refX="5"
                            refY="5">
                        <circle cx="5" cy="5" r="2" fill="white" />
                    </marker>
                    </defs>
                </svg>
                </div>
    </section>
  </template>
  

  
  <style>
  /* Estilos do componente */
  </style>
  