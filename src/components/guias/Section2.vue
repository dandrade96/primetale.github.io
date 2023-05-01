<script>
import Aging from './info-menu/Aging.vue'
import Armazem from './info-menu/Armazem.vue';
import ItemBoss from './info-menu/ItemBoss.vue';
import LojaPessoal from './info-menu/LojaPessoal.vue';
import Mixagem from './info-menu/Mixagem.vue';
    export default {
        components: {
            Aging,
            Armazem,
            ItemBoss,
            LojaPessoal,
            Mixagem
        },
        name: 'Guia',
        data(){
            return{
                items: [
                    { text: 'Aging', isSelected: true },
                    { text: 'Armazém', isSelected: false },
                    { text: 'Item Boss', isSelected: false },
                    { text: 'Loja Pessoal', isSelected: false },
                    { text: 'Mixagem', isSelected: false }
                ],
                selectedItem:  { text: 'Aging', isSelected: true },
            }
        },
        methods: {
            selectItem: function(item) {
                this.items.forEach(function(item) {
                item.isSelected = false;
                });
                item.isSelected = true;
                this.selectedItem = item;
            }
        }
    }
</script>

<template>
    <section class="flex bg-brown bg-fixed bg-cover bg-no-repeat bg-center h-screen">
        <div class="pt-vnt flex">
            <div class="shadow-inner shadow-white-op-25 bg-preto-ebano w-card-guia h-card-guia ml-246 rounded-50">
                <Aging v-if="selectedItem.text === 'Aging'"/>
                <Armazem v-if="selectedItem.text === 'Armazém'"/>
                <ItemBoss v-if="selectedItem.text === 'Item Boss'"/>
                <LojaPessoal v-if="selectedItem.text === 'Loja Pessoal'"/>
                <Mixagem v-if="selectedItem.text === 'Mixagem'" />
            </div>
            <div class="mt-186 ml-141 space-y-6">
                <span class="text-5xl">Menu</span>
                <ul class="ml-3 space-y-6 list-disc list-inside">
                  
                    <li class="flex items-center" v-for="(item, index) in items" 
                        :key="index"
                        :class="{ 'selected': item.isSelected }"
                        @click="selectItem(item)">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 stroke-yellow-lg cursor-pointer" :class="item.isSelected ? 'fill-gold' : 'fill-none'">
                            <path d="M16 4 L28 16 L16 28 L4 16 Z" />
                        </svg>
                        <span class="cursor-pointer">{{ item.text }}</span>
                    </li>
                    
                </ul>
            </div>
        </div>

        
    </section>
  </template>
  

  
  <style>
  /* Estilos do componente */
  </style>
  