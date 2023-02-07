<template>
    
    <div class="container">
    
        <a href="/tambahDataWarga"><button type="button" class="btn btn-primary">tambah data</button></a>
        
    
<h1>Data Warga</h1>
    <table class="table table-hover table-dark">
        <thead>
            <tr>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>No rumah</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(warga, index) in dataWarga" :key="index" >
                <td>{{ warga.nama }}</td>
                <td>{{  warga.jenis_kelamin  == 'L' ? "Laki-Laki" : "Perempuan"}}</td>
                <td>{{ warga.no_rumah }}</td>
                <td>
                    <!-- <router-link :to="{
                        name: 'warga.edit',
                        params: { id: warga.id }
                    }" class="btn btn-danger">Delete</router-link>  -->
                    <router-link :to="{
                        name: 'warga.editDataWarga',
                        params: { id: warga.id }
                    }" class="btn btn-warning">Edit</router-link>
                </td>
            </tr>
        </tbody>
    </table>
    
</div>
</template>

<script>
import { onMounted,ref } from 'vue'
import axios from 'axios'

    export default{
        setup(){
            let dataWarga = ref([])
            onMounted(() =>{
                axios.get('http://restapi.test:8081/api/warga').then(response => {
                    dataWarga.value = response.data.data
                }).catch(err => {
                    console.log(err.response.data)
                })

            })
            return {
                dataWarga 
            }

        }
    }
      </script>

<style>
</style>
