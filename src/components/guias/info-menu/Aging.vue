<script>
    export default {
        data(){
            return{
                items: [
                    {name: "+1",sheltom: {fadeo: 2,sparky: 2,raident: 1, sucesso: '100%', falha: '0%' }},
                    {name: "+2",sheltom: {fadeo: 2,sparky: 2,raident: 2, sucesso: '100%', falha: '0%' }},
                    {name: "+3",sheltom: {fadeo: 2,sparky: 2,raident: 2, transparo: 1, sucesso: '100%', falha: '0%' }},
                    {name: "+4",sheltom: {fadeo: 2,sparky: 2,raident: 2, transparo: 2, sucesso: '100%', falha: '0%'}},
                    {name: "+5",sheltom: {fadeo: 2,sparky: 2,raident: 2, transparo: 2, murky: 1, sucesso: '100%', falha: '0%' }},
                    {name: "+6",sheltom: {fadeo: 2,sparky: 2,raident: 2, transparo: 2, murky: 2 , sucesso: '100%', falha: '0%'}},
                    {name: "+7",sheltom: {fadeo: 2,sparky: 2,raident: 2, transparo: 2, murky: 2, devine: 1, sucesso: '100%', falha: '0%'  }},
                    {name: "+8",sheltom: {fadeo: 2,sparky: 2,raident: 2, transparo: 2, murky: 2, devine: 2, sucesso: '100%', falha: '0%' }},
                    {name: "+9",sheltom: {sparky: 2,raident: 2, transparo: 2, murky: 2, devine: 2, celesto: 1, sucesso: '100%', falha: '0%' }},
                    {name: "+10",sheltom: {sparky: 2,raident: 2, transparo: 2, murky: 2, devine: 2, celesto: 2, sucesso: '100%', falha: '0%' }},
                    {name: "+11",sheltom: {raident: 2, transparo: 2, murky: 2, devine: 2, celesto: 2,mirage: 1, sucesso: '90%', falha: '10%' }},
                    {name: "+12",sheltom: {raident: 2, transparo: 2, murky: 2, devine: 2, celesto: 2,mirage: 2, sucesso: '85%', falha: '15%' }},
                    {name: "+13",sheltom: {transparo: 2, murky: 2, devine: 2, celesto: 2,mirage: 2,inferna: 1, sucesso: '80%', falha: '20%' }},
                    {name: "+14",sheltom: {transparo: 2, murky: 2, devine: 2, celesto: 2,mirage: 2,inferna: 2, sucesso: '75%', falha: '25%' }},
                    {name: "+15",sheltom: {murky: 2, devine: 2, celesto: 2,mirage: 2,inferna: 2, enigma: 1, sucesso: '70%', falha: '30%' }},
                    {name: "+16",sheltom: {murky: 2, devine: 2, celesto: 2,mirage: 2,inferna: 2, enigma: 2, sucesso: '65%', falha: '35%' }},
                    {name: "+17",sheltom: {devine: 2, celesto: 2,mirage: 2,inferna: 2, enigma: 2, bellum: 1, sucesso: '60%', falha: '40%' }},
                    {name: "+18",sheltom: {devine: 2, celesto: 2,mirage: 2,inferna: 2, enigma: 2, bellum: 2, sucesso: '55%', falha: '45%' }},
                    {name: "+19",sheltom: {celesto: 2,mirage: 2,inferna: 2, enigma: 2, bellum: 2, ordo: 1, sucesso: '50%', falha: '50%' }},
                    {name: "+20",sheltom: {celesto: 2,mirage: 2,inferna: 2, enigma: 2, bellum: 2, ordo: 2, sucesso: '45%', falha: '55%' }},
                ]
            }
        },
        methods: {},
    }
</script>

<template>
    <h1 class="mt-10 ml-5 text-3xl text-center">Sistema de Aging</h1>
    <table class="table-auto ml-5 mr-5 w-11/12 items-center mt-10">
        <thead>
            <tr class="items-center justify-center">
                <th>Aging</th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/fadeo.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/raident.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/sparky.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/transparo.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/murky.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/devine.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/celesto.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/mirage.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/inferna.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/enigma.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/bellum.png" alt="" srcset=""></th>
                <th><img class="mx-auto block" src="../../../assets/image/sheltons/ordo.png" alt="" srcset=""></th>
                <th>Tx. Sucesso</th>
                <th>Tx. Quebra</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-center hover:bg-yellow cursor-default" v-for="item in items">
                <td>{{ item.name }}</td>
                <td>{{ item.sheltom.fadeo }}</td>
                <td>{{ item.sheltom.sparky }}</td>
                <td>{{ item.sheltom.raident }}</td>
                <td>{{ item.sheltom.transparo }}</td>
                <td>{{ item.sheltom.murky }}</td>
                <td>{{ item.sheltom.devine }}</td>
                <td>{{ item.sheltom.celesto }}</td>
                <td>{{ item.sheltom.mirage }}</td>
                <td>{{ item.sheltom.inferna }}</td>
                <td>{{ item.sheltom.enigma }}</td>
                <td>{{ item.sheltom.bellum }}</td>
                <td>{{ item.sheltom.ordo }}</td>
                <td>{{ item.sheltom.sucesso }}</td>
                <td>{{ item.sheltom.falha }}</td>
            </tr>
            
        </tbody>
    </table>
</template>
