<script>
    export default({
        name: 'Sec',
        data(){
            return{

            }
        },
        methods: {},
     
    })
</script>

<template>
    <section class="bg-brown h-screen block mt-0">
        <div class="px-50px pt-vnt text-2xl">
            <h1 class="font-hom text-2xl mb-59">ÚLTIMAS NOTÍCIAS</h1>
            <div class="flex justify-between w-full">
                <div class="bg-banner-1 bg-no-repeat bg-cover w-1/2 rounded h-212 mr-172 cursor-pointer">
                    <div class="ml-48 mt-20">UPDATES</div>
                    <div>
                        <svg width="228" height="30" class="drop-shadow-3xl ml-33">
                            <path d="M 5 5 L 224 5"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                marker-start="url(#ball)"
                             />
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
                </div>
                <div class="bg-banner-2 bg-no-repeat bg-cover w-1/2 rounded h-212 ml-172 cursor-pointer">
                    <div class="ml-48 mt-20">COMUNICADOS</div>
                    <div>
                        <svg width="228" height="30" class="drop-shadow-3xl ml-33">
                            <path d="M 5 5 L 224 5"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                marker-start="url(#ball)"
                             />
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
                </div>
            </div>
            <div class="flex bg-banner-3 w-12/12 rounded-30 mt-10 h-417 cursor-pointer items-center justify-center">
                <span class="items-center justify-center z-50 absolute text-8xl text-shadow-black">EVENTOS ATIVOS</span>
                <div>
                    <svg width="879" height="30" class="mt-24 z-0 drop-shadow-3xl">
                    <path d="M 5 18 L 875 18"
                        stroke="white"
                        stroke-width="2"
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
            </div>
        </div>
    </section>
</template>