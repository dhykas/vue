<template>
    <form @submit.prevent="store">
        <input v-model="warga.nama" type="text">
        <input v-model="warga.no_rumah" type="number">
        <select v-model="warga.jenis_kelamin">
            <option value="L">Laki-Laki</option>
            <option value="P">Perempuan</option>
        </select>
        <button class="btn btn-primary" type="submit">Add</button>
    </form>
</template>
<script>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    export default {
        setup(){
            const warga = reactive({
                nama : "",
                no_rumah : "",
                jenis_kelamin : ""
            })
            const router = useRouter()

            function store(){
                let dataNama = warga.nama
                let dataNorumah = warga.no_rumah
                let dataJeniskelamin = warga.jenis_kelamin

                axios.post('http://restapi.test:8081/api/warga',{
                    nama : dataNama,
                    no_rumah : dataNorumah,
                    jenis_kelamin : dataJeniskelamin,
                }).then(()=>{
                    router.push({
                        name : "warga.index"
                    })
                }).catch(error=>{
                    console.log(error.response.data)
                })
            }
            return{warga,router,store}
        }
    }
</script>